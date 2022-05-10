import AppBar from "components/AppBar/AppBar";
import Container from "components/Conteiner/Conteiner";
import { lazy, Suspense, useEffect} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import operations from "redux/authUser/authUserAsyncThunk";
import PrivateRoute from "components/PrivateRoutes/PrivateRoutes";
import PublicRoute from "components/PublicRoutes/PublicRouters";
import authSelectors from "redux/authUser/authUserSelector";
import CircleLoader from "react-spinners/CircleLoader";

const HomeView = lazy(() => import('views/HomeView'));
const RegistrationView = lazy(() => import('views/RegistrationView'));
const LoginUserView = lazy(() => import('views/LoginUserView'));
const ContactsView = lazy(() => import('views/ContactsView'));

export default function AppRouter () {
  const dispatch = useDispatch();
  const isFetchCurrentUser = useSelector(authSelectors.getFetchCurrentUser);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return(
    <Container>
    {!isFetchCurrentUser && (
    <>
      <AppBar />
    <Suspense fallback={<CircleLoader color="red" size={150} />}>
          <Routes>
            <Route path="/" element={
              <PublicRoute >
                <HomeView/>
              </PublicRoute>
            }/>
            <Route path="register" element={
              <PublicRoute restricted>
                <RegistrationView/>
              </PublicRoute>
            }/>
            <Route path="login" element={
              <PublicRoute redirectTo="contacts" restricted>
                <LoginUserView/>
              </PublicRoute>
            }/>
            <Route path="contacts" element={
              <PrivateRoute>
                <ContactsView/>
              </PrivateRoute>
            }/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
        </Suspense>
      </>
      )}
    </Container>
  )}

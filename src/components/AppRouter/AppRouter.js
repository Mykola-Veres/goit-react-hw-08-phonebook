import AppBar from "components/AppBar/AppBar";
import Container from "components/Conteiner/Conteiner";
// import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeView from "views/HomeView";
import RegistrationView from "views/RegistrationView";
import LoginUserView from "views/LoginUserView";
import ContactsView from "../../views/ContactsView"


export default function AppRouter () {
  return(
    <Container>
      <AppBar />

      {/* <Suspense fallback={<></>}> */}

        <Routes>
          <Route path="/" element={<HomeView/>}/>
          <Route path="register" element={<RegistrationView/>}/>
          <Route path="login" element={<LoginUserView/>}/>
          <Route path="contacts" element={<ContactsView/>}/>

          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>

      {/* </Suspense> */}

    </Container>
  )}


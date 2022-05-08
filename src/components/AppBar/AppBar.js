import Navigation from "../Navigation";
import NavAuthentication from "../NavAuthentication";
import UserMenu from "components/UserMenu";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/authUser/authUserSelector"

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <NavAuthentication />}
    </header>
  );
}

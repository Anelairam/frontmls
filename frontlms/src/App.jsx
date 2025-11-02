import "./App.css";
import LoginButton from "./components/organisms/login.jsx";
import LogoutButton from "./components/organisms/logout.jsx";
import { NavBar } from "./components/organisms/NavBar.jsx";
import { Profile } from "./components/pages/Profile.jsx";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <div className="w-screen flex-col">
      <div>
        <NavBar />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  ) : (
    <button className="bg-[#DEA05F]" onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default App;

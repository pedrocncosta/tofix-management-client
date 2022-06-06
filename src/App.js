import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CreateEstablishmentPage from "./pages/CreateEstablishmentPage";
import EditProfilePage from "./pages/EditProfilePage";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/user/:userId"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignUpPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />

        <Route
          path="/profile/edit/:userId"
          element={
            <IsPrivate>
              <EditProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/categories/create"
          element={
            <IsPrivate>
              <CreateEstablishmentPage />
            </IsPrivate>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

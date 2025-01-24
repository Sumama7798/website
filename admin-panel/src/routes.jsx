import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import DashBoard from "./pages/dashboard/DashBoard";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useUserHook } from "./hooks/useUserHook";

import Navbar from "./components/Navbar/Navbar";
import MessagesPage from "./pages/MessagesPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import Header from "./components/Header/Header.jsx";

import EditHomePage from "./createPages/editHomePage/EditHomePage";
import EditAboutPage from "./createPages/editAboutPage/EditAboutPage";
import EditBlogPage from "./createPages/editBlogPage/EditBlogPage"; // Fixed typo in component name
import EditServicesPage from "./createPages/editServicesPage/EditServicesPage";
import EditContactPage from "./createPages/editContactPage/EditContactPage";
import EditFooter from "./createPages/EditFooter/EditFooter";
import DashBoardPages from "./pages/dashboard/dashboardpages/DashBoardPages";

const AppRoutes = () => {
  const { user } = useUserHook(); // Access the user context
  const location = useLocation(); // Get the current route

  // Define routes where Navbar should not be displayed
  const noNavbarRoutes = ["/login", "/signup"];

  return (
    <div className="relative left-auto">
      {/* Conditionally render Navbar */}
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Header />
      <Routes>
        {/* Protected route for authenticated users */}
        <Route path="/" element={!user ? <Navigate to="/login" /> : <DashBoard />} />
        <Route path="/dashboard/:page" element={<DashBoardPages />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />

        {/* Create Page Routes */}
        <Route path="/editHomePage" element={<EditHomePage />} />
        <Route path="/editAboutPage" element={<EditAboutPage />} />
        <Route path="/editBlogPage" element={<EditBlogPage />} />
        <Route path="/editServicesPage" element={<EditServicesPage />} />
        <Route path="/editContactPage" element={<EditContactPage />} />
        <Route path="/editFooter" element={<EditFooter />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;

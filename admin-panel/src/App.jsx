import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import DashBoard from "./pages/dashboard/DashBoard";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useUserHook } from "./hooks/useUserHook";

import Navbar from "./components/Navbar/Navbar";
import MessagesPage from "./pages/MessagesPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import Header from "./components/Header/Header";

import EditHomePage from "./createPages/editHomePage/EditHomePage";
import EditAboutPage from "./createPages/editAboutPage/EditAboutPage";
import EdiitBlogPage from "./createPages/editBlogPage/EditBlogPage";
import EditServicesPage from "./createPages/editServicesPage/EditServicesPage";
import EditContactPage from "./createPages/editContactPage/EditContactPage";
import EditFooter from "./createPages/EditFooter/EditFooter";
import DashBoardPages from "./pages/dashboard/dashboardpages/DashBoardPages";

function App() {
  const { user } = useUserHook();
  const location = useLocation(); // Get the current route

  // Define routes where Navbar should not be displayed
  const noNavbarRoutes = ["/login", "/signup"];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)]" />
        </div>
      </div>

      <div className="relative left-auto">
        {/* Conditionally render Navbar */}
        {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
        <Header />
        <Routes>
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
          <Route path="/editBlogPage" element={<EdiitBlogPage />} />
          <Route path="/editServicesPage" element={<EditServicesPage />} />
          <Route path="/editContactPage" element={<EditContactPage />} />
          <Route path="/editFooter" element={<EditFooter />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

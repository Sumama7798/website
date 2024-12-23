import {Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"

import Navbar from "./components/Navbar/Navbar"
import MessagesPage from "./pages/MessagesPage"
import ProfilePage from "./pages/ProfilePage"
import SettingsPage from "./pages/SettingsPage"
import CreatePage from "./pages/CreatePage"
import IntroSection from "./pages/createPageOptions/IntroSection"

function App() {
 
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
        {/* Background gradient */}
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute inset-0'>
					<div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)]' />
				</div>
			</div>


    <div className="relative left-auto">
    < Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/messages" element={<MessagesPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/settings" element={<SettingsPage/>}/>

            {/* Create Page Routes */}
            <Route path="/IntroSection" element={<IntroSection/>}/>
            <Route path="/ServicesSection" element={<CreatePage/>}/>
            <Route path="/EngagementSection" element={<CreatePage/>}/>
            <Route path="/IndustriesSection" element={<CreatePage/>}/>
            <Route path="/ClientsSection" element={<CreatePage/>}/>
            <Route path="/PortfolioSection" element={<CreatePage/>}/>

      
        </Routes>
      </div>  




    </div>
  )
  
}

export default App

import React from "react";
import { Routes, Route } from "react-router-dom";
import UserProfile from './pages/UserProfile';
import ExploreProjects from './pages/ExploreProjects'
import './App.css'
import HomePage from "./pages/HomePage";
import RoomNavigator from "./components/Screening/RoomNavigator";
import Room from "./components/Screening/Room";
// import Navbar from "./components/Navbar";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/roomNavigator" element={<RoomNavigator/>} />
        <Route path='room/:roomId' element={<Room />} />
        <Route path="/ExploreProjects" element={<ExploreProjects />} />
        
      </Routes>
    </div>
  )
}

export default App

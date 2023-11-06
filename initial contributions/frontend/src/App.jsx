import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";

import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Overview from "./components/Overview";
import Activity from "./components/Activity";
import Modal from "./components/Modal";
import Home from "./pages/Home";

function App() {
  function NoMatch() {
    return (
      <div className=" flex flex-col items-center justify-center min-h-screen text-4xl">
        <h2>404: Page Not Found</h2>
        <p>Uh oh! Wrong page 😞</p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard/" element={<Overview />}></Route>
        <Route path="/dashboard/overview" element={<Overview />}></Route>
        <Route path="/dashboard/activity" element={<Activity />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>

      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Modal /> */}
    </Router>
  );
}

export default App;

// import * as React from "react";

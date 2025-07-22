import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "../page/auth/Register";
import Landing from "../page/landing/Landing";
import Login from "../page/auth/Login";
import Home from "../page/home/Home";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp;
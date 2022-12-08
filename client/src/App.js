import "react-toastify/dist/ReactToastify.css";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
// import Reset from "./components/Reset/Reset";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import FormForgotPassword from "./components/FormForgotPassword/FormForgotPassword";
import Manager from "./components/Manager/Manager"
import Livreur from "./components/Livreur/Livreur";
import Client from "./components/Client/Client";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ERROR404 from "./components/ERROR404/ERROR404";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Forgot-Password" element={<ForgotPassword />} />
        <Route path="Form-Forgot-Password" element={<FormForgotPassword />} />

        <Route path="Manager" element={<Manager/>} />
        <Route path="Client" element={<Client />} />
        <Route path="Livreur" element={<Livreur />} />
        <Route path="Reset-Password" element={<ResetPassword />} />

        <Route path="*" element={<ERROR404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
// import Reset from "./components/Reset/Reset";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import FormForgotPassword from "./components/FormForgotPassword/FormForgotPassword";
import Produit from "./components/Manager/Produit";
import Category from "./components/Manager/Category";
import Statistique from "./components/Manager/Statistique";
import Manager from "./components/Manager/Manager";
import Livreur from "./components/Livreur/Livreur";
import Client from "./components/Client/Client";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ERROR404 from "./components/ERROR404/ERROR404";

import AuthPrivateRoutes from "./components/PrivateRoutes/AuthPrivateRoutes";
import RolePrivateRoutes from "./components/PrivateRoutes/RolePrivateRoutes";
import UserPrivateRoutes from "./components/PrivateRoutes/UserPrivateRoutes";

import { Provider } from "react-redux";
import store from "./app/store";
import Cart from "./components/Cart/Cart";

const App = () => {
  window.addEventListener("storage", () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/logout`)
      .then(() => {
        localStorage.clear();
        window.location.replace("http://localhost:3000/login");
      })
      .catch(() => {
        console.log("Error");
      });
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
         {/* Auth */}
        <Route element={<UserPrivateRoutes />}>
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Forgot-Password" element={<ForgotPassword />} />
          <Route path="Form-Forgot-Password" element={<FormForgotPassword />} />
        </Route>
        {/* User manager */}
        <Route element={<AuthPrivateRoutes />}>
          <Route element={<RolePrivateRoutes role="manager" />}>
            <Route path="/Statistique" element={<Statistique />} />
            <Route path="/Produit" element={<Produit />} /> 
            <Route path="/Category" element={<Category />} />
            <Route path="Manager" element={<Manager />} />
          </Route> 
          {/* User client */} 
          <Route element={<RolePrivateRoutes role="client" />}>
            <Provider store={store}>
              <Route path="Client" element={<Client />} />
              <Route path="Cart" element={<Cart />} /> 
            </Provider> 
          </Route> 
          {/* User livreur */} 
          <Route element={<RolePrivateRoutes role="livreur" />}>
            <Route path="Livreur" element={<Livreur />} /> 
          </Route> 
          <Route path="Reset-Password" element={<ResetPassword />} /> 
        </Route> 
        <Route path="*" element={<ERROR404 />} /> 
      </Routes> 
    </BrowserRouter>
  );
};

export default App;

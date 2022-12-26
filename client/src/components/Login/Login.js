import React from "react";
import { useState } from "react";
import Generator from "../../helpes/Generator";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const location = useLocation();
  useEffect(() => {
    if (location.state) Generator("success", location.state.message);
  }, []);
  let email = "";
  let password = "";
  if (location.state) {
    email = location.state.email;
    password = location.state.password;
  }

  const [login, setLogin] = useState({
    email: email,
    password: password,
  });

  const onChange = (e) => {
    const value = e.target.value;
    setLogin({ ...login, [e.target.name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/login`, login)
      .then((e) => {
        if (e.data.message) {
          Generator("success", e.data.message);
          localStorage.setItem("token", e.data.token);
          localStorage.setItem("email", e.data.email);
          localStorage.setItem("username", e.data.username);
          localStorage.setItem("role", e.data.role);
          localStorage.setItem("_id", e.data._id);
          window.location = "/";
        } else Generator("error", e.data);
      })
      .catch(() => {
        console.log("Error");
      });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="sign-in flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-4xl font-bold text-center text-amber-500">Sign in</h1>
            <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <input
                  type="email"
                  value={login.email}
                  onChange={onChange}
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  value={login.password}
                  onChange={onChange}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <div className="flex items-center justify-between">
                <a href="/Forgot-Password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-amber-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a href="/Register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

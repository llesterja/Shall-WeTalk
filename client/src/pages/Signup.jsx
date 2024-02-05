import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import loginbg from "../Assets/loginbg.avif";
import logo from "../Assets/Logo.jpeg";
import { motion } from "framer-motion";
import loginImg from "../Assets/landingbg3.png";
import { FaGooglePlus } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiChatSmile2Line } from "react-icons/ri";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      {/* Right Side with Background Image and Transparent Container */}
      <div
        className="w-1/2 bg-cover py-36 px-12 object-fill"
        style={{ backgroundImage: `url(${loginbg})` }}
      >
        {/* Transparent container */}
        <div
          className="bg-white  bg-opacity-20 rounded-lg p-8 backdrop-filter backdrop-blur-md"
          style={{ backdropFilter: "blur(5px)" }}
        >
          <div className="flex space-x-4 ">
            <RiChatSmile2Line className="text-white text-5xl" />
            <h1 className="text-4xl font-bold text-white mb-8">Hey Friend!</h1>
          </div>

          <p className="text-3xl font-semibold text-white mb-2">
            Chat Globally
          </p>
          <p className="text-3xl font-semibold text-white mb-2">
            Connect Locally
          </p>
          <p className="text-3xl font-semibold text-white mb-16">
            Right Here On Shall Wetalk!
          </p>
        </div>{" "}
        <img
          src={loginImg}
          alt="loginImg"
          className="absolute bottom-20 left-12 m-4 max-w-xs object-cover opacity-40"
          style={{ maxWidth: "220px" }}
        />
      </div>

      <div className=" flex flex-col gap-8 w-1/2 bg-bgColor1 py-12 px-20">
        <Link to="/" className="flex justify-center hover:scale-95">
          <img src={logo} alt="logo" className="w-48 object-cover " />
        </Link>
        <h1 className="text-xl font-bold text-sky-500 items-center">
          Let's start to create account
        </h1>
        <form className="flex flex-col space-y-4">
          <div className="w-full">
            <label className="block text-gray-400 text-xs font-semibold">
              Username
            </label>
            <input
              className="h-10 block w-full mt-2 rounded-md border-0 p-4 text-gray-500 text-xs shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-0 focus:ring-1 focus:ring-inset focus:ring-sky-600"
              name="password"
              type="password"
              placeholder="Username"
              // value={password}
              // onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="w-full">
            <label className="block text-gray-400 text-xs font-semibold">
              Email
            </label>
            <input
              className="h-10 block w-full mt-2 rounded-md border-0 p-4 text-gray-500 text-xs shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-0 focus:ring-1 focus:ring-inset focus:ring-sky-600"
              name="email"
              type="email"
              placeholder="Email"
              // value={email}
              // onChange={(e) => onChange(e)}
              required
            />
          </div>

          <div className="w-full">
            <label className="block text-gray-400 text-xs font-semibold">
              Password
            </label>
            <input
              className="h-10 block w-full mt-2 rounded-md border-0 p-4 text-gray-500 text-xs shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-0 focus:ring-1 focus:ring-inset focus:ring-sky-600"
              name="password"
              type="password"
              placeholder="Password"
              // value={password}
              // onChange={(e) => onChange(e)}
              required
            />
          </div>

          <div className="w-full">
            <label className="block text-gray-400 text-xs font-semibold">
              Confirm Password
            </label>
            <input
              className="h-10 block w-full mt-2 rounded-md border-0 p-4 text-gray-500 text-xs shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-0 focus:ring-1 focus:ring-inset focus:ring-sky-600"
              name="password"
              type="password"
              placeholder="Password Again"
              // value={password}
              // onChange={(e) => onChange(e)}
              required
            />
          </div>

          <button
            type="submit"
            className="h-10 px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-bgColor3 text-sm focus:outline-none font-semibold hover:scale-95"
          >
            Create Account
          </button>
        </form>

        <div className=" grid grid-cols-3 items-center text-gray-400 ">
          <hr className="border-gray-300" />
          <p className="text-center text-xs font-semibold">
            Or try sign up with
          </p>
          <hr className="border-gray-300" />
        </div>
        {/* Icons container */}
        <div className="flex justify-center space-x-8">
          {" "}
          <button className="text-3xl text-sky-400 hover:text-amber-400 hover:scale-90">
            {" "}
            <FaGooglePlus />
          </button>
          <button className="text-3xl text-sky-400 hover:text-sky-700 hover:scale-90">
            <FaFacebook />
          </button>
          <button className="text-3xl text-sky-400 hover:text-gray-800 hover:scale-90">
            <FaGithub />
          </button>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-400 mb-4">
            Already have an account with us?{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log in now!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { PiEyeClosedThin } from "react-icons/pi";
import { PiEyeThin } from "react-icons/pi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const validateEmail = () => {
      if (email === "") {
        setEmailError("");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    };
    const validatePassword = () => {
      if (password === "") {
        setPasswordError("");
      } else if (password.length < 8) {
        setPasswordError(
          "Invalid password, must be at least 8 characters long"
        );
      } else {
        setPasswordError("");
      }
    };
    validateEmail();
    validatePassword();
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError) {
      alert(
        `Form submitted successfully! Your email ${email} has been submitted.`
      );
      console.log(email, password);
    } else if (emailError && passwordError) {
      alert("Please fix the email address and password errors in the form.");
    } else if (emailError) {
      alert("Please fix the email address error in the form.");
    } else if (passwordError) {
      alert("Please fix the password error in the form.");
    } else {
      console.log("Unknown error, please refresh your browser");
    }
  };

  const handleHidePassword = (e) => {
    e.preventDefault();
    setHidePassword(!hidePassword);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col">
        <section className="flex justify-center items-center mb-4">
          <img
            src="/images/Logo/Fremen_logo.jpg"
            alt="Fremen logo"
            className="w-[60%]"
          />
        </section>
        <span className="mb-4 text-2xl font-extrabold text-black text-center">
          ยินดีต้อนรับเข้าสู่ Fremen
        </span>
        <span className="text-black text-start">เข้าสู่ระบบ</span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 p-6 rounded shadow-md w-full max-w-sm"
      >
        <div className="mb-4">
          <label className="block text-black text-xs font-thin mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              emailError ? "border-red-500" : ""
            }`}
            required
          />
          {emailError && email !== "" && (
            <p className="text-red-500 text-xs italic mt-2">{emailError}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-black text-xs font-thin mb-2">
            รหัสผ่าน
          </label>
          <div className="relative">
            <input
              type={hidePassword ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                passwordError ? "border-red-500" : ""
              }`}
              required
            />
            <span
              className="absolute right-3 top-2 cursor-pointer"
              onClick={handleHidePassword}
            >
              {hidePassword ? (  
                <PiEyeClosedThin  size={20}/>
              ) : (
                <PiEyeThin  size={20}/>
              )}
            </span>
          </div>
          {passwordError && password !== "" && (
            <p className="text-red-500 text-xs italic mt-2">{passwordError}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline
            bg-black text-white font-bold text-sm hover:bg-gray-400"
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </form>
      <section className="hidden md:hidden">
        <div className="flex justify-center text-slate-500">
          <div className="divider w-96 text-sm">หรือ</div>
        </div>
        <div>
          <div className="mb-4">
            <a href="https://accounts.google.com/signin">
              <button
                type="button"
                className="flex items-center justify-center w-full max-w-sm bg-white border border-gray-300 text-slate-500 text-sm py-2 px-4 rounded
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300
            hover:bg-blue-700 hover:text-white"
              >
                <img
                  className="w-5 h-5 mr-2"
                  src="/images/Logo/Google_G_logo.png"
                  alt="Google logo"
                />
                Sign in with Google
              </button>
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/login/">
              <button
                type="button"
                className="flex items-center justify-center w-full max-w-sm bg-white border border-gray-300 text-slate-500 text-sm py-2 px-4 rounded
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300
                hover:bg-blue-700 hover:text-white"
              >
                <img
                  className="w-11 h-5 mr-2"
                  src="/images/Logo/Facebook_Logo.png"
                  alt="Facebook logo"
                />
                Sign in with Facebook
              </button>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-5 text-center">
          <Link
            to="/ForgotPassword"
            className="text-sm font-bold text-black hover:underline hover:text-blue-700"
          >
            ลืมรหัสผ่าน?
          </Link>
        </div>
        <div className="mt-2 text-center">
          <span className="text-sm text-slate-700 px-2">
            เพิ่งเคยเข้ามาใน Fremen ใช่หรือไม่?
          </span>
          <Link
            to="/Register"
            className="text-sm font-bold text-black hover:underline hover:text-blue-700"
          >
            สมัครใหม่
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Login;

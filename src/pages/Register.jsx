import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { PiEyeClosedThin } from "react-icons/pi";
import { PiEyeThin } from "react-icons/pi";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [passwordAgain, setPasswordAgain] = useState("");
  const [hidePasswordAgain, setHidePasswordAgain] = useState(true);

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

  const handleHidePasswordAgain = (e) => {
    e.preventDefault();
    setHidePasswordAgain(!hidePasswordAgain);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-tl">
      <div className="flex flex-col">
        <section className="flex justify-center items-center mb-4">
          <img
            src="/images/Logo/Fremen_logo.jpg"
            alt="Fremen logo"
            className="w-[40%]"
          />
        </section>
        <span className="mb-4 text-2xl font-extrabold text-slate-700">
          มาเป็นสมาชิก Fremen กันเถอะ!
        </span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 p-6 rounded shadow-md w-full max-w-sm"
      >
        <div className="mb-4">
          <label className="block text-slate-500 text-sm font-semibold mb-2">
            Email:
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
          <label className="block text-slate-500 text-sm font-semibold mb-2">
            รหัสผ่าน:
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
                <PiEyeClosedThin size={20} />
              ) : (
                <PiEyeThin size={20} />
              )}
            </span>
          </div>
          {passwordError && password !== "" && (
            <p className="text-red-500 text-xs italic mt-2">{passwordError}</p>
          )}
        </div>

{/* Password Again */}
        <div className="mb-4">
          <label className="block text-slate-500 text-sm font-semibold mb-2">
            รหัสผ่านอีกครั้ง:
          </label>
          <div className="relative">
            <input
              type={setHidePasswordAgain ? "password" : "text"}
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                passwordError ? "border-red-500" : ""
              }`}
              required
            />
            <span
              className="absolute right-3 top-2 cursor-pointer"
              onClick={handleHidePasswordAgain}
            >
              {hidePasswordAgain ? (
                <PiEyeClosedThin size={20} />
              ) : (
                <PiEyeThin size={20} />
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
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline
            bg-black text-white font-semibold text-sm hover:bg-blue-700"
          >
            ลงทะเบียน
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
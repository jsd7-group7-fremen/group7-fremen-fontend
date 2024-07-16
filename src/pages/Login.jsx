import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; //useNavigate เอาตัวอย่างมาจากคุณนิติ
import axiosInstance from "../utils/axiosInstance";

import { PiEyeClosedThin } from "react-icons/pi";
import { PiEyeThin } from "react-icons/pi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate(); //จากตัวอย่างของคุณนิติ

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailError && !passwordError) {
      console.log(email, password);

      //Login API Call using axios instance with auth token attached
      try {
        console.log(email, password);
        const response = await axiosInstance.post("/auth/login", {
          email: email,
          password: password,
        });
        console.log(response);
        console.log(response.data);
        console.log(response.data.access_token);

        // Handle successful login response
        if (response.data && response.data.access_token) {
          localStorage.setItem("token", response.data.access_token);

          alert(
            `Form submitted successfully! Your email ${email} has been submitted. :partying_face:`
          );
          navigate("/"); // path "/" ไปยังหน้า Home รูปแบบล้อจากตัวอย่างของคุณนิติ แต
        }
      } catch (error) {
        // Handle login error
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setError(error.response.data.message);
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
      }
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
            src="/images/Logo/Kick-It-Up_Logo_1.jpeg"
            alt="Kick-It-Up Logo"
            className="w-[40%] rounded-full"
          />
        </section>
        <span className="text-2xl font-extrabold text-black text-center mb-6">
          Welcome to Kick It Up!
        </span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 p-6 rounded shadow-md w-full max-w-sm"
      >
        <span className="flex justify-center text-black text-center font-bold text-lg my-2">
          LOGIN FORM
        </span>
        <div className="mb-4">
          <label className="block text-black font-semibold mb-2">Email</label>
          <input
            type="email"
            placeholder="email"
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
          <label className="block text-black font-semibold mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={hidePassword ? "password" : "text"}
              value={password}
              placeholder="password"
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
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline
            bg-black text-white font-bold text-sm hover:bg-gray-400"
          >
            Log in
          </button>
        </div>
      </form>
      <section className="hidden md:hidden">
        <div className="flex justify-center text-slate-500">
          <div className="divider w-96 text-sm">Or</div>
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
        <div className="mt-5 text-center md:hidden hidden">
          <Link
            to="/ForgotPassword"
            className="text-sm font-bold text-black hover:underline hover:text-blue-700"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="mt-4 text-center">
          <span className="text-sm text-slate-700 px-2">Have an account?</span>
          <Link
            to="/Register"
            className="text-sm font-bold text-black hover:underline hover:text-blue-700"
          >
            Register
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Login;
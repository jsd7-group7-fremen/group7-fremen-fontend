import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { PiEyeClosedThin } from "react-icons/pi";
import { PiEyeThin } from "react-icons/pi";

const Register = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [passwordError, setPasswordError] = useState("");

  const [passwordAgain, setPasswordAgain] = useState("");
  const [hidePasswordAgain, setHidePasswordAgain] = useState(true);
  const [passwordAgainError, setPasswordAgainError] = useState("");

  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");

  const [gender, setGender] = useState("");

  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");

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

      if (passwordAgain !== "" && passwordAgain !== password) {
        setPasswordAgainError("Passwords do not match");
      } else {
        setPasswordAgainError("");
      }
    };

    const validateFile = (file) => {
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];
      const maxSize = 1 * 1024 * 1024; //1 MB in bytes

      if (!validTypes.includes(file.type)) {
        setFileError("File type must be .jpeg, .jpg, .png");
      } else if (file.size > maxSize) {
        setFileError("File size must be less than  1 MB");
      } else {
        setFileError("");
      }
    };

    validateEmail();
    validatePassword();
    // validateFile();
  }, [email, password, passwordAgain, file]);

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
    } else if (passwordAgainError) {
      alert("Please fix the password confirmation error in the form.");
    } else if (fileError) {
      alert(
        "Please select file type with .jpeg, .jpg, .png and file size less than 1 MB"
      );
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

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleFileChange = (event) => {
    if (!event || !event.target || !event.target.files) {
      console.error("Event หรือ target หรือ files ไม่ถูกต้อง");
      return;
    }
    const selectedFile = event.target.files[0];
    // const errorMessage = validateFile(selectedFile);
    console.log(selectedFile);
    setFile(selectedFile);
    setFileError("");

    // if (errorMessage) {
    //   setFile(null);
    //   setFileError(errorMessage);
    // } else {
    // }
  };
  //--------------------------------------------------------------
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      <div className="flex flex-col">
        <section className="flex justify-center items-center mb-4">
          <img
            src="/images/Logo/Fremen_logo.jpg"
            alt="Fremen logo"
            className="w-[30%]"
          />
        </section>
        <span className="mb-4 text-2xl font-bold text-black">
          มาเป็นสมาชิก Fremen กันเถอะ!
        </span>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 p-6 rounded shadow-md w-full max-w-sm md:max-w-full md:flex md:flex-col md:justify-center"
      >
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="mb-3">
              <label className="block text-black text-xs font-light">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                  emailError ? "border-red-500" : ""
                }`}
                required
              />
              {emailError && email !== "" && (
                <p className="text-red-500 text-xs italic mt-2">{emailError}</p>
              )}
            </div>
            <div className="mb-3">
              <label className="block text-black text-xs font-light">
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
                  minLength="8"
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
                <p className="text-red-500 text-xs italic mt-2">
                  {passwordError}
                </p>
              )}
            </div>
            {/* Password Again */}
            <div className="mb-3">
              <label className="block text-black text-xs font-light">
                รหัสผ่านอีกครั้ง
              </label>
              <div className="relative">
                <input
                  type={hidePasswordAgain ? "password" : "text"}
                  value={passwordAgain}
                  onChange={(e) => setPasswordAgain(e.target.value)}
                  className={`shadow appearance-none border rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:shadow-outline ${
                    passwordError ? "border-red-500" : ""
                  }`}
                  required
                  minLength="8"
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
              {passwordAgainError && passwordAgain !== "" && (
                <p className="text-red-500 text-xs italic mt-2">
                  {passwordAgainError}
                </p>
              )}
            </div>
            <div className="mb-3">
              <label className="block text-black text-xs font-light">
                ชื่อสกุล
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                required
                minLength="5"
                maxLength="80"
              />
            </div>
            <div className="mb-3">
              <div>
                <label className="block text-black text-xs font-light">
                  เพศ
                </label>
                <label>
                  <input
                    type="radio"
                    value="Male"
                    className="text-black text-xs px-4"
                    checked={gender === "Male"}
                    onChange={handleGenderChange}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={handleGenderChange}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    value="Other"
                    checked={gender === "Other"}
                    onChange={handleGenderChange}
                  />
                  Other
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="block text-black text-xs font-light">
                วันเกิด(เดือน/วัน/ปี)
              </label>
              <div>
                <input
                  type="date"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black text-xs leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </div>
            <div className="mb-3 md:hidden hidden">
              <label className="block text-black text-xs font-light">
                หมายเลขโทรศัพท์
              </label>
              <div>
                <input
                  type="tel"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </div>
          </div>
          {/* Insert image */}
          <section className="md:flex md:w-full">
            <div className="flex items-center justify-end md:w-full md:justify-center">
              <div className="w-full max-w-xs text-center">
                <div className="flex flex-col items-center self-center">
                  <div className="relative w-32 h-32">
                    <div
                      style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        backgroundColor: "#d3d3d3",
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                    >
                      {file ? (
                        <img
                          src={URL.createObjectURL(file)}
                          alt="preview"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <span>150 x 150</span>
                      )}
                    </div>
                    {/* /*{" "}
                    <img
                      className="w-32 h-32 rounded-full object-cover border border-gray-300"
                      // src={URL.createObjectURL(file)}
                      src={previewImage || "https://via.placeholder.com/150"}
                      alt="preview"
                    />{" "} */}
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="imageInput"
                      className="inline-block px-4 py-2 border border-gray-300 text-black text-xs text-bold bg-white rounded-xl shadow-sm cursor-pointer hover:bg-gray-400"
                    >
                      เลือกรูป
                      <input
                        id="fileInput"
                        type="file"
                        value={file}
                        accept=".jpeg,.jpg,.png"
                        className="flex"
                        onChange={handleFileChange()}
                      />
                    </label>
                  </div>
                  <p className="mt-2 text-xs text-gray-600">
                    ขนาดไฟล์: สูงสุด 1 MB
                  </p>
                  <p className="text-xs text-gray-600">
                    ไฟล์ที่รองรับ: .Jpeg, .Jpg .Png
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            type="submit"
            className="btn shadow appearance-none border rounded-xl w-4/12 py-2 px-4 leading-tight focus:outline-none focus:shadow-outline
            bg-black text-white font-bold text-sm hover:bg-gray-400"
          >
            ลงทะเบียน
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

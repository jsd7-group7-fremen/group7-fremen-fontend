import React, { useState, useEffect } from "react";
import { PiEyeClosedThin, PiEyeThin } from "react-icons/pi";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  // const [passwordAgain, setPasswordAgain] = useState("");
  // const [hidePasswordAgain, setHidePasswordAgain] = useState(true);
  // const [passwordAgainError, setPasswordAgainError] = useState("");
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  // const createdDate = Date.now();
  // let isoDate = createdDate.toISOString()
  // console.log(createdDate.toISOString());
  const [error, setError] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const navigate = useNavigate();

  // Validate email and password on input change
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

    const validateFullName = () => {
      if (fullName === "") {
        setFullNameError("Full Name is required");
      } else {
        setFullNameError("");
      }
    };

    const validateGender = () => {
      if (gender === "") {
        setGenderError("");
      } else if (
        // gender !== "male" &&
        // gender !== "female" &&
        // gender !== "other"
        !gender
      ) {
        setGenderError("Gender is required");
      } else {
        setGenderError("");
      }
    };

    validateEmail();
    validatePassword();
    validateFullName();
    validateGender();
  }, [email, password, fullName, gender]);

  const uploadImage = async (image) => {
    const newFormData = new FormData();
    newFormData.append("file", image);
    newFormData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
      }/image/upload`,
      newFormData
    );
    return response.data.url;
    // console.log("response.data.url => ", response.data.url);
  };

  // CLOUDINARY_CLOUD_NAME = dhafpmdbf;
  // CLOUDINARY_API_KEY = 271357482698339;
  // CLOUDINARY_SECRET_KEY = d - UlaYtdxZNvtic6x8bKhSXCZ3Y;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(emailError);
    // console.log(passwordError);
    // console.log(fullNameError);
    // console.log(genderError);
    // console.log(error);
    // console.log(email, password, fullName, gender, dateOfBirth, selectedImage);
    // console.log(imageFile);

    // const userImage = "userPhoto.jpeg"; //hard code for userImage

    // console.log(userImage);
    let userImage = "";

    if (
      !emailError &&
      !passwordError &&
      // !passwordAgainError &&
      !fullNameError &&
      !genderError &&
      !error
    ) {
      console.log(
        email,
        password,
        // passwordAgain,
        fullName,
        gender,
        dateOfBirth,
        selectedImage
      );
      if (imageFile) {
        userImage = await uploadImage(imageFile);
      }
      //Register API call using axios instance with auth token attached
      try {
        console.log(userImage);
        const response = await axiosInstance.post("/auth/register", {
          fullName: fullName,
          email: email,
          password: password,
          gender: gender,
          dateOfBirth: dateOfBirth,
          // image: selectedImage,
          image: userImage, // Hard code to string
          // createdDate: createdDate,
        });
        console.log(response);
        console.log(response.data);
        console.log(response.data.access_token);

        //Handle successful resgister response
        if (response.data && response.data.access_token) {
          localStorage.setItem("token", response.data.access_token);

          alert(`Congratulation! 🎉🎊 Now you are a Kick It Up Member. 😍`);
          navigate("/Login"); // after register successful, go to Login page
        }
      } catch (error) {
        //Handel Register Error
        console.log(error);
        console.log(error.response.data);
        console.log(error.response.data.message);

        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setError(error.response.data.message);
        } else {
          setError("An unexpected error occured. Please try again.");
        }
      }
    } else {
      alert("Please fix the errors in the form.👇");
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      if (file.size > 1048576) {
        setError("File size must be less than 1MB");
        return;
      }
      if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
        setError("File type must be .JPG, .JPEG, .PNG");
        return;
      }
      setError("");
      setImageFile(file);
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleHidePassword = (e) => {
    e.preventDefault();
    setHidePassword(!hidePassword);
  };

  // const handleHidePasswordAgain = (e) => {
  //   e.preventDefault();
  //   setHidePasswordAgain(!hidePasswordAgain);
  // };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      <div className="flex flex-col">
        <section className="flex justify-center items-center mb-4">
          <img
            src="/images/Logo/Kick-It-Up_Logo_1.jpeg"
            alt="Kick-It-Up Logo"
            className="w-[20%] rounded-full"
          />
        </section>
        <span className="mb-4 text-2xl font-bold text-black">
          Let's make you a Kick It Up Member!
        </span>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 p-6 rounded shadow-md w-full max-w-sm md:max-w-full md:flex md:flex-col md:justify-center"
      >
        <div className="md:flex">
          <div className="md:w-1/2">
            {/* Email Input */}
            <div className="mb-3">
              <label className="block text-black text-xs font-light">
                Email
              </label>
              <input
                type="email"
                value={email}
                placeholder="email"
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
            {/* Password Input */}
            <div className="mb-3">
              <label className="block text-black text-xs font-light">
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
            {/* Password Again Input */}
            {/* <div className="mb-3">
              <label className="block text-black text-xs font-light">
                Password Again
              </label>
              <div className="relative">
                <input
                  type={hidePasswordAgain ? "password" : "text"}
                  value={passwordAgain}
                  placeholder="password again"
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
            </div> */}
            {/* Full Name Input */}
            <div className="mb-3">
              <label className="block text-black text-xs font-light">
                Full Name
              </label>
              <input
                type="text"
                placeholder="full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                required
                minLength="5"
                maxLength="80"
              />
              {fullNameError && fullName !== "" && (
                <p className="text-red-500 text-xs italic mt-2">
                  {fullNameError}
                </p>
              )}
            </div>
            {/* Gender Input */}
            <div className="mb-3">
              <div>
                <label className="block text-black text-xs font-light">
                  Gender
                </label>
                <label>
                  <input
                    type="radio"
                    value="male"
                    checked={gender === "male"}
                    onChange={handleGenderChange}
                    required
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    value="female"
                    checked={gender === "female"}
                    onChange={handleGenderChange}
                    required
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    value="other"
                    checked={gender === "other"}
                    onChange={handleGenderChange}
                    required
                  />
                  Other
                </label>
                {genderError && (
                  <p className="text-red-500 text-xs italic mt-2">
                    {genderError}
                  </p>
                )}
              </div>
            </div>
            {/* Date of Birth Input */}
            <div className="mb-3">
              <label className="block text-black text-xs font-light">
                Date of Birth (mm/dd/yyy)
              </label>
              <div>
                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </div>
            {/* Profile Picture Upload */}
            <div>
              <label className="block text-black text-xs font-light">
                <p>Upload Profile Picture </p>
                <p>
                  (File size: maximum 1MB, File extension: .Jpeg, .Jpg, .Png)
                </p>
              </label>
            </div>
            <div className="md:flex md:w-full">
              <div className="flex items-center justify-end md:w-full md:justify-center">
                <div className="w-full max-w-xs text-center">
                  <div className="flex flex-col items-center self-center">
                    <div className="relative">
                      <div className="mb-3">
                        <input
                          type="file"
                          accept="image/jpeg, image/jpg, image/png"
                          onChange={handleImageChange}
                          className="text-black text-xs px-4"
                          required
                        />
                        {selectedImage && (
                          <div className="mt-4">
                            <img
                              src={selectedImage}
                              alt="Selected"
                              className="w-40 h-40 object-cover rounded-full border-2 border-gray-300"
                              // className="mt-2 w-full max-h-32 object-contain rounded-full"
                            />
                          </div>
                        )}
                        {error && (
                          <p className="text-red-500 text-xs italic mt-2">
                            {error}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                // className="bg-black hover:bg-grey-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                className="btn shadow appearance-none border rounded-xl w-4/12 py-2 px-4 leading-tight focus:outline-none focus:shadow-outline
            bg-black text-white font-bold text-sm hover:bg-gray-400"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;

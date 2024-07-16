import CircumIcon from "@klarr-agency/circum-icons-react";
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

const Footer = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get("/users/");
        const userData = response.data;
        console.log(response.data);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, []);
  console.log("user", user);

  const renderAdminLink = () => {
    if (user && user.isAdmin) {
      return (
        <a className="link link-hover" href="/Admin">
          Admin
        </a>
      );
    } else {
      return (
        <a className="link link-hover" href="/login">
          Admin
        </a>
      );
    }
  };

  return (
    <footer>
      <div className="footer p-10 bg-gray-50 text-base-content flex flex-col lg:flex-row justify-center">
        <nav className="px-16 pr-12 gap-0">
          <h6 className="font-bold text-black mb-1">CONTRACT</h6>
          <div className="flex">
            <p className="flex justify-center items-center">
              <span className="mr-2">
                <CircumIcon name="location_on" />
              </span>
              Address : 123/99 Nimmanhaemin soi 9 Chiangmai 50200 Thailand
            </p>
          </div>
          <div className="flex">
            <p className="flex justify-center items-center">
              <span className="mr-2">
                <CircumIcon name="mail" />
              </span>
              Email : kickitup@gmail.com
            </p>
          </div>
          <div className="flex">
            <p className="flex justify-center items-center">
              <span className="mr-2">
                <CircumIcon name="phone" />
              </span>
              Tel : 02-078-8888
            </p>
          </div>
        </nav>
        <nav className="px-16">
          <h6 className="font-bold text-black">COMPANY</h6>
          <a className="link link-hover" href="#">
            About Us
          </a>
          <a className="link link-hover" href="#">
            Product
          </a>
          <a className="link link-hover" href="#">
            Terms and Conditions
          </a>
          {renderAdminLink()}
        </nav>
        <nav className="px-16">
          <h6 className="font-bold text-black">USER ACCOUNT</h6>
          <a className="link link-hover" href="#">
            Order
          </a>
          <a className="link link-hover" href="#">
            Payment
          </a>
          <a className="link link-hover" href="#">
            Delivery address
          </a>
          <a className="link link-hover" href="#">
            Personal information
          </a>
        </nav>
        <nav className="px-16">
          <h6 className="font-bold text-black">SUPPORT</h6>
          <a className="link link-hover" href="#">
            Payment process
          </a>
          <a className="link link-hover" href="#">
            Customer Services
          </a>
          <a className="link link-hover" href="#">
            Privacy Policy
          </a>
          <a className="link link-hover" href="#">
            FAQs
          </a>
        </nav>
      </div>

      <footer className="flex flex-col items-center bg-gray-50 text-center text-surface dark:bg-neutral-700 dark:text-white divide-y divide-slate-300">
        <div className="container pt-9">
          <div className="mb-6 flex justify-center space-x-2">
            <a
              href="#"
              type="button"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init
            >
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </a>
            <a
              href="#"
              type="button"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init
            >
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
            </a>
            <a
              href="#"
              type="button"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init
            >
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 488 512"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </span>
            </a>
            <a
              href="#"
              type="button"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init
            >
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7S183 181.2 224.1 181.2s74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9s-58-34.5-93.9-36.2C286.6 30 181.4 30 131.6 32.7c-35.9 1.7-67.7 9.9-93.9 36.2S3.2 126.9 1.5 162.8C-.4 212.6-.4 317.9 1.5 367.7c1.7 35.9 9.9 67.7 36.2 93.9s58 34.5 93.9 36.2c49.8 1.9 155.1 1.9 204.9 0 35.9-1.7 67.7-9.9 93.9-36.2s34.5-58 36.2-93.9c1.9-49.8 1.9-155.1 0-204.9zm-48.7 248.5c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.3-9s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.8 102.9-8.9 132.3z" />
                </svg>
              </span>
            </a>
            <a
              href="#"
              type="button"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init
            >
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.5 89.8 225.9 205.3 245.1V327.7h-61.5V256h61.5v-54.6c0-60.8 36.3-94.4 92-94.4 26.7 0 54.7 4.8 54.7 4.8v60h-30.8c-30.4 0-39.9 18.9-39.9 38.3V256h68l-10.9 71.7h-57.1v173.4C414.2 481.9 504 379.5 504 256z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="flex w-full flex-col-reverse bg-gray-50 p-6 dark:bg-neutral-700 md:flex-row md:items-center md:justify-center">
          <p className="text-center text-sm text-black dark:text-white">
            © 2023 KickItUp. All rights reserved.
          </p>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;

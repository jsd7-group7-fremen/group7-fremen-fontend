import React from "react";
import CircumIcon from "@klarr-agency/circum-icons-react";
import {Link, Outlet} from "react-router-dom"
import { fromJSON } from "postcss";
import { useState } from "react";

const Navbar = ({changeNav}) => {
  const navbarClass = changeNav === "fixed" ? "navbar bg-base-100 fixed z-10" : "navbar bg-base-100 relative z-10";
  return (
    <div>
      <div className={navbarClass}>
        <div className="navbar-start">
          <Link to="/">
          <figure>
            <img
              src="./images/Logo/logo.png"
              alt="logo-brand"
              className="w-12 h-auto ml-4"
            />
          </figure>
          </Link>
        </div>
        <Link to="/Filter">
        <div className="navbar-center hidden lg:flex">
          <div className="dropdown dropdown-hover">
            <div tabIndex="0" role="button" className="btn btn-ghost m-1">
              สินค้า
            </div>
            <ul
              tabIndex="0"
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
            >
              <ul className="menu xl:flex flex-row lg:min-w-max bg-base-200 rounded-box">
                <li>
                  <a>ประเภทรองเท้า</a>
                  <ul>
                    <li>
                      <a>รองเท้ากีฬา</a>
                    </li>
                    <li>
                      <a>รองเท้าลำลอง</a>
                    </li>
                    <li>
                      <a>รองเท้าแฟชั่น</a>
                    </li>
                    <li>
                      <a>รองเท้าเดินป่า</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>แบรนด์</a>
                  <ul>
                    <li>
                      <a>Asics</a>
                    </li>
                    <li>
                      <a>Adidas</a>
                    </li>
                    <li>
                      <a>HOKA</a>
                    </li>
                    <li>
                      <a>Nike</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <br />
                  <br />
                  <ul>
                    <li>
                      <a>New Balance</a>
                    </li>
                    <li>
                      <a>Under Armour</a>
                    </li>
                    <li>
                      <a>Columbia</a>
                    </li>
                    <li>
                      <a>Crocs</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <br />
                  <br />
                  <ul>
                    <li>
                      <a>Reebok</a>
                    </li>
                    <li>
                      <a>Puma</a>
                    </li>
                    <li>
                      <a>Umbro</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex="0" role="button" className="btn btn-ghost m-1">
              สินค้าใหม่
            </div>
            <ul
              tabIndex="0"
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
            >
              <ul className="menu xl:flex flex-row lg:min-w-max bg-base-200 rounded-box">
                <li>
                  <a>สินค้าทั้งหมด</a>
                  <ul>
                    <li>
                      <a>สินค้าขายดี</a>
                    </li>
                    <li>
                      <a>สินค้าลดพิเศษ</a>
                    </li>
                    <li>
                      <a>พิเศษสำหรับ Member</a>
                    </li>
                    <li>
                      <a>Limited Edition</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>ลดราคา</a>
                  <ul>
                    <li>
                      <a>ผู้ชาย</a>
                    </li>
                    <li>
                      <a>ผู้หญิง</a>
                    </li>
                    <li>
                      <a>เด็ก</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex="0" role="button" className="btn btn-ghost m-1">
              เพิ่มเติม
            </div>
            <ul
              tabIndex="0"
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
            >
              <ul className="menu xl:flex flex-row lg:min-w-max bg-base-200 rounded-box">
                <li>
                  <ul>
                    <li>
                      <a>การเข้าสู่ระบบ</a>
                    </li>
                    <li>
                      <a>ลงทะเบียน</a>
                    </li>
                    <li>
                      <a>การชำระเงิน</a>
                    </li>
                    <li>
                      <a>นโยบายความเป็นส่วนตัว</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex="0" role="button" className="btn btn-ghost m-1">
              ติดต่อเรา
            </div>
          </div>
        </div>
        </Link>
        <div className="navbar-end">
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="ค้นหา" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-6 h-6 opacity-100"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end pl-1">
              <div
                tabIndex="0"
                role="center"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 flex content-center"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">12</span>
                </div>
              </div>
              <div
                tabIndex="0"
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">12 ชิ้น</span>
                  <span className="text-info">รวมราคา: 999฿</span>
                  <div className="card-actions">
                    <button className="btn btn-outline btn-block">
                      <Link to="/Cart">
                      <a href="cart.html">ตะกร้าสินค้า</a>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex="0" role="button" className="btn btn-circle avatar">
                <div className="w-8 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://imageserver.petsbest.com/marketing/blog/introducing-yourself-to-cats.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/Login">
                  <a className="justify-between">หน้าโปรไฟล์</a>
                  </Link>
                </li>
                <li>
                  <a>ตั้งค่า</a>
                </li>
                <li>
                  <a>ออกจากระบบ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;

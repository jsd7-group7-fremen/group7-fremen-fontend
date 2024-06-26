import React, { useState } from "react";
import MocNav from "../components/MocNav";
import { Link } from "react-router-dom";
import Data from "../data/ProductData";
import axios from "axios";

const Filter = () => {
  const mockdata = [
    {
      id: 1,
      name: "Air Jordan 1 Low SE",
      category: "Men's Shoes",
      color: "White/Sail/Seafoam",
      size: 7.5,
      quantity: 1,
      price: 205.0,
      image:
        "https://d2cva83hdk3bwc.cloudfront.net/autry-medalist-low-leather-sneakers-green-white-1.jpg",
    },
    {
      id: 2,
      name: "Nike Air Force 1 Low Retro",
      category: "Men's Shoes",
      color: "Black/Black/Black",
      size: 7.5,
      quantity: 1,
      price: 189.9,
      image:
        "https://d2cva83hdk3bwc.cloudfront.net/autry-medalist-low-leather-sneakers-green-white-1.jpg",
    },
    {
      id: 3,
      name: "Nike Air Force 1 Low Retro",
      category: "Men's Shoes",
      color: "Black/Black/Black",
      size: 7.5,
      quantity: 1,
      price: 189.9,
      image:
        "https://d2cva83hdk3bwc.cloudfront.net/autry-medalist-low-leather-sneakers-green-white-1.jpg",
    },
    {
      id: 4,
      name: "Nike Air Force 1 Low Retro",
      category: "Men's Shoes",
      color: "Black/Black/Black",
      size: 7.5,
      quantity: 1,
      price: 189.9,
      image:
        "https://d2cva83hdk3bwc.cloudfront.net/autry-medalist-low-leather-sneakers-green-white-1.jpg",
    },
  ];

  const [data, setData] = useState(Data);

  return (
    <div>
      <MocNav />
      <div className="md:flex py-4">
        <div className="border-b-2 p-2 md:w-2/12 md:py-10 md:px-8 md:relative">
          <div className="md:fixed w-full">
            <h1 className="md:pb-4 font-bold text-lg">รองเท้ากีฬา</h1>
            <div className="flex gap-4 md:flex-col md:w-52">
              <a href="#" className="hover:bg-slate-200 rounded-lg p-2">
                <span>วิ่ง</span>
              </a>
              <a href="#" className="hover:bg-slate-200 rounded-lg p-2">
                <span>ว่ายน้ำ</span>
              </a>
              <a href="#" className="hover:bg-slate-200 rounded-lg p-2">
                <span>ปีนเขา</span>
              </a>
              <a href="#" className="hover:bg-slate-200 rounded-lg p-2">
                <span>บาสเก็ตบอล</span>
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-full">
          <div className="drawer py-2 px-4 z-10">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex justify-between md:justify-end md:gap-6">
              {/* <!-- Page content here --> */}
              <p>1024 ผลการค้นหา</p>
              <label
                htmlFor="my-drawer"
                className="btn btn-white btn-sm btn-outline drawer-button rounded-full"
              >
                filter
                <img
                  src="../images/meng/page_info_20dp_FILL0_wght200_GRAD0_opsz20.svg"
                  alt=""
                />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <h2 className="p-2">Filter</h2>
                <li>
                  <h2>เรียงตาม</h2>
                  <div className="form-control p-0 pl-2">
                    <label className="label cursor-pointer">
                      <input type="radio" name="radio-10" className="radio" />
                      <span className="label-text pl-4">สินค้าเด่น</span>
                    </label>
                  </div>
                  <div className="form-control p-0 pl-2">
                    <label className="label cursor-pointer">
                      <input type="radio" name="radio-10" className="radio" />
                      <span className="label-text pl-4">ใหม่ล่าสุด</span>
                    </label>
                  </div>
                  <div className="form-control p-0 pl-2">
                    <label className="label cursor-pointer">
                      <input type="radio" name="radio-10" className="radio" />
                      <span className="label-text pl-4">ราคา: สูง-ต่ำ</span>
                    </label>
                  </div>
                  <div className="form-control p-0 pl-2">
                    <label className="label cursor-pointer">
                      <input type="radio" name="radio-10" className="radio" />
                      <span className="label-text pl-4">ราคา: ต่ำ-สูง</span>
                    </label>
                  </div>
                  {/* <!-- <label className="label">
                        <div className="form-control">
                          <input type="radio" checked/>
                          <span className="label-text">สินค้าเด่น</span>
                        </div>
                    </label>
                    <label className="label">
                        <div className="form-control">
                          <input type="radio"/>
                          <span className="label-text">ใหม่ล่าสุด</span>
                        </div>
                    </label>
                    <div className="form-control">
                      <input type="radio" />
                      <span className="label-text">ราคา: สูง-ต่ำ</span>
                    </div>
                    <div className="form-control">
                      <input type="radio" />
                      <span className="label-text">ราคา: ต่ำ-สูง</span>
                    </div> --> */}
                </li>
                <li>
                  <h2>เพศ</h2>
                  <div>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm rounded-none"
                    />
                    <p>ผู้ชาย</p>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm rounded-none"
                    />
                    <p>ผู้หญิง</p>
                  </div>
                </li>
                <li>
                  <h2>ราคา</h2>
                  <div>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm rounded-none"
                    />
                    <p>ต่ำกว่า ฿2000</p>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm rounded-none"
                    />
                    <p>฿2000 - ฿4000</p>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm rounded-none"
                    />
                    <p>฿4000 - ฿8000</p>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm rounded-none"
                    />
                    <p>สูงกว่า ฿8000</p>
                  </div>
                </li>
                <li>
                  <h2>ไซส์</h2>
                  <div className="flex flex-wrap justify-between">
                    <label className="cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring ring-transparent peer-checked:ring-black flex btn btn-outline btn-md">
                        <p>7</p>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring ring-transparent peer-checked:ring-black flex btn btn-outline btn-md">
                        <p>7.5</p>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring ring-transparent peer-checked:ring-black flex btn btn-outline btn-md">
                        <p>8</p>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring ring-transparent peer-checked:ring-black flex btn btn-outline btn-md">
                        <p>8.5</p>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring ring-transparent peer-checked:ring-black flex btn btn-outline btn-md">
                        <p>9</p>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring ring-transparent peer-checked:ring-black flex btn btn-outline btn-md">
                        <p>9.5</p>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring ring-transparent peer-checked:ring-black flex btn btn-outline btn-md">
                        <p>10</p>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring ring-transparent peer-checked:ring-black flex btn btn-outline btn-md">
                        <p>10.5</p>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring ring-transparent peer-checked:ring-black flex btn btn-outline btn-md">
                        <p>11</p>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring ring-transparent peer-checked:ring-black flex btn btn-outline btn-md">
                        <p>11.5</p>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring ring-transparent peer-checked:ring-black flex btn btn-outline btn-md">
                        <p>12</p>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring ring-transparent peer-checked:ring-black flex btn btn-outline btn-md">
                        <p>12.5</p>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring ring-transparent peer-checked:ring-black flex btn btn-outline btn-md">
                        <p>13</p>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring ring-transparent peer-checked:ring-black flex btn btn-outline btn-md">
                        <p>13.5</p>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring ring-transparent peer-checked:ring-black flex btn btn-outline btn-md">
                        <p>14</p>
                      </div>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 md:grid md:p-10 justify-around gap-3 md:justify-start md:gap-10">
            {data.map((data, index) => (
              <Link key={index}>
                <div className="card w-52 bg-base-100 rounded-none border md:w-full ">
                  <figure className="  overflow-hidden object-center">
                    <img
                      src={data.image}
                      alt="Shoes"
                      className=" object-contain w-[400px] h-[250px]"
                    />
                  </figure>
                  <div className="card-body pl-2 bg-slate-100">
                    <h2 className="card-title">{data.name}</h2>
                    <p>{data.category}</p>
                    <p>฿ {data.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

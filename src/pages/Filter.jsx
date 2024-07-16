import React, { useState, useEffect } from "react";
import MocNav from "../components/MocNav";
import { Link, Outlet } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { useLocation } from "react-router-dom";
import  {jwtDecode}  from "jwt-decode";







const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Filter = () => {
  const [data, setData] = useState([]);
  // const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const query = useQuery();
  const search = query.get("search") || "";

  const token = localStorage.getItem('token'); // Assume the token is stored in localStorage
  const [userId, setUserId] = useState(null);
  
  useEffect(() => {
    // decode
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        console.log(decodedToken.id);
        setUserId(decodedToken.id);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      console.log("No token found in local storage.");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/filter", {
          params: { category, search }
        });
        setData(response.data.products);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [category, search]);

  return (
    <div>
      <MocNav />
      <div className="md:flex py-4">
        <div className="border-b-2 p-2 md:w-2/12 md:py-10 md:px-8 md:relative">
          <div className="md:fixed w-full">
            <h1 className="md:pb-4 font-bold text-lg">รองเท้ากีฬา</h1>
            <div className="flex gap-4 md:flex-col md:w-52">
              <Link to="#" className="hover:bg-slate-200 rounded-lg p-2">
                <span onClick={() => setCategory("running")}>RUNNING</span>
              </Link>
              <Link to="#" className="hover:bg-slate-200 rounded-lg p-2">
                <span onClick={() => setCategory("football")}>FOOTBALL</span>
              </Link>
              <Link to="#" className="hover:bg-slate-200 rounded-lg p-2">
                <span onClick={() => setCategory("fashion")}>FASHION</span>
              </Link>
              <Link to="#" className="hover:bg-slate-200 rounded-lg p-2">
                <span onClick={() => setCategory("best seller")}>BEST SELLER</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-full">
          <div className="drawer py-2 px-4 z-10">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex justify-between md:justify-end md:gap-6">
              <p>{data.length} ผลการค้นหา</p>
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
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 md:grid md:p-10 justify-around gap-3 md:justify-start md:gap-10">
            {data.map((data, index) => (
              <Link key={index} to={`/ProductInfo/${data._id}`}>
                <div className="card w-52 bg-base-100 rounded-none border md:w-full ">
                  <figure className="  overflow-hidden object-center">
                    <img
                      src={data.productImages.front}
                      alt="Shoes"
                      className=" object-contain w-[400px] h-[250px]"
                    />
                  </figure>
                  <div className="card-body pl-2 bg-slate-100">
                    <h2 className="card-title">{data.productName}</h2>
                    <p>{data.category}</p>
                    <p>฿ {data.unitPrice}</p>
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

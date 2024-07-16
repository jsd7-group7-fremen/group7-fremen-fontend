import React, { useState, useEffect } from "react";
import MocNav from "../components/MocNav";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Filter = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState("");
  // const [priceRange, setPriceRange] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [gender, setGender] = useState([]);
  const [category, setCategory] = useState("");
  const query = useQuery();
  const search = query.get("search") || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        let queryString = `?category=${category}&search=${search}&sortBy=${sortBy}`;

        if (gender.length > 0) {
          queryString += `&gender=${gender.join(",")}`;
        }

        // if (priceRange.length > 0) {
        //   queryString += `&priceRange=${priceRange.join(",")}`;
        // }

        if (sizes.length > 0) {
          queryString += `&sizes=${sizes.join(",")}`;
        }

        const response = await axiosInstance.get(`/filter${queryString}`);
        setData(response.data.products);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [category, search, sortBy, sizes, gender]);

  const handleGenderChange = (event) => {
    const { value, checked } = event.target;
    setGender((prevGender) =>
      checked ? [...prevGender, value] : prevGender.filter((item) => item !== value)
    );
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.nextElementSibling.innerText);
  };

  // const handlePriceRangeChange = (event) => {
  //   const label = event.target.nextElementSibling.innerText.trim();
  
  //   // สร้าง object ชื่อเป็นช่วงราคาที่ส่งไปยัง backend
  //   let priceRangeQuery = '';
  
  //   switch (label) {
  //     case 'ต่ำกว่า ฿2000':
  //       priceRangeQuery = 'lessThan2000';
  //       break;
  //     case '฿2000 - ฿4000':
  //       priceRangeQuery = '2000to4000';
  //       break;
  //     case '฿4000 - ฿8000':
  //       priceRangeQuery = '4000to8000';
  //       break;
  //     case 'สูงกว่า ฿8000':
  //       priceRangeQuery = 'moreThan8000';
  //       break;
  //     default:
  //       break;
  //   }
  
  //   // ส่งข้อมูลช่วงราคาไปยัง useState ในการจัดการต่อไป
  //   setPriceRange((prevPriceRange) =>
  //     event.target.checked ? [...prevPriceRange, priceRangeQuery] : prevPriceRange.filter((item) => item !== priceRangeQuery)
  //   );
  // };
  

  const handleSizeChange = (event) => {
    const label = event.target.nextElementSibling.innerText.trim();
    setSizes((prevSizes) =>
      event.target.checked ? [...prevSizes, label] : prevSizes.filter((item) => item !== label)
    );
  };

  return (
    <div>
      <MocNav />
      <div className="md:flex py-4 pt-20">
        <div className="border-b-2 p-2 md:w-2/12 md:py-10 md:px-8 md:relative">
          <div className="md:fixed w-full">
            <h1 className="md:pb-4 font-bold text-lg">รองเท้ากีฬา</h1>
            <div className="flex gap-4 md:flex-col md:w-52">
              <Link to="#" className="hover:bg-slate-200 rounded-lg p-2" onClick={() => setCategory("running")}>
                วิ่ง
              </Link>
              <Link to="#" className="hover:bg-slate-200 rounded-lg p-2" onClick={() => setCategory("football")}>
                ฟุตบอล
              </Link>
              <Link to="#" className="hover:bg-slate-200 rounded-lg p-2" onClick={() => setCategory("fashion")}>
                แฟชั่น
              </Link>
              <Link to="#" className="hover:bg-slate-200 rounded-lg p-2" onClick={() => setCategory("best seller")}>
                ขายดี
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-full mt-16">
          <div className="drawer py-2 px-4 z-10">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex justify-between md:justify-end md:gap-6">
              <p>{data.length} ผลการค้นหา</p>
              <label htmlFor="my-drawer" className="btn btn-white btn-sm btn-outline drawer-button rounded-full">
                กรอง
                <img src="../images/meng/page_info_20dp_FILL0_wght200_GRAD0_opsz20.svg" alt="" />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="ปิด sidebar" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <h2 className="p-2">กรอง</h2>
                <li>
                  <h2>เรียงตาม</h2>
                  {["สินค้าเด่น", "ใหม่ล่าสุด", "ราคา: สูง-ต่ำ", "ราคา: ต่ำ-สูง"].map((option, index) => (
                    <div className="form-control p-0 pl-2" key={index}>
                      <label className="label cursor-pointer">
                        <input type="radio" name="sortBy" className="radio" onChange={handleSortChange} />
                        <span className="label-text pl-4">{option}</span>
                      </label>
                    </div>
                  ))}
                </li>
                <li>
                  <h2>เพศ</h2>
                  {["men", "women"].map((option, index) => (
                    <div key={index}>
                      <input type="checkbox" className="checkbox checkbox-sm rounded-none" value={option} onChange={handleGenderChange} />
                      <p>{option}</p>
                    </div>
                  ))}
                </li>
                {/* <li>
                  <h2>ราคา</h2>
                  {["ต่ำกว่า ฿2000", "฿2000 - ฿4000", "฿4000 - ฿8000", "สูงกว่า ฿8000"].map((option, index) => (
                    <div key={index}>
                      <input type="checkbox" className="checkbox checkbox-sm rounded-none" onChange={handlePriceRangeChange} />
                      <p>{option}</p>
                    </div>
                  ))}
                </li> */}
                <li>
                  <h2>ไซส์</h2>
                  <div className="flex flex-wrap justify-between sizes">
                    {[6 , 6.5 , 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12].map((size, index) => (
                      <label className="cursor-pointer" key={index}>
                        <input type="checkbox" className="sr-only peer" onChange={handleSizeChange} />
                        <div className="overflow-hidden rounded-lg bg-white shadow-lg ring ring-transparent peer-checked:ring-black flex btn btn-outline btn-md">
                          <p>{size}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 md:grid md:p-10 justify-around gap-3 md:justify-start md:gap-10">
            {data.map((item) => (
              <Link to={`/ProductInfo/${item._id}`} key={item._id}>
                <div className="card w-52 bg-base-100 rounded-none border md:w-full ">
                  <figure className="overflow-hidden object-center">
                    <img
                      src={`${item.productImages.front}`}
                      alt={item.productName}
                      className="object-contain w-[400px] h-[250px]"
                    />
                  </figure>
                  <div className="card-body pl-2 bg-slate-100">
                    <h2 className="card-title">{item.productName}</h2>
                    {Array.isArray(item.category) ? item.category.join("/") : item.category}
                    <p>฿ {item.unitPrice}</p>
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

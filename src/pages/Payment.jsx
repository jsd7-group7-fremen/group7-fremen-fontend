import React, { useEffect, useState } from "react";
import MocNav from "../components/MocNav";
import { FaCircleQuestion } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Payment = () => {
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
  ];

  const [data, setData] = useState(mockdata);
  const [total, setTotal] = useState(0);

  const handleDelete = (index) => {
    setData(data.filter((value, i) => i !== index));
  };

  useEffect(() => {
    setTotal(data.reduce((sum, data) => sum + data.price, 0));
  }, [data]);

  return (
    <div>
      <MocNav className="" />
      <form className="md:py-8 md:px-12 p-4 md:flex md:gap-6">
        <div className="md:w-7/12">
          <div className="flex items-center justify-between pr-2">
            <div className="flex items-center">
              <img
                src="/images/Logo/shoes logo_Fremen_v2.jpg"
                alt="Logo"
                className=" w-24"
              />
              <span className="font-bold uppercase border-l-2 pl-2">
                checkout
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden md:block">Have An Account?</span>
              <Link to="/Cart/Payment/Login">
              <button className="btn btn-outline rounded-none px-12">
                LOGIN
              </button>
              </Link>
            </div>
          </div>
          <h1 className="px-4 py-2 bg-slate-200 md:py-4">SHIPPING</h1>
          <div className="flex flex-col p-4 gap-4">
            <div className="flex gap-2">
              <h2 className="text-sm font-semibold">SHIPPING ADDRESS </h2>
              <FaCircleQuestion />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="input input-md input-bordered rounded-none w-full"
              />
              {/* <input
                type="text"
                placeholder="Last Name"
                className="input input-md input-bordered rounded-none w-full"
              /> */}
            </div>
            <input
              type="text"
              placeholder="Addess"
              className="input input-md input-bordered rounded-none w-full"
            />
            <input
              type="text"
              placeholder="Apartment, etc"
              className="input input-md input-bordered rounded-none w-full"
            />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="City"
                className="input input-md input-bordered rounded-none w-full md:w-6/12"
              />
              <select
                defaultValue={"DEFAULT"}
                className="select select-bordered select-md rounded-none md:w-6/12"
              >
                <option disabled value={"DEFAULT"}>
                  Country
                </option>
                <option value={"Thailand"}>Thailand</option>
                <option value={"Singapore"}>Singapore</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Postal/Zip code"
              className="input input-md input-bordered rounded-none w-full md:w-6/12"
            />
          </div>
        </div>
        <div className="md:w-5/12">
          <h1 className="px-4 py-2 font-semibold text-lg">ORDER SUMMARY</h1>
          <div className="p-4">
            <div className="border-b-2 border-gray-500 pb-2">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>฿ {total} Bath</p>
              </div>
              <div className="flex justify-between">
                <p>Taxes</p>
                <p>฿ 1 Bath</p>
              </div>
            </div>
            <div className="flex justify-between pt-2">
              <p>TOTAL</p>
              <p>฿ 4000 Bath</p>
            </div>
          </div>
          <div className="px-4 py-2">
            <p className="text-lg">
              Apply a Promo Code or Discount (one per order)
            </p>
            <div className="join w-full py-4">
              <input
                className="input input-bordered join-item rounded-none w-full"
                placeholder="Promo Code"
              />
              <button className="btn bg-slate-200 join-item rounded-none w-3/12">
                APPLY
              </button>
            </div>
          </div>
          {data.map((data, index) => (
            <div key={index} className="px-4 py-2 flex gap-2">
              <div className="border-2">
                <img src={data.image} alt="shoe" className="w-28" />
              </div>
              <div className="flex justify-between w-full">
                <div>
                  <h1>{data.name}</h1>
                  <h1>{data.category}</h1>
                  <h2>{data.price}</h2>
                </div>
                <div className="flex gap-2 justify-end items-center">
                  <button className="btn btn-sm btn-neutral btn-outline">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn btn-sm btn-error"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="px-4 py-2">
            <div className="pb-2">
              <label htmlFor="my_modal_6" className="btn btn-neutral w-full">
                Creadit Card
              </label>

              <input
                type="checkbox"
                id="my_modal_6"
                className="modal-toggle "
              />
              <div className="modal " role="dialog">
                <div className="modal-box ">
                  <div className="flex flex-col gap-6 p-4">
                    <label className="font-bold text-lg py-8">
                      Card information
                    </label>
                    <div className="flex">
                      <div className="flex flex-col w-full gap-1">
                        <label>Full Name</label>
                        <input
                          type="text"
                          className="input input-md input-bordered rounded-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex flex-col md:w-6/12 gap-1">
                        <label>Credit Card Number</label>
                        <input
                          type="text"
                          placeholder="xxxx xxxx xxxx xxxx"
                          className="input input-md input-bordered rounded-none"
                        />
                      </div>
                      <div className="flex flex-col md:w-6/12 gap-1">
                        <label>Security Code</label>
                        <input
                          type="text"
                          placeholder="CVC"
                          className="input input-md input-bordered rounded-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col md:w-6/12 gap-1">
                      <label>Card Expiration</label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="input input-md input-bordered rounded-none"
                      />
                    </div>
                  </div>
                  <div className="modal-action">
                    <button className="btn btn-primary">Submit</button>
                    <label htmlFor="my_modal_6" className="btn">
                      Close!
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-success w-full">Pay</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductInfo = () => {
  return (
    <div>
      <Navbar />
      <div className="md:mx-28 md:flex gap-3">
        <div className="md:w-2/3">
          <div
            id="productImages"
            className="hidden md:grid grid-cols-2 gap-0.5 md:pt-28 pb-28"
          >
            <img src="/images/brand/adidas2.png" alt="Adidas Image 1" />
            <img src="/images/brand/adidas2.png" alt="Adidas Image 2" />
            <img src="/images/brand/adidas2.png" alt="Adidas Image 3" />
            <img src="/images/brand/adidas2.png" alt="Adidas Image 4" />
          </div>
        </div>
        <div className="pt-28 ">
          <div className="px-8 pb-8 md:pb-0">
            <h1 className="text-4xl">Adidas Gazelle</h1>
            <p className="text-xl mt-2">รองเท้าผู้หญิง</p>
            <p className="text-2xl mt-4 font-bold">THB 4300</p>
          </div>
          <div className="w-full md:hidden">
            <img
              src="/images/brand/adidas1.png"
              alt="Adidas Gazelle"
              className="mx-auto"
            />
          </div>
          <div className="px-8 md:mt-1">
            <p className="text-xl pt-8 md:text-xl md:font-bold">เลือกสี</p>
            <div className="flex gap-1 pb-2 pt-4">
              <img
                src="/images/brand/adidas1.png"
                alt="Semi Spark"
                className="w-28 h-22"
              />
              <img
                src="/images/brand/adidas5.png"
                alt="Wonder Clay"
                className="w-28 h-22"
              />
            </div>
            <p>Semi Blue Burst / Almost Yellow / Cloud White</p>
            <div className="md:flex justify-between pt-8">
              <p className="text-xl pb-2 md:text-xl md:font-bold">เลือกไซส์</p>
              <p className="hidden md:block md:text-sm md:text-gray-600 md:underline underline-offset-2">
                คำแนะนำในการเลือกไซส์
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2 pb-6">
              <button className="border rounded-xl py-2 hover:bg-gray-400">
                US 5
              </button>
              <button className="border rounded-xl py-2 hover:bg-gray-400">
                US 5.5
              </button>
              <button className="border rounded-xl py-2 hover:bg-gray-400">
                US 6
              </button>
              <button className="border rounded-xl py-2 hover:bg-gray-400">
                US 6.5
              </button>
              <button className="border rounded-xl py-2 hover:bg-gray-400">
                US 7
              </button>
              <button className="border rounded-xl py-2 hover:bg-gray-400">
                US 7.5
              </button>
              <button className="border rounded-xl py-2 hover:bg-gray-400">
                US 8
              </button>
              <button className="border rounded-xl py-2 hover:bg-gray-400">
                US 8.5
              </button>
              <button className="border rounded-xl py-2 hover:bg-gray-400">
                US 9
              </button>
              <button className="border rounded-xl py-2 hover:bg-gray-400">
                US 9.5
              </button>
              <button className="border rounded-xl py-2 hover:bg-gray-400">
                US 10
              </button>
            </div>
            <p className="text-sm underline mt-4 text-gray-500 pb-4 md:hidden">
              คำแนะนำในการเลือกไซส์
            </p>
            <div className="mt-4 mb-6">
              <button className="btn px-4 py-2 bg-black text-white rounded-xl w-full font-bold hover:bg-gray-400 mb-2">
                เพิ่มไปยังตะกร้า
              </button>
              <button className="btn px-4 py-2 bg-white text-black border-slate-400 rounded-xl w-full font-bold hover:bg-gray-400">
                รายการโปรด ♡
              </button>
            </div>
            <div className="pt-8 pb-12 ">
              <div>
                <hr />
                <h2 className="underline underline-offset-2 text-xl py-6">
                  รายละเอียดสินค้า
                </h2>
              </div>
              <div>
                <hr />
                <h2 className="underline underline-offset-2 text-xl py-6">
                  การจัดส่งและการคืนสินค้า
                </h2>
              </div>
              <div>
                <hr />
                <h2 className="underline underline-offset-2 text-xl py-6">
                  รีวิว
                </h2>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductInfo;

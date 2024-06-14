import React from "react";

const ProductInfo = () => {
  return (
    <div>
      <div className="md:flex gap-4 ">
        <div>
          <div className="hidden md:grid grid-cols-2 gap-0.5 md:w-2/3 md:pt-28 md:pl-12 md:pb-12">
            <img src="/images/brand/adidas2.png" alt="Adidas Image 1" />
            <img src="/images/brand/adidas2.png" alt="Adidas Image 2" />
            <img src="/images/brand/adidas2.png" alt="Adidas Image 3" />
            <img src="/images/brand/adidas2.png" alt="Adidas Image 4" />
          </div>
        </div>
        <div className="md:fixed right-0 md:pt-28 md:w-1/3">
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
            <p className="">Semi Blue Burst / Almost Yellow / Cloud White</p>
            <div className="md:flex space-x-24 pt-8">
              <p className="text-xl  pb-2 md:text-xl md:font-bold">เลือกไซส์</p>
              <p className="hidden text-sm mt-4 text-gray-500 pb-4 underline-offset-2">
                คำแนะนำในการเลือกไซส์
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 py-2">
              <button className="border rounded-xl py-2  hover:bg-gray-400">
                US 5
              </button>
              <button className="border rounded-xl py-2 hover:bg-gray-400">
                US 5.5
              </button>
              <button className="border rounded-xl py-2 hover:bg-gray-400">
                US 6
              </button>
              <button className="border rounded-xl py-2  hover:bg-gray-400">
                US 6.5
              </button>
              <button className="border rounded-xl py-2  hover:bg-gray-400">
                US 7
              </button>
              <button className="border rounded-xl py-2  hover:bg-gray-400">
                US 7.5
              </button>
              <button className="border rounded-xl py-2  hover:bg-gray-400">
                US 8
              </button>
              <button className="border rounded-xl py-2  hover:bg-gray-400">
                US 8.5
              </button>
              <button className="border rounded-xl py-2 hover:bg-gray-400">
                US 9
              </button>
              <button className="border rounded-xl py-2  hover:bg-gray-400">
                US 9.5
              </button>
              <button className="border rounded-xl py-2  hover:bg-gray-400">
                US 10
              </button>
            </div>
            <p className="text-sm underline underline-offset-2 mt-4 text-gray-500 pb-4 underline-offset-2 md:hidden">
              คำแนะนำในการเลือกไซส์
            </p>
            <div className="flex gap-2 mt-4 mb-6">
              <button className="btn px-4 py-2 bg-black text-white rounded-xl w-full font-bold hover:bg-gray-400">
                เพิ่มไปยังตะกร้า
              </button>
              <button className="border rounded-xl px-6 py-4  hover:bg-gray-400">
                ♡
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 py-8 md:pl-12">
        <div className="pb-6">
          <h2 className="underline underline-offset-2 text-xl">
            รายละเอียดสินค้า
          </h2>
        </div>
        <div className="pb-6">
          <h2 className="underline underline-offset-2 text-xl">
            การจัดส่งและการคืนสินค้า
          </h2>
        </div>
        <div className="pb-6">
          <h2 className="underline underline-offset-2 text-xl">รีวิว</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

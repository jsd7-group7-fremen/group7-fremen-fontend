import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const ProductInfo = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("blue");

  const toggleDetail = () => {
    setIsDetailOpen(!isDetailOpen);
  };

  const toggleShipping = () => {
    setIsShippingOpen(!isShippingOpen);
  };

  const toggleReview = () => {
    setIsReviewOpen(!isReviewOpen);
  };

  const shoes = {
    blue: {
      colorName: "Semi Blue Burst",
      imageUrl: "/images/brand/adidas2.png",
    },
    yellow: {
      colorName: "Almost Yellow ",
      imageUrl: "/images/brand/adidas6.png",
    },
  };

  return (
    <div>
      <Navbar />
      <div className="md:mx-28 md:flex gap-3">
        <div className="md:w-2/3">
          <div
            id="productImages"
            className="hidden md:grid grid-cols-2 gap-0.5 md:pt-28 mb-28"
          >
            <img src={shoes[selectedColor].imageUrl} alt="Adidas Image 1" />
            <img src={shoes[selectedColor].imageUrl} alt="Adidas Image 2" />
            <img src={shoes[selectedColor].imageUrl} alt="Adidas Image 3" />
            <img src={shoes[selectedColor].imageUrl} alt="Adidas Image 4" />
          </div>
        </div>
        <div className="pt-28 md:w-1/3">
          <div className="px-8 pb-8 md:pb-0">
            <h1 className="text-4xl">Adidas Gazelle</h1>
            <p className="text-xl mt-2">รองเท้าผู้หญิง</p>
            <p className="text-2xl mt-4 font-bold">THB 4300</p>
          </div>
          <div className="w-full md:hidden">
            <img
              src={shoes[selectedColor].imageUrl}
              alt="Adidas Gazelle"
              className="mx-auto"
            />
          </div>
          <div className="px-8 md:mt-1">
            <p className="text-xl pt-8 md:text-xl md:font-bold">เลือกสี</p>
            <div className="flex gap-1 pb-2 pt-4">
              <button
                onClick={() => setSelectedColor("blue")}
                className={`p-1 border-2 rounded ${
                  selectedColor === "blue"
                    ? "border-black"
                    : "border-transparent"
                }`}
              >
                <img
                  src="/images/brand/adidas1.png"
                  alt="Semi Blue Burst"
                  className="w-28 h-22"
                />
              </button>
              <button
                onClick={() => setSelectedColor("yellow")}
                className={`p-1 border-2 rounded ${
                  selectedColor === "yellow"
                    ? "border-black"
                    : "border-transparent"
                }`}
              >
                <img
                  src="/images/brand/adidas5.png"
                  alt="Almost Yellow"
                  className="w-28 h-22"
                />
              </button>
            </div>
            <p>{shoes[selectedColor].colorName}</p>
            <div className="md:flex justify-between pt-8">
              <p className="text-xl pb-2 md:text-xl md:font-bold">เลือกไซส์</p>
              <a
                href="https://www.nike.com/th/size-fit/womens-footwear"
                className="hidden md:block md:text-sm md:text-gray-600 md:underline underline-offset-2"
              >
                คำแนะนำในการเลือกไซส์
              </a>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2 pb-6">
              {[
                "US 5",
                "US 5.5",
                "US 6",
                "US 6.5",
                "US 7",
                "US 7.5",
                "US 8",
                "US 8.5",
                "US 9",
                "US 9.5",
                "US 10",
              ].map((size) => (
                <button
                  key={size}
                  className="border rounded-xl py-2 hover:bg-gray-400"
                >
                  {size}
                </button>
              ))}
            </div>
            <a
              href="https://www.nike.com/th/size-fit/womens-footwear"
              className="text-sm underline mt-4 text-gray-500 pb-4 md:hidden"
            >
              คำแนะนำในการเลือกไซส์
            </a>
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
                <h2
                  className="flex justify-between underline underline-offset-2 text-xl py-6"
                  onClick={toggleDetail}
                >
                  รายละเอียดสินค้า
                  <FontAwesomeIcon
                    icon={isDetailOpen ? faChevronUp : faChevronDown}
                    className="ml-2 "
                  />
                </h2>
                {isDetailOpen && (
                  <div>
                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4">
                        คุณสมบัติทั่วไป
                      </h2>
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          <strong>วัสดุ:</strong> ส่วนบนทำจากหนังนิ่ม (suede)
                          หรือหนัง (leather),
                          ส่วนลิ้นรองเท้าทำจากหนังหรือวัสดุสังเคราะห์ที่ทนทาน,
                          พื้นรองเท้าทำจากยาง (rubber)
                        </li>
                        <li>
                          <strong>การออกแบบ:</strong> โลโก้สามแถบ
                          (Three-Stripes) อยู่ด้านข้างของรองเท้า, โลโก้ Trefoil
                          อยู่ที่ลิ้นรองเท้าและบางรุ่นอาจมีที่ส่วนหลัง,
                          มีให้เลือกหลายสี
                        </li>
                        <li>
                          <strong>การรองรับ:</strong>
                          พื้นรองเท้าด้านในบุด้วยวัสดุที่นุ่มและมีการรองรับที่ดี,
                          พื้นรองเท้าชั้นกลางทำจากโฟม EVA
                          หรือวัสดุที่มีการรองรับแรงกระแทกดี
                        </li>
                        <li>
                          <strong>ประโยชน์:</strong>
                          เหมาะสำหรับการใช้งานทั่วไปและการออกกำลังกายเบา ๆ,
                          สวมใส่สบายตลอดวัน,
                          การออกแบบที่คลาสสิกและเรียบง่ายทำให้สามารถใส่ได้ในหลายโอกาส
                        </li>
                      </ul>
                    </section>
                    <section className="mb-8">
                      <h2 className="text-xl font-semibold mb-4">
                        การดูแลรักษา
                      </h2>
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          การทำความสะอาด:
                          ควรใช้แปรงขนนุ่มและน้ำยาทำความสะอาดสำหรับรองเท้า suede
                          หรือหนัง
                        </li>
                        <li>
                          การเก็บรักษา:
                          เก็บในที่แห้งและหลีกเลี่ยงแสงแดดโดยตรงเพื่อป้องกันการซีดจางของสี
                        </li>
                      </ul>
                    </section>
                  </div>
                )}
              </div>
              <div>
                <hr />
                <h2
                  className="flex justify-between underline underline-offset-2 text-xl py-6"
                  onClick={toggleShipping}
                >
                  การจัดส่งและการคืนสินค้า
                  <FontAwesomeIcon
                    icon={isShippingOpen ? faChevronUp : faChevronDown}
                    className="ml-2 "
                  />
                </h2>
                {isShippingOpen && (
                  <div>
                    <p className="mb-4">
                      จัดส่งสินค้าฟรีสำหรับคำสั่งซื้อที่มีมูลค่า 5500 บาท ขึ้นไป
                    </p>

                    <div className="mb-6">
                      <h2 className="text-xl font-semibold mb-2">
                        กรุงเทพมหานคร:
                      </h2>
                      <ul className="list-disc pl-5">
                        <li>ส่งแบบมาตรฐาน ถึงที่หมายใน 3-6 วันทำการ</li>
                        <li>ส่งแบบด่วน ถึงที่หมายใน 2-4 วันทำการ</li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h2 className="text-xl font-semibold mb-2">
                        สมุทรปราการ:
                      </h2>
                      <ul className="list-disc pl-5">
                        <li>ส่งแบบมาตรฐาน ถึงที่หมายใน 4-7 วันทำการ</li>
                        <li>ส่งแบบด่วน ถึงที่หมายใน 3-5 วันทำการ</li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h2 className="text-xl font-semibold mb-2">
                        เมืองนนทบุรี:
                      </h2>
                      <ul className="list-disc pl-5">
                        <li>ส่งแบบมาตรฐาน ถึงที่หมายใน 4-7 วันทำการ</li>
                        <li>ส่งแบบด่วน ถึงที่หมายใน 3-5 วันทำการ</li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h2 className="text-xl font-semibold mb-2">
                        จังหวัดอื่น:
                      </h2>
                      <ul className="list-disc pl-5">
                        <li>ส่งแบบมาตรฐาน ถึงที่หมายใน 5-8 วันทำการ</li>
                        <li>ส่งแบบด่วน ถึงที่หมายใน 3-5 วันทำการ</li>
                      </ul>
                    </div>

                    <p className="mb-4">
                      คำสั่งซื้อจะดำเนินการและส่งมอบในวันจันทร์-ศุกร์
                      เว้นวันหยุดนักขัตฤกษ์ ยกเว้นวันหยุดเทศกาลสำหรับสมาชิก Nike
                      ฟรีค่าขนส่งในกรณีคืนสินค้า.
                      <a href="#" className="text-blue-500 underline">
                        ข้อยกเว้นของนโยบายการคืนสินค้า
                      </a>
                    </p>
                  </div>
                )}
              </div>
              <div>
                <hr />
                <h2
                  className="flex justify-between underline underline-offset-2 text-xl py-6"
                  onClick={toggleReview}
                >
                  รีวิว
                  <div className="flex justify-between">
                    <div className="pr-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <FontAwesomeIcon
                      icon={isReviewOpen ? faChevronUp : faChevronDown}
                      className="ml-2 "
                    />
                  </div>
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

import React, { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const ProductCreate = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    productName: "",
    quantityInStock: 0,
    unitPrice: 0,
    brand: "",
    color: "",
    sizeUs: "",
    description: "",
    productImages: {
      isometric: "",
      side: "",
      top: "",
      rear: "",
      front: "",
      bottom: "",
    },
    category: [],
    productStatus: "",
    createdDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in product.productImages) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        productImages: {
          ...prevProduct.productImages,
          [name]: value,
        },
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  const handleCategoryChange = (e, index) => {
    const { value } = e.target;
    const newCategories = [...product.category];
    newCategories[index] = value;
    setProduct((prevProduct) => ({
      ...prevProduct,
      category: newCategories,
    }));
  };

  const addCategory = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      category: [...prevProduct.category, ""],
    }));
  };

  const removeCategory = (index) => {
    const newCategories = product.category.filter((_, i) => i !== index);
    setProduct((prevProduct) => ({
      ...prevProduct,
      category: newCategories,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/products/", product);
      alert("success");
      navigate(-1);
    } catch (error) {
      console.log("error");
    }
    console.log("Product Created:", product);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-[4_0_0%] mx-auto p-8 bg-white shadow-lg rounded-lg"
    >
      <h1 className="text-2xl font-bold mb-6">Create Product</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Product Name:
        </label>
        <input
          type="text"
          name="productName"
          value={product.productName}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Quantity In Stock:
        </label>
        <input
          type="number"
          name="quantityInStock"
          value={product.quantityInStock}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Unit Price:
        </label>
        <input
          type="number"
          name="unitPrice"
          value={product.unitPrice}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Brand:
        </label>
        <input
          type="text"
          name="brand"
          value={product.brand}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Color:
        </label>
        <input
          type="text"
          name="color"
          value={product.color}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Size (US):
        </label>
        <input
          type="text"
          name="sizeUs"
          value={product.sizeUs}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Description:
        </label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Isometric Image URL:
        </label>
        <input
          type="text"
          name="isometric"
          value={product.productImages.isometric}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Side Image URL:
        </label>
        <input
          type="text"
          name="side"
          value={product.productImages.side}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Top Image URL:
        </label>
        <input
          type="text"
          name="top"
          value={product.productImages.top}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Rear Image URL:
        </label>
        <input
          type="text"
          name="rear"
          value={product.productImages.rear}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Front Image URL:
        </label>
        <input
          type="text"
          name="front"
          value={product.productImages.front}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Bottom Image URL:
        </label>
        <input
          type="text"
          name="bottom"
          value={product.productImages.bottom}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Categories:
        </label>
        {product.category.map((cat, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={cat}
              onChange={(e) => handleCategoryChange(e, index)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              onClick={() => removeCategory(index)}
              className="ml-2 text-red-600 hover:text-red-900"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addCategory}
          className="mt-2 text-blue-600 hover:text-blue-900 btn"
        >
          Add Category
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Product Status:
        </label>
        <input
          type="text"
          name="productStatus"
          value={product.productStatus}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Created Date:
        </label>
        <input
          type="datetime-local"
          name="createdDate"
          value={product.createdDate}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create Product
      </button>
    </form>
  );
};

export default ProductCreate;

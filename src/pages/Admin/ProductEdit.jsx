import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    brand: "",
    category: [],
    color: "",
    description: "",
    productImages: {},
    productName: "",
    quantityInStock: 0,
    sizeUs: "",
    unitPrice: 0,
  });

  const [error, setError] = useState(null);

  const getProduct = async () => {
    try {
      const response = await axiosInstance.get("/products/" + id);
      setProduct(response.data);
    } catch (error) {
      setError("Failed to fetch product details.");
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      productImages: {
        ...prevProduct.productImages,
        [name]: value,
      },
    }));
  };

  const handleCategoryChange = (e) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      category: e.target.value.split(","),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.patch("/products/" + id, product);
      alert("Product updated successfully!");
      navigate(-1);
    } catch (error) {
      setError("Failed to update product.");
      console.error(error);
    }
  };

  return (
    <div className="flex-[4_0_0%] mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-8 text-center">Edit Product {id}</h1>
      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Brand</label>
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Category</label>
          <input
            type="text"
            name="category"
            value={product.category.join(",")}
            onChange={handleCategoryChange}
            className="mt-1 block w-full p-2 border rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Color</label>
          <input
            type="text"
            name="color"
            value={product.color}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">
            Product Images
          </label>
          {Object.keys(product.productImages).map((key) => (
            <div key={key} className="space-y-2">
              <label className="block text-gray-700 capitalize">{key}</label>
              <input
                type="text"
                name={key}
                value={product.productImages[key]}
                onChange={handleImageChange}
                className="mt-1 block w-full p-2 border rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">
            Quantity In Stock
          </label>
          <input
            type="number"
            name="quantityInStock"
            value={product.quantityInStock}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Size (US)</label>
          <input
            type="text"
            name="sizeUs"
            value={product.sizeUs}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Unit Price</label>
          <input
            type="number"
            name="unitPrice"
            value={product.unitPrice}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;

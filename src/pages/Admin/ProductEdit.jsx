import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductEdit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    brand: "Adidas",
    category: ["running", "women"],
    color: "Crytal White/Astronomy Blue",
    description:
      "adidas 4DFWD 2 redefines forward motion combining the unique, groundbreaking innovation of a 3D printed midsole with a new upper construction and a Continental outsole for extra grip.",
    productImages: {
      bottom:
        "https://res.cloudinary.com/dhafpmdbf/image/upload/v1720628133/hoka_6_rear_dbywnk.jpg",
      front:
        "https://res.cloudinary.com/dhafpmdbf/image/upload/v1720628137/hoka_6_front_tyqn4c.jpg",
      isometric:
        "https://res.cloudinary.com/dhafpmdbf/image/upload/v1720628126/hoka_6_iso_id16lt.jpg",
      rear: "https://res.cloudinary.com/dhafpmdbf/image/upload/v1720628137/hoka_6_back_ac2b2f.jpg",
      side: "https://res.cloudinary.com/dhafpmdbf/image/upload/v1720628128/hoka_6_side_ouvaav.jpg",
      top: "https://res.cloudinary.com/dhafpmdbf/image/upload/v1720628128/hoka_6_top_ib7qqf.jpg",
    },
    productName: "Adidas 4DFWD 2 Running",
    quantityInStock: 88,
    sizeUs: "8.5",
    unitPrice: 7300,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      productImages: {
        ...product.productImages,
        [name]: value,
      },
    });
  };

  const handleCategoryChange = (e) => {
    setProduct({
      ...product,
      category: e.target.value.split(","),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Product updated:", product);
  };

  return (
    <div className="flex-[4_0_0%] p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Product {id}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Brand</label>
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={product.category.join(",")}
            onChange={handleCategoryChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Color</label>
          <input
            type="text"
            name="color"
            value={product.color}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Product Images</label>
          {Object.keys(product.productImages).map((key) => (
            <div key={key} className="mb-2">
              <label className="block text-gray-700 capitalize">{key}</label>
              <input
                type="text"
                name={key}
                value={product.productImages[key]}
                onChange={handleImageChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Quantity In Stock</label>
          <input
            type="number"
            name="quantityInStock"
            value={product.quantityInStock}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Size (US)</label>
          <input
            type="text"
            name="sizeUs"
            value={product.sizeUs}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Unit Price</label>
          <input
            type="number"
            name="unitPrice"
            value={product.unitPrice}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;

import React from 'react';

const ProductRecommendations = () => {
  const products = [
    {
      name: "Jordan Dri-FIT Club",
      description: "Unstructured Curved Bill Cap",
      price: "S$39.00",
      imageUrl: "path/to/red-hat-image.jpg",
    },
    {
      name: "Air Jordan 1 Low",
      description: "Women's Shoes",
      price: "S$165.00",
      imageUrl: "path/to/blue-shoes-image.jpg",
    },
    {
      name: "Jordan 1 Low Alt",
      description: "Younger Kids' Shoes",
      price: "S$99.00",
      imageUrl: "path/to/kids-shoes-image.jpg",
    },
  ];

  return (
    <div className="ml-5 p-10">
      <h2 className="text-xl font-bold mb-4">You Might Also Like</h2>
      <div className="carousel rounded-box flex justify-center">
        {products.map((product, index) => (
          <div
            className="carousel-item flex flex-col lg:w-1/3 m-2 sm:flex-nowrap border border-gray-200 rounded-lg shadow-md p-4"
            key={index}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-60 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-gray-800 font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRecommendations;

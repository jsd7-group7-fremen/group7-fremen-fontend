import React from "react";
import adidas1 from "../assets/shoes/adidas1.png"

const carts = [
    {
        id: 1,
        model: "Air Max 90",
        price: 120,
        description: "A classic Nike sneaker with modern updates.",
        color: "White/Red",
        size: "10",
        rating: "4.5",
        tag: "Sports",
        img: adidas1
    },
    {
        id: 2,
        model: "Jordan 1",
        price: 150,
        description: "Iconic basketball shoe loved by many.",
        color: "Black/Red",
        size: "9",
        rating: "4.8",
        tag: "Basketball",
        img: adidas1
    },
    {
        id: 3,
        model: "Air Force 1",
        price: 110,
        description: "Timeless style and comfort.",
        color: "White",
        size: "8",
        rating: "4.7",
        tag: "Casual",
        img: adidas1
    },
    {
        id: 4,
        model: "React Infinity",
        price: 160,
        description: "Designed for maximum running comfort.",
        color: "Blue/White",
        size: "11",
        rating: "4.6",
        tag: "Running",
        img: adidas1
    },
    {
        id: 5,
        model: "Blazer Mid 77",
        price: 100,
        description: "Retro style with modern updates.",
        color: "White/Black",
        size: "9.5",
        rating: "4.4",
        tag: "Casual",
        img: adidas1
    },
    {
        id: 6,
        model: "Zoom Pegasus",
        price: 130,
        description: "Versatile running shoe.",
        color: "Black/White",
        size: "10",
        rating: "4.6",
        tag: "Running",
        img: adidas1
    },
    {
        id: 7,
        model: "Metcon 6",
        price: 140,
        description: "Engineered for high-intensity workouts.",
        color: "Grey/Red",
        size: "11",
        rating: "4.5",
        tag: "Training",
        img: adidas1
    },
    {
        id: 8,
        model: "LeBron 18",
        price: 200,
        description: "Performance basketball shoe.",
        color: "Purple/Gold",
        size: "12",
        rating: "4.7",
        tag: "Basketball",
        img: adidas1
    },
    {
        id: 9,
        model: "VaporMax",
        price: 190,
        description: "Innovative air cushioning.",
        color: "Black/Green",
        size: "10.5",
        rating: "4.5",
        tag: "Casual",
        img: adidas1
    },
    {
        id: 10,
        model: "Daybreak",
        price: 90,
        description: "Classic silhouette with a modern touch.",
        color: "Yellow/Black",
        size: "9",
        rating: "4.3",
        tag: "Casual",
        img: adidas1
    },
    {
        id: 11,
        model: "Epic React",
        price: 180,
        description: "Soft and responsive cushioning.",
        color: "Pink/White",
        size: "8.5",
        rating: "4.6",
        tag: "Running",
        img: adidas1
    },
    {
        id: 12,
        model: "Flyknit Racer",
        price: 150,
        description: "Lightweight and breathable.",
        color: "Black/White",
        size: "9.5",
        rating: "4.7",
        tag: "Running",
        img: adidas1
    }
];



function ProductsRandom () {

    const randomProducts =(array)=> {
        let newArray = [];
        let oldArray = [...array];
        while (oldArray.length > 0) {
            let index = Math.floor(Math.random() * oldArray.length);
            newArray.push(oldArray[index]);
            oldArray.splice(index, 1);
        }
        return newArray;
    };

    const newCartsRandom = randomProducts(carts);


    return(
        
        <div
        className="lg:grid lg:grid-cols-3 gap-10 sm:grid sm:grid-cols-1 sm:flex-col sm:content-center"
        >
            {newCartsRandom.map(item => (
                <div
                    className="card w-96 bg-base-100 shadow-xl bg-slate-300 shadow-inner transition duration-300 ease-in-out justify-self-center"
                >
                    <figure className="px-10">
                    <img
                        src={item.img}
                        alt="Shoes"
                        className="rounded-xl w-48 h-42 transition duration-300 ease-in-out hover:scale-110"
                    />
                    </figure>
                    <div className="card-body items-center text-center">
                    <div className="card-title flex flex-col">
                        <h2 className="font-bold text-2xl">NIKE</h2>
                        <p>Model : {item.model}</p>
                        <p className="font-bold text-xl">Price : ${item.price}</p>
                    </div>
                    <div className="card-detail items-start text-start">
                        <p>Description : {item.description}</p>
                        <p>Color : {item.color}</p>
                        <p>Size : {item.size}</p>
                        <p>Rating : {item.rating}</p>
                        <p>Tag : {item.tag}</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-neutral w-32">Add Cart</button>
                        <button className="btn w-32">Add Favorite</button>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsRandom;
import PropTypes from "prop-types"; // Import PropTypes from prop-types package
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const Popup = ({ item, onClose }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSeeCart = () => {
    onClose();
    navigate("/carts"); // Navigate to the cart page
  };

  const handleCheckout = () => {
    onClose();
    navigate("/checkout"); // Navigate to the checkout page
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-black"
          onClick={onClose}
          style={{ zIndex: 10 }} // Ensure the button is on top
        >
          ×
        </button>
        <div className="py-2 items-center">
          <h3 className="text-xl font-bold text-center">
            The item has been added to your cart!
          </h3>
        </div>
        <div className="flex">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-24 h-24 mx-auto"
          />
          <div className="ml-4">
            <h2 className="text-xl mt-2">{item.name}</h2>
            <p>THB {item.price}</p>
            <p>US {item.size}</p>
          </div>
        </div>
        <div className="flex justify-around mt-4">
          <button
            onClick={handleSeeCart}
            className="bg-gray-300 px-4 py-2 rounded-lg"
          >
            See cart
          </button>
          <button
            onClick={handleCheckout}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
Popup.propTypes = {
  item: PropTypes.object.isRequired, // item prop should be an object and is required
  onClose: PropTypes.func.isRequired, // onClose prop should be a function and is required
};

export default Popup;

import React, {useContext} from "react";
import  {CartContext}  from "../store/cartContext";
const Cart = ({ isOpen, onClose }) => {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.cartItems;

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const increaseQuantity = (item) => {
    cartContext.updateQuantity(item.id, item.quantity + 1);
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      cartContext.updateQuantity(item.id, item.quantity - 1);
    } else {
      cartContext.setCartItems((prevCartItems) =>
        prevCartItems.filter((cartItem) => cartItem.id !== item.id)
      );
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 w-1/2 rounded-lg">
            <h2 className="text-black text-2xl font-semibold mb-4">
              Your Cart
            </h2>
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="mb-2 text-black flex justify-between items-center"
                >
                  <span className="font-semibold w-2/5">{item.name}</span>
                  <div className="text-gray-600 w-1/5 flex items-center">
                    <button
                      onClick={() => decreaseQuantity(item)}
                      className="px-2 py-1 bg-teal-900 text-white rounded-md hover:bg-teal-600"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item)}
                      className="px-2 py-1 bg-teal-900 text-white rounded-md hover:bg-teal-600"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-teal-500 w-2/5 text-right">
                    Rs. {item.price * item.quantity}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-black font-bold">
              Total: Rs. {getTotalPrice()}
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={onClose}
                className="bg-teal-900 text-white py-2 px-4 mr-3 rounded-full"
              >
                Close Cart
              </button>
              <button
                onClick={onClose}
                className="bg-teal-900 text-white py-2 px-4 rounded-full"
              >
                Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

import React, {useContext, useState} from "react";
import { medicineData } from "./Constants";
import Card from "./Card";
import Input from "./Input";
import { CartContext } from "../store/cartContext";

const Items = () => {
  const [quantityInput, setQuantityInput] = useState("1");
  const cartContext = useContext(CartContext);

  const handleQuantityChange = (event) => {
    setQuantityInput(event.target.value);
  };

  const addToCart = (med) => {
    const quantity = parseInt(quantityInput, 10);
    cartContext.setCartItems((prevCartItems) => [
      ...prevCartItems,
      {
        id: med.id,
        name: med.name,
        price: med.price,
        quantity: quantity,
      },
    ]);
  };

  return (
    <div className="grid grid-cols-1">
      {medicineData.map((med) => (
        <Card
          key={med.id}
          className="bg-white hover:shadow-lg hover:bg-gray-100 transition duration-300"
        >
          <div className="px-1 py-2 flex justify-between items-center">
            <div>
              <ul>
                <li className="text-xl text-teal-700 font-semibold mb-2">
                  {med.name}
                </li>
                <li className="text-sm text-gray-600 mb-2">
                  {med.description}
                </li>
                <li className="text-md font-semibold text-teal-500">
                  Rs. {med.price}
                </li>
                <li className="text-sm text-teal-950"> Quantity Available : {med.quantityLeft}</li>
              </ul>
            </div>
            <div className="flex items-center justify-end">
              <form className="flex flex-col items-end">
                <div className="mb-1 mt-1">
                  <Input
                    label="Quantity"
                    input={{
                      id: "amount",
                      type: "number",
                      min: "1",
                      max : med.quantityLeft,
                      step: "1",
                      value: quantityInput,
                      onChange: handleQuantityChange,
                      className:
                        "border rounded py-1 px-1 w-20 text-gray-700 focus:outline-none focus:ring focus:border-blue-300",
                    }}
                  />
                </div>
                <button
                  className="px-2 py-1 text-sm bg-teal-900 text-white rounded-md hover:bg-teal-300 hover:text-teal-900"
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(med);
                  }}
                >
                  + Add
                </button>
              </form>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Items;

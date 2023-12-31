import React, { useContext, useState, useEffect } from "react";
import Card from "./Card";
import Input from "./Input";
import { CartContext } from "../store/cartContext";
import { medDataContext } from "../store/medDataContext";
import axios from "axios";

const Items = () => {
  const [quantityInput, setQuantityInput] = useState("1");
  const cartContext = useContext(CartContext);
  const medContext = useContext(medDataContext);
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

  useEffect(() => {
    const fetchMedData = async () => {
      try {
        const res = await axios.get(
          "https://crudcrud.com/api/84b6489fa9fb478995262a41fd7c6827/medData"
        );
        medContext.setMedItems(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMedData();
  }, []);

  return (
    <div className="grid grid-cols-1">
      {medContext.medItems.map((med) => (
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
                <li className="text-sm text-teal-950">
                  {" "}
                  Quantity Available : {med.quantityLeft}
                </li>
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
                      max: med.quantityLeft,
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
                    medContext.updateQuantity(med.id, quantityInput, "minus");
                    // console.log(medContext.medItems)
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

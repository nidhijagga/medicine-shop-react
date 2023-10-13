import React, { useState, createContext } from "react";
import { medicineData } from "../components/Constants";
import axios from "axios";

export const medDataContext = createContext();

export const MedDataProvider = (props) => {
  const [medItems, setMedItems] = useState([]);

  const addMedData = async (med) => {
    try {
      // Update the local state first
      setMedItems((prevData) => [...prevData, med]);
      
      // Then make the POST request
      await axios.post("https://crudcrud.com/api/84b6489fa9fb478995262a41fd7c6827/medData", med);
    } catch (error) {
      console.error("Error posting data:", error);
      // Handle the error appropriately, e.g., show a message to the user.
    }
  };

  const updateQuantity = (id, value, action) => {
    // Find the item in medItems based on id
    const updatedMedItems = medItems.map((item) => {
      if (item.id === id) {
        if (action === "add") {
          return { ...item, quantityLeft: item.quantityLeft + value };
        } else if (action === "minus" && item.quantityLeft > 0) {
          return { ...item, quantityLeft: item.quantityLeft - value };
        }
      }
      return item;
    });

    // Update medItems with the updated quantity
    setMedItems(updatedMedItems);
  };

  return (
    <medDataContext.Provider value={{ medItems, updateQuantity, addMedData, setMedItems}}>
      {props.children}
    </medDataContext.Provider>
  );
};

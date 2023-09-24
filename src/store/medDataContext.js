import React, { useState, createContext } from "react";
import { medicineData } from "../components/Constants";
export const medDataContext = createContext();

export const MedDataProvider = (props) => {
  const [medItems, setMedItems] = useState(medicineData);

  return (
    <medDataContext.Provider
      value={{ medItems, setMedItems }}
    >
      {props.children}
    </medDataContext.Provider>
  );
};

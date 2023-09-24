import React, {useState, useContext} from "react";
import Card from "./Card";
import Input from "./Input";
import { medDataContext } from "../store/medDataContext";
const Form = () => {
  // Create state variables for each input
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const medContext = useContext(medDataContext);
  const handleNameChange = (event) => {
    // Update the 'name' state when the input changes
    setName(event.target.value);
  };

  const handleAddBtn = (e) => {
    e.preventDefault();
    // Add new medicine to list of medicines
    let data={
      id : Math.random(),
      name : name,
      description: description ,
      price  : parseInt(price),
      quantity : quantity
    }
    medContext.setMedItems((previousItems)=> [...previousItems, data])
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can access the values of 'name', 'description', 'price', and 'quantity' state variables
    console.log("Name:", name);
    console.log("Description:", description);
    console.log("Price:", price);
    console.log("Quantity:", quantity);

    // You can perform further actions, like sending the data to an API or processing it as needed
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mx-1">
        <div className="flex-grow">
          <Input
            label="Name"
            input={{
              id: "name",
              type: "string",
              value: name, // Set the value from the 'name' state
              onChange: handleNameChange, // Call the handleNameChange function on input change
            }}
          />
        </div>

        {/* Add more fields here */}
        <div className="flex-grow">
          <Input
            label="Description"
            input={{
              id: "description",
              type: "text",
              value: description,
              onChange: (event) => setDescription(event.target.value), // Similar to handleNameChange
            }}
          />
        </div>

        <div className="flex-grow">
          <Input
            label="Price"
            input={{
              id: "price",
              type: "number",
              value: price,
              onChange: (event) => setPrice(event.target.value),
            }}
          />
        </div>

        <div className="flex-grow">
          <Input
            label="Quantity Available"
            input={{
              id: "quantity",
              type: "number",
              value: quantity,
              onChange: (event) => setQuantity(event.target.value),
            }}
          />
        </div>

        <div className="flex-grow flex items-center justify-center">
          <button
            type="submit"
            className="px-2 py-1 text-sm bg-teal-900 text-white rounded-md hover:bg-teal-300 hover:text-teal-900"
            onClick={handleAddBtn}
          >
            Add
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Form;

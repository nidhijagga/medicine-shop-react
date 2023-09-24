import React from "react";

const Input = (props) => {
  return (
    <div className="mb-2">
      <label htmlFor={props.input.id} className="block font-semibold text-teal-700 mb-2">
        {props.label}
      </label>
      <input
        {...props.input}
        className="border rounded px-3 w-32 text-black-700 focus:outline-none focus:ring focus:border-teal-300"
      />
    </div>
  );
};

export default Input;

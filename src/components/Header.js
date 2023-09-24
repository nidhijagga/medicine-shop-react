import React from "react";
import CartButton from "./CartButton";
import Items from "./Items";

const Header = () => {
  return (
    <div>
      <header className="bg-teal-100 text-white py-4 relative">
        <div
          className="w-full h-44 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1300036753/photo/falling-antibiotics-healthcare-background.jpg?s=2048x2048&w=is&k=20&c=80gw29ApqnKcW_isUBdO_hrE6aEMk5Hxf0CfdH3V6_c=')`, // Use a placeholder image for testing
          }}
        ></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-between items-center container mx-auto">
          <div className="text-2xl font-serif text-white">
            Medicine Shop
          </div>
          <CartButton />
        </div>
      </header>
    </div>
  );
};

export default Header;

// dùng useState để quản lí trạng thái

import React, { useState } from "react";

const NavBar = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleClick = (value: number) => {
    setActiveButton(value);
  };

  return (
    <div>
      <button
        className="p-5"
        style={{
          backgroundColor: activeButton === 1 ? "blue" : "gray",
          marginRight: "10px",
        }}
        onClick={() => handleClick(1)}
      >
        Button 1
      </button>
      <button
        name="2"
        style={{
          backgroundColor: activeButton === 2 ? "blue" : "gray",
          marginRight: "10px",
        }}
        onClick={() => handleClick(2)}
      >
        Button 2
      </button>
      <button
        name="3"
        style={{
          backgroundColor: activeButton === 3 ? "blue" : "gray",
          marginRight: "10px",
        }}
        onClick={() => handleClick(3)}
      >
        Button 3
      </button>
      <button
        name="4"
        style={{
          backgroundColor: activeButton === 4 ? "blue" : "gray",
          marginRight: "10px",
        }}
        onClick={() => handleClick(4)}
      >
        Button 4
      </button>
    </div>
  );
};

export default NavBar;

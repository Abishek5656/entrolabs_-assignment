import React from "react";

const MenuList = ({ medicine, handleSelectMedicine }) => {
  const { name, label, manufacturer, price, quantity, skuid, type } = medicine;
  return (
    <div
            className="px-1 rounded hover:cursor-pointer hover:bg-slate-50"
          
            onClick={() => handleSelectMedicine(medicine)}
          >
            <h1 className="text-lg font-semibold">{name}</h1>
            <div className="flex gap-2 justify-between items-center">
              <p>{manufacturer}</p>|
              <span className="text-blue-600">{label}</span>|
              <p>MRP {price}</p>
            </div>
            <hr className="mt-1" />
          </div>
  );
};

export default MenuList;

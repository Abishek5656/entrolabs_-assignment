import React, { memo } from "react";
import PropTypes from "prop-types";

const MenuList = ({ medicine, handleSelectMedicine }) => {
  const { name, label, manufacturer, price, skuid } = medicine;
  return (
    <div
      className="px-1 rounded hover:cursor-pointer hover:bg-slate-50"
      onClick={() => handleSelectMedicine(medicine)}
    >
      <h1 className="text-lg font-semibold">{name}</h1>
      <div className="flex gap-1 justify-between items-center">
        <p>{manufacturer}</p>|
        <span className="text-blue-600">{label}</span>|
        <p>MRP{price}</p>
      </div>
      <hr className="mt-1 border-2 border-green-600 border-solid" />
    </div>
  );
};

MenuList.propTypes = {
  medicine: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    skuid: PropTypes.string.isRequired,
  }).isRequired,
  handleSelectMedicine: PropTypes.func.isRequired,
};

export default memo(MenuList);


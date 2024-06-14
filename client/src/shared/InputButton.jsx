import React, { memo } from "react";

const InputButton = ({ name, label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="font-bold">{label}</label>
      <input
        name={name}
        className="appearance-none block mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        type={type}
        min={0}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default memo(InputButton);

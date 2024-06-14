import React, { memo } from "react";
import MenuList from "./MenuList.jsx";
import { v4 as uuidv4 } from "uuid";

const Modal = ({ queryData, handleSelectMedicine }) => {
  return (
    <div className="shadow-2xl absolute top-20 z-30 w-full max-h-44 overflow-scroll bg-gray-200 space-y-4 p-1 rounded">
      {queryData?.length > 0 ? (
        queryData.map((medicine) => (
          <MenuList
            medicine={medicine}
            key={uuidv4()}
            handleSelectMedicine={handleSelectMedicine}
          />
        ))
      ) : (
        <p>No results</p>
      )}
    </div>
  );
};

export default memo(Modal);

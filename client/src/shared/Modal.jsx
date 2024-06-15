import React, { memo } from "react";
import MenuList from "./MenuList.jsx";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Modal = ({ queryData, handleSelectMedicine, setModel, name }) => {
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
        <button onClick={()=> setModel(false)}>
          Create {`${name}`}
        </button>
      )}
    </div>
  );
};

export default memo(Modal);

Modal.propTypes = {
  handleSelectMedicine:PropTypes.func.isRequired,
  setModel:PropTypes.func.isRequired,
  name:PropTypes.string.isRequired
};

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TableList } from "../shared/index.js"
import useFetchData  from "../hooks/useFetchData.js";

const Medicines = () => {
 
  const [query, setQuery] = useState("");
  const { listOfRecords } = useFetchData();

  return (
    <div className="h-screen flex flex-col justify-center w-full sm:max-w-xl mx-auto px-2">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="appearance-none mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
         placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />

      <div className="flex flex-row justify-between items-center my-5">
        <h1 className="text-center font-bold">List of Records</h1>
        <Link
          to={"/form"}
          className="group relative w-[90px] h-[50px] flex justify-center py-2
       px-4 border border-transparent
       text-sm font-medium rounded-md text-white
      bg-blue-600 hover:bg-blue-700"
        >
          Add Medicine
        </Link>
      </div>

      {/* Table*/}
      <TableList listOfRecords={listOfRecords} query={query}/>
     
    </div>
  );
};

export default Medicines;

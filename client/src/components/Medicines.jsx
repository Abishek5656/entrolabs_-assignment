import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TableList, Title } from "../shared/index.js"
import useFetchData  from "../hooks/useFetchData.js";

const Medicines = () => {
 
  const [query, setQuery] = useState("");
  const { listOfRecords } = useFetchData();
  

  return (
    <div className="flex flex-col border border-red-900 border-solid h-full w-full px-4">
      {/* <div className="flex flex-row justify-between items-center my-5">
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
      </div> */}


      <div className="mt-2 flex justify-between">
        <Title title="List Of Records"/>
        <div className="flex justify-between items-center gap-3">
           <input  placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
        className="appearance-none mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm
         placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
           <Link to={"/form"} className="py-1 px-1 text-center border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            New Sku
           </Link>
        </div>
      </div>

      <TableList listOfRecords={listOfRecords} query={query} />
     
    </div>
  );
};

export default Medicines;

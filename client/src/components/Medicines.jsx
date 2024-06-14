import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TableList, Title } from "../shared/index.js";
import useFetchData from "../hooks/useFetchData.js";
import { IoMdAdd } from "react-icons/io";

const Medicines = () => {
  const [query, setQuery] = useState("");
  const { listOfRecords } = useFetchData();

  return (
    <div className="flex flex-col h-full w-full px-5">
      <div className="mt-2 flex justify-between">
        <Title title="List Of Records" />

        <div className="flex items-center gap-2">
          <input
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm
         placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />

          <Link
            to={"/form"}
            className="flex items-center py-2 px-3 border border-transparent text-sm rounded-md text-white bg-blue-700 hover:bg-blue-500"
          >
            <IoMdAdd size={20} />
            New Sku
          </Link>
        </div>
      </div>

      <TableList listOfRecords={listOfRecords} query={query} />
    </div>
  );
};

export default Medicines;

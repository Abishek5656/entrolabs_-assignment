import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListofMedicine = () => {
  const [listOfRecords, setListOfRecords] = useState([]);
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_ENDPOINT}/api/v1/medicine/getrecords`
      );
      setListOfRecords(response?.data?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

      {/* List of medicine */}
      <div>
        {listOfRecords.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Manufacturer</th>
                <th>SKU Label</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {listOfRecords
                .filter((medicine) =>
                  medicine.name.toLowerCase().includes(query.toLowerCase())
                )
                .map((medicine) => {
                  const {
                    name,
                    manufacturer,
                    price,
                    skuLabel,
                    quantity,
                    skuId,
                  } = medicine;
                  return (
                    <tr key={skuId}>
                      <td>{name}</td>
                      <td>{manufacturer}</td>
                      <td>{skuLabel}</td>
                      <td>{quantity}</td>
                      <td>{price}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          <p>No records available.</p>
        )}
      </div>
    </div>
  );
};

export default ListofMedicine;

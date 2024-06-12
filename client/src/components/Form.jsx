import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Title from "./Title.jsx";
import MenuList from "./MenuList.jsx";
import { toast } from "react-toastify";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    manufacturer: "",
    skuType: "",
    skuId: "",
    skuLabel: "",
    composition: "",
    quantity: "",
    price: "",
  });
  const [openModel, setModel] = useState(false);
  const [queryData, setQueryDate] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.91.care/pharmap/new/search.php?q=${formData?.name}`
      );
      setQueryDate(response?.data?.sku);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    let timeout;
    if (formData.name) {
      timeout = setTimeout(() => {
        getData();
      }, 50);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [formData.name]);

  const handleSelectMedicine = (medicine) => {
    const { name, manufacturer, type, skuid, composition, price, quantity } =
      medicine;
    setModel(false);
    setFormData({
      name,
      manufacturer,
      skuType: type,
      skuId: skuid,
      skuLabel: "",
      composition,
      price,
      quantity,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_ENDPOINT,
        formData
      );
      toast.success(response?.data?.data);
      setFormData({
        name: "",
        manufacturer: "",
        skuType: "",
        skuId: "",
        skuLabel: "",
        composition: "",
        quantity: "",
        price: "",
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-2xl h-full flex flex-col m-auto p-2">
      <Title title="New Sku" />
      <form
        className="mt-5 h-full border-solid space-y-6"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div className="flex flex-col relative">
          <label className="font-bold">Name</label>
          <input
            name="name"
            className=" appearance-none mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            type="text"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setModel(true)}
          />
        </div>

        {openModel ? (
          queryData?.length > 0 ? (
            <div className="shadow-xl absolute top-22 z-30 max-w-2xl h-[250px] overflow-scroll bg-gray-200 space-y-6 px-2 py-1 rounded">
              {queryData.map((medicine) => {
                return (
                  <MenuList
                    medicine={medicine}
                    key={uuidv4()}
                    handleSelectMedicine={handleSelectMedicine}
                  />
                );
              })}
            </div>
          ) : null
        ) : null}

        {/* Manufacturer */}
        <div className=" flex flex-col">
          <label className="font-bold">Manufacturer</label>
          <input
            name="manufacturer"
            className="appearance-none mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            type="text"
            value={formData.manufacturer}
            onChange={handleChange}
          />
        </div>

        {/* SKU Type */}
        <div className="flex flex-col">
          <label className="font-bold">SKU Type</label>
          <select
            className="appearance-none block mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={formData.skuType}
            onChange={handleChange}
            name="skuType"
          >
            <option value=""></option>
            <option value="allopathy">allopathy</option>
            <option value="otc">otc</option>
            <option value="fmcg">fmcg</option>
          </select>
        </div>

        {/* SKUID */}
        <div className=" flex flex-col">
          <label className="font-bold">SKUID</label>
          <input
            name="skuId"
            className="appearance-none block mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            type="text"
            value={formData.skuId}
            onChange={handleChange}
          />
        </div>

        {/* SKU Label */}

        <div className="flex flex-col">
          <label className="font-bold">SKU Label</label>
          <input
            name="skuLabel"
            className="appearance-none block mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            type="text"
            value={formData.skuLabel}
            onChange={handleChange}
          />
        </div>

        {/* Composition */}
        <div className=" flex flex-col">
          <label className="font-bold">Composition</label>
          <input
            name="composition"
            className="appearance-none block mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            type="text"
            value={formData.composition}
            onChange={handleChange}
          />
        </div>

        {/* Quantity in Package */}

        <div className=" flex flex-col">
          <label className="font-bold">Quantity in Package</label>
          <input
            name="quantity"
            className="appearance-none block mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            type="type"
            placeholder="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>

        {/* Price */}
        <div className=" flex flex-col">
          <label className="font-bold">Price(MRP)</label>
          <input
            name="price"
            className="appearance-none block mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            type="text"
            placeholder="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

import React, { Fragment, useMemo, useEffect, useState } from "react";
import InputButton from "../shared/InputButton.jsx";
import Model from "../shared/Modal.jsx";
import axios from "axios";
import Title from "./Title.jsx";
import { toast } from "react-toastify";
import { RxCrossCircled } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.91.care/pharmap/new/search.php?q=${formData?.name}`
        );
        setQueryDate(response?.data?.sku);
       console.log(response?.data?.sku)
      } catch (error) {
        toast.error(error.message);
      }
    };

    getData();
  }, [formData.name]);

  const handleSelectMedicine = (medicine) => {
    console.log("medicine");
    console.log(medicine);
    const {
      name,
      manufacturer,
      type,
      skuid,
      composition,
      price,
      quantity,
      label,
    } = medicine;
    setModel(false);
    setFormData({
      name,
      manufacturer,
      skuType: type,
      skuId: skuid,
      skuLabel: label,
      composition,
      price,
      quantity,
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    // console.log("submit forma");
    // console.log(formData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_ENDPOINT}/api/v1/medicine/create`,
        formData
      );

      toast.success(response?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
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
    setLoading(false);

    navigate("/");
  };

  const handleRemoveText = () => {
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
    setModel(false);
  };

  return (
    <div className="max-w-2xl h-full flex flex-col mt-4 mx-3 sm:mx-auto p-2 border border-black-800 border-solid">
      <Title title="New Sku" />
      <form className="mt-5 h-full w-full space-y-5" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="flex flex-col relative">
          <label className="font-bold">Name</label>
          <div className="relative">
            <input
              name="name"
              className="appearance-none mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              type="text"
              placeholder="Enter at least 4 Characters"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setModel(true)}
            />
            {formData.name.length > 0 ? (
              <RxCrossCircled
                className="absolute top-5 right-3"
                size={15}
                onClick={handleRemoveText}
              />
            ) : null}
          </div>

          {openModel ? (
            <Model
            queryData={queryData}
              handleSelectMedicine={handleSelectMedicine}
            />
          ) : null}
        </div>

        {/* Manufacturer */}
        <InputButton
          name="manufacturer"
          label="Manufacturer"
          type="text"
          placeholder=""
          value={formData.manufacturer}
          onChange={handleChange}
        />

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
            <option value="drug">drug</option>
          </select>
        </div>

        {/* SKUID */}

        <InputButton
          name="skuId"
          label="SKUID"
          type="text"
          placeholder=""
          value={formData.skuId}
          onChange={handleChange}
        />

        {/* SKU Label */}
        <InputButton
          name="skuLabel"
          label="SKU Label"
          type="text"
          placeholder=""
          value={formData.skuLabel}
          onChange={handleChange}
        />

        {/* Composition */}
        <InputButton
          name="composition"
          label="Composition"
          type="text"
          placeholder=""
          value={formData.composition}
          onChange={handleChange}
        />

        {/* Quantity in Package */}
        <InputButton
          name="quantity"
          label="Quantity in Package"
          type="number"
          placeholder="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />

        {/* Price */}
        <InputButton
          name="price"
          label="Price"
          type="number"
          placeholder="price"
          value={formData.price}
          onChange={handleChange}
        />

        <div>
          <button
            disabled={loading}
            type="submit"
            className={`group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white 
    ${loading ? "bg-blue-200" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {loading ? <p>Loading</p> : <p>Submit</p>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

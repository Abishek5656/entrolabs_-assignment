import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import axios from 'axios';

const useFetchData = (url, formDataName) => {

  const [queryData, setQueryData] = useState([]);
  const [listOfRecords, setListOfRecords] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}?q=${formDataName}`);
        setQueryData(response?.data?.sku);
        console.log(response?.data?.sku)
      } catch (error) {
        toast.error(error.message);
      }
    };

    if (formDataName) {
      fetchData();
    }
    return () => {
    
    };
  }, [url, formDataName]);


  useEffect( () => {

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

    fetchData();

  }, [])

  return { queryData,listOfRecords };
};

export default useFetchData;

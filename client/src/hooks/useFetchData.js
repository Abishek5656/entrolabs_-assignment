import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import axios from 'axios';

const useFetchData = (url, formDataName) => {

  const [queryData, setQueryData] = useState([]);
  
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

    // Cleanup function if needed
    return () => {
      // Cleanup code here if needed
    };
  }, [url, formDataName]);

  return { queryData };
};

export default useFetchData;

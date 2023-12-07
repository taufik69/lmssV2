import { useState, useEffect } from "react";
import axios from "axios";
const useFetchAPI = (API) => {
  const [fetchData, setfetchData] = useState([]);
  useEffect(() => {
    const responseData = async () => {
      try {
        const GetData = await axios.get(API);

        setfetchData(GetData);
      } catch (error) {
        console.log(error);
      }
    };
    responseData();
  }, [API]);

  return fetchData ? fetchData : null;
};

export default useFetchAPI;

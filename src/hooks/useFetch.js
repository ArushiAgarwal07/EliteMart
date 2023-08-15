import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";

const useFetch =  (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // We've used populate to get all attributes from db including imgs and then we're filtering wrt type which is passes as prop in home page
        //We;ve made makeRequest.js file to prevent writing  long endpoints again and again
        setLoading(true);
        const res = await makeRequest.get(url);
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return {data, loading, error}
};
 export default useFetch
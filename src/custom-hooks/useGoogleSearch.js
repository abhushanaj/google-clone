import { useState, useEffect } from "react";
import axios from "axios";

/* Keys */
import { API_KEY, SEARCH_ID } from "../keys";

const useGoogleSearch = (searchTerm) => {
  const [result, setResult] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/customsearch/v1",
          {
            params: {
              key: API_KEY,
              cx: SEARCH_ID,
              q: searchTerm,
            },
          }
        );
        setResult(response.data);
      } catch (err) {
        setResult(null);
        console.log("Error while Fetching!", err.response);
      }
    }

    fetchData();
  }, [searchTerm]);

  return { result };
};

export default useGoogleSearch;

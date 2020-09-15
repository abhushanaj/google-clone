import { useState, useEffect } from "react";
import axios from "axios";

/* Keys */
// import { API_KEY, SEARCH_ID } from "../keys";
import sampleResponse from "../sampleResponse";

const useGoogleSearch = (searchTerm) => {
  const [response, setResult] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/customsearch/v1",
          {
            params: {
              key: process.env.REACT_APP_API_KEY,
              cx: process.env.REACT_APP_ID,
              q: searchTerm,
            },
          }
        );
        setResult(response.data);
      } catch (err) {
        setResult(sampleResponse);
        // console.log("Error Conditions triggered!");
      }
    }

    fetchData();
  }, [searchTerm]);

  return { response };
};

export default useGoogleSearch;

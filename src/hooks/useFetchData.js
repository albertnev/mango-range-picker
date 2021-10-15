import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setHasError(false);
      setIsLoading(true);

      try {
        const response = await fetch(url);
        const parsedData = await response.json();
        setData(parsedData);
      } catch (error) {
        setHasError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, isLoading, hasError };
};

export default useFetchData;

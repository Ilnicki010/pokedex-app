import { useState, useEffect } from 'react';
import Axios from 'axios';
import { SERVER_ERROR_MESSAGE } from '../constants/index';

const usePokemonApi = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ value: false, message: '' });
  useEffect(() => {
    const fetchData = async () => {
      setError({ value: false });
      setIsLoading(true);
      try {
        const result = await Axios(url);
        setData(result.data);
      } catch (err) {
        setError({ value: true, message: SERVER_ERROR_MESSAGE });
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
  return [{ data, isLoading, error }, setUrl];
};

export default usePokemonApi;

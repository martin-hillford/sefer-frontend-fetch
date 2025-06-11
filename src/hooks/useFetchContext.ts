import { FetchContext } from 'context/FetchContext';
import { useContext } from 'react';

export const useFetchContext = () => useContext(FetchContext);

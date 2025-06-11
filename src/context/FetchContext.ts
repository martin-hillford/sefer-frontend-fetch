import { createContext } from "react";
import { FetchContext as Context } from 'types/FetchContext';

export const FetchContext = createContext<Context>(undefined as unknown as Context);

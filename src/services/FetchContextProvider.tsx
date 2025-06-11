import { FetchContext as Context } from 'context/FetchContext';
import { ReactNode } from 'react';
import { FetchContext } from 'types/FetchContext';

export const FetchContextProvider = (props : { context: FetchContext, children: ReactNode}) => {
  const { children, context } = props;
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

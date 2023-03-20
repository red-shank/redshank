import { createContext, PropsWithChildren, useContext } from 'react';
import axios, { CreateAxiosDefaults, AxiosInstance } from 'axios';

const QueryContext = createContext<{ instance: AxiosInstance }>({
  instance: axios.create(),
});

export const QueryProvider = ({
  children,
  config = {},
}: PropsWithChildren<{
  config?: CreateAxiosDefaults<any>;
}>) => {
  const internalInstance = axios.create(config);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <QueryContext.Provider
      value={{
        instance: internalInstance,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};

export const useQueryInstance = () => useContext(QueryContext).instance;

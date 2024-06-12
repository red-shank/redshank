import { createContext, ReactNode, useContext, useMemo } from 'react';

export interface ComponentProps {
  path: string;
  key: string;
  name: string;
}

export const ComponentContext = createContext<ComponentProps[]>([]);

interface ComponentProviderProps {
  children: ReactNode;
  items: ComponentProps[];
}

export const ComponentProvider = ({
  children,
  items
}: ComponentProviderProps) => {
  return (
    <ComponentContext.Provider value={items}>
      {children}
    </ComponentContext.Provider>
  );
};

export const useComponent = (key: string) => {
  const items = useContext(ComponentContext);

  const previousComponent = useMemo(() => {
    const index = items.findIndex((item) => item.key === key);

    if (index === 0) return null;
    if (index !== -1) {
      return items[index - 1];
    }
    return null;
  }, [items, key]);

  const currentComponent = useMemo(() => {
    const index = items.findIndex((item) => item.key === key);

    if (index === 0) return null;
    if (index !== -1) {
      return items[index];
    }
    return null;
  }, [items, key]);

  const nextComponent = useMemo(() => {
    const index = items.findIndex(
      (item) => item.key.toLowerCase() === key.toLowerCase()
    );

    if (index === items.length - 1) return null;
    if (index !== -1) {
      return items[index + 1];
    }
    return null;
  }, [items, key]);

  return { items, nextComponent, previousComponent, currentComponent };
};

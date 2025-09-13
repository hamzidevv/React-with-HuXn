import { createContext, useState, type ReactNode } from "react";

interface MyContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

interface MyProviderProps {
  children: ReactNode;
}

export const MyContext = createContext<MyContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

const MyProvider = ({ children }: MyProviderProps) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;

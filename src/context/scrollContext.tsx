import { createContext, useRef, useState } from "react";

export const ScrollProvider = createContext<any>({
  ref: null,
  handleClick: () => {},
});
const ScrollContextProvider = ({ children }: any) => {
  const ref = useRef<any>(null);
  const [id, setId] = useState<any>();

  const handleClick: any = (route: string) => {
    // @ts-ignore

    route &&
      document?.getElementById(route)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ScrollProvider.Provider value={{ ref, handleClick, setId, id }}>
      {children}
    </ScrollProvider.Provider>
  );
};
export default ScrollContextProvider;

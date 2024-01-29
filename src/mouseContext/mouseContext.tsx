import React, { createContext, useState } from "react";
import { CURSOR_TYPE } from "../component/cursor-pointer/cursor-type.helper";

export const MouseContext = createContext<any>({
  cursorType: CURSOR_TYPE.DOTCURSOR,
  cursorChangeHandler: () => {},
});

const MouseContextProvider: React.FC<any> = ({ children }) => {
  const [cursorType, setCursorType] = useState<string>(CURSOR_TYPE.DOTCURSOR);

  const cursorChangeHandler = (cursorType: string) => {
    setCursorType(cursorType);
  };

  const contextValue: any = {
    cursorType: cursorType,
    cursorChangeHandler: cursorChangeHandler,
  };

  return (
    <MouseContext.Provider value={contextValue}>
      {children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;

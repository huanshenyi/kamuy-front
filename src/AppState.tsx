import React, { useState } from "react";

interface AppStaateValue {
  userId: number;
  username: string;
}

const defaultContextValue: AppStaateValue = {
  userId: 1,
  username: "kamuy",
};
export const appContext = React.createContext(defaultContextValue);
// export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStaateValue>>|undefined>(undefined)

export const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(defaultContextValue);
  return (
    <appContext.Provider value={state}>{props.children}</appContext.Provider>
  );
};

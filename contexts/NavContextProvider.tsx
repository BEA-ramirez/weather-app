import React, { createContext, useState } from "react";
import { useContext } from "react";

interface navBarContextType {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

interface NavbarContextType {
  children: React.ReactNode;
}

const NavBarContext = createContext<navBarContextType>(null!);

export function useNavBarContext() {
  return useContext(NavBarContext);
}

export default function NavContextProvider({ children }: NavbarContextType) {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <NavBarContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </NavBarContext.Provider>
  );
}

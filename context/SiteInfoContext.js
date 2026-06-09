"use client";

import { createContext, useState } from "react";

export const SiteInfoContext = createContext();

export const SiteInfoProvider = ({ children }) => {
  const [siteInfo, setSiteInfo] = useState({});

  return (
    <SiteInfoContext.Provider value={{ siteInfo, setSiteInfo }}>
      {children}
    </SiteInfoContext.Provider>
  );
};
import React from 'react';

export const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const value = {};
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

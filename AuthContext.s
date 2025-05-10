import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Placeholder logic, you'd replace with backend request
    if (email === 'test@example.com' && password === 'password') {
      setUser({ email });
      return true;
    }
    return false;
  };

  const signup = (name, email, password) => {
    // Placeholder signup logic
    setUser({ name, email });
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

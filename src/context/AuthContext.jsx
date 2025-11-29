/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import { getUsers, createUser } from "../api/users"; // ✅ importar desde api

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      getUsers().then(users => {
        const found = users.find(u => u.id === userId);
        if (found) setUser(found);
      });
    }
  }, []);

  const login = async (email, password) => {
    const users = await getUsers();
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      localStorage.setItem("userId", found.id);
      setUser(found);
      return true;
    }
    return false;
  };

  const register = async (userData) => {
    const newUser = await createUser(userData);
    localStorage.setItem("userId", newUser.id);
    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    localStorage.removeItem("userId");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
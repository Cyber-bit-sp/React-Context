import { useState } from 'react';
import { UserContext } from './user-context';

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser({ ...userData, loggedIn: true });
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isLoggedIn: !!user,
  };

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
}

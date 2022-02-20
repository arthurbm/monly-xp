import React, {
  useState,
  createContext,
  SetStateAction,
  useContext
} from 'react';

type AuthContextProps = {
  token: string;
  setToken: React.Dispatch<SetStateAction<string>>;
};

type WithChildren = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as AuthContextProps);

function TokenProvider({ children }: WithChildren) {
  const [token, setToken] = useState('');

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useToken = (): AuthContextProps => useContext(AuthContext);

export default TokenProvider;

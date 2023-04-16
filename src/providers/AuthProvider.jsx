import React from 'react';
import { createContext } from 'react';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
      

    const authInfo = {
        
    }
    return (
       <AuthContext.Provider value={{displayName: "sayem"}}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
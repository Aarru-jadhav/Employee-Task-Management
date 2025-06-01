import React, { createContext, useState } from 'react'
import { getlocalstorage } from '../utils/Localstorage';
import { useEffect } from 'react';





export const AuthContext = createContext();



const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)
    
 useEffect(() => {
    const { employees, admin } = getlocalstorage();
    setUserData({ employees, admin });
}, []);


    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
// import React, { createContext, useState, useEffect } from 'react'
// import { getlocalstorage, setlocalstorage } from '../utils/Localstorage' // fix this import as per your actual export

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
    
//     const { employees,admin } = getlocalstorage();
//     setUserData({ employees,admin});
//   }, []);

//   return (
//     <AuthContext.Provider value={userData}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export default AuthProvider;

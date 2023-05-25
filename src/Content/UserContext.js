import React, { useState, createContext} from "react";

export const UserContext = createContext({});

const UsersProvider = ({children}) => {
    const [users, setUsers] = useState([
        {id: 101, name: 'Riya Das'},
        {id: 102, name: 'Prantho Mondol'}
    ])

    return <UserContext.Provider value={{users, setUsers}}>
        {children}
    </UserContext.Provider>
}

export default UsersProvider;
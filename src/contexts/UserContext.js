import React, { createContext } from "react";
import { useState } from "react";
export const UserContext = createContext()

export const UserProvider = (props) => {
    const [users, setUsers] = useState([
        {id: 1, name: "Bakir Khan", roll: 20, class: "Seven"},
        {id: 2, name: "Abudul Basir", roll: 2, class: "Nine"},
        {id: 3, name: "Sirajul Islam", roll: 3, class: "Ten"},
        {id: 4, name: "Jabed Karim", roll: 30, class: "Six"},
    ]);


    return (
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
};

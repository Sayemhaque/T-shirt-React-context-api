import { NavLink } from "react-router-dom";

import React from 'react';

const ActiveLink = ({ to, children }) => {
    return (
       

            <NavLink
                to={to}
                className={({ isActive}) =>isActive ? "active" : ""}>
                    {children}
            </NavLink>
       
    );
};

export default ActiveLink;
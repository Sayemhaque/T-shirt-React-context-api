import React, { createContext, useContext } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';

export const dataContext = createContext({})
const Main = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <dataContext.Provider value={{Id:"sayem" , name:"sayem"}}>
            <Header/>
            <Outlet/>
        </dataContext.Provider>
    );
};

export default Main;
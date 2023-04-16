import React, { useContext } from 'react';
import { dataContext } from '../components/Layout/Main';



const Contact = () => {
    const data = useContext(dataContext)
    console.log(data)
    return (
        <div>
          {data.length}
        </div>
    );
};

export default Contact;
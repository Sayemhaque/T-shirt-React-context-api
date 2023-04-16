import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../../Tshirt';
import { addToLocalStorage } from '../../utils/FakeDb';


const Home = () => {
    const tshirt = useLoaderData()
    const handleAddCart = (id) => {
      addToLocalStorage(id)
    }
    return (
       <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5 px-12'>
        {tshirt.map(shirt => <Tshirt key={shirt._id} shirt={shirt} handleAddCart={handleAddCart}/>)}
        </div>
        
    );
};

export default Home;
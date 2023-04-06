import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../../Tshirt';

const Home = () => {
    const tshirt = useLoaderData()
    console.log(tshirt)
    return (
        <div  className='grid grid-cols-3 gap-10 py-5 px-12'>
        {tshirt.map(shirt => <Tshirt key={shirt._id} shirt={shirt}/>)}
        </div>
    );
};

export default Home;
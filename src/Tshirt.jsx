import React from 'react';

const Tshirt = ({shirt}) => {
    const {picture,name,price} = shirt;
    return (
        <div >
            <div className='border-2 border-gray-300 rounded-md hover:shadow-2xl duration-500 cursor-pointer'>
                <div className='px-5 py-2'>
                <img className='w-[200px] h-[300px] mx-auto' src={picture} alt="" />
                <p className='text-2xl font-bold font-serif'>Name : {name}</p>
                <p className='font-bold text-xl py-2'>Price : {price}</p>
                 <button className='px-2 py-1 border border-black rounded-lg'>Add to cart</button>
                </div>
         
            </div>
        </div>
    );
};

export default Tshirt;
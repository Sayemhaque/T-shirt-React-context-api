import React, { useContext, useEffect, useState } from 'react';
import { getDataLocalStorage } from '../../utils/FakeDb';
import { dataContext } from '../Layout/Main';
import { AuthContext } from '../../providers/AuthProvider';

const OrderReview = () => {
  //  const {cart} = useContext(dataContext)
   const user = useContext(AuthContext)
   console.log(user)
  // let total = 0;
  // for(const product of cart){
  //   total = total + product.price * product.quantity
  // }
    return (
        <div className='max-w-[1000px] grid grid-cols-2 justify-items-center place-items-center
         mx-auto gap-10'>
         {/* <div className='space-y-6 divide-y  w-full'>
         {cart.map(cartProduct => 
           <div key={cartProduct._id} className='flex justify-between gap-10 mt-12'>
         <div>
         <h1 className='font-bold text-md'>{cartProduct.name}</h1>
            <img src={cartProduct.picture} className='w-10 h-10' alt="" />
         </div>
          
           <div>
           <p>Price : {cartProduct.price * cartProduct.quantity}$</p>
            <p>Quantity :{cartProduct.quantity}</p>
           </div>
           
           </div>
            )}
         </div > */}
         <div className='w-full'>
         {/* <p>Total : {total}$</p> */}
         </div>
         <p>{user && user.displayName}</p>
        </div>
    );
};

export default OrderReview;
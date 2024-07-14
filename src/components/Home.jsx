import React, { useEffect, useState } from 'react';
import Cardsdata from './cardData';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/action';

function Home() {

  let [menu, setMenu] = useState([]);

  const state = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()

  console.log("State : ", state)

  function addFood(item) {
    dispatch(addToCart(item))
  }

  useEffect(() => {
    setMenu(Cardsdata);
  }, []);

  return (
    <div className='w-full px-4'>
      <h1 className="text-4xl text-center font-semibold mb-4">Our Menu</h1>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {menu.map((item, index) => (
          <div key={index} className='p-2 hover:shadow-lg transition-shadow duration-300 mb-3'>
            <div className='w-full'>
              <div className='h-48 overflow-hidden'>
                <img className='w-full h-full object-cover' src={item.imgdata} alt="food" />
              </div>
              <h1 className='mt-2 font-bold text-xl text-slate-700'>{item.rname}</h1>
              <p className='mt-2 font-bold text-lg text-slate-700'>Price: {item.price}</p>
              <button
                onClick={() => { addFood(item) }}
                className='mt-2 w-full bg-blue-600 text-white p-2 rounded-md'>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeItem } from '../actions/action';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const state = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function rmvFood(id) {
    dispatch(removeItem(id));
  }

  function incrQuantity(id) {
    dispatch(incrementQuantity(id));
  }

  function dcrQuantity(id) {
    dispatch(decrementQuantity(id))
  }

  if (state.length === 0) {
    navigate('/');
    return null;
  }

  let total = state.reduce((a,b)=>a+(b.price*b.qnty),0)

  return (
    <div className="container mx-auto p-5">
      <center>
        <h1 className='text-3xl font-semibold mb-5'>Your Cart Items</h1>
        <h1 className='text-2xl font-semibold text-red-400'>Your Bill : ₹ {total}</h1>
      </center>
      <div className='w-full p-5'>
        {
          state.map((item, index) => (
            <div className='w-full md:w-2/3 mx-auto shadow-2xl border p-5 mb-3' key={index}>
              <center>
                <p className='text-xl mb-5'><strong>Restaurant: </strong>{item.rname}</p>
              </center>
              <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2 mb-4 md:mb-0'>
                  <img src={item.imgdata} alt="Restaurant" className="w-full h-auto border" />
                </div>
                <div className='md:w-1/2 md:pl-4 flex flex-col justify-between'>
                  <div className='mb-3'>
                    <p className='mb-3'><strong>Price: </strong>₹{(item.price)*(item.qnty)}</p>
                    <p className='mb-3'><strong>Dishes: </strong>{item.address}</p>
                  </div>
                  <div className='mb-3'>
                    <p className='mb-3'><strong>Rating: </strong>{item.rating}</p>
                    <p className='mb-3'><strong>Order Review: </strong>{item.somedata}</p>
                  </div>
                  <div className='flex items-center mb-3'>
                    <p className='mr-3'><strong>Quantity: </strong></p>
                    <button
                      onClick={() => dcrQuantity(item.id)}
                      className='border px-2 py-1 bg-slate-400 text-white'>-</button>
                    <span className='px-3'>{item.qnty}</span>
                    <button
                      onClick={() => incrQuantity(item.id)}
                      className='border px-2 py-1 bg-slate-400 text-white'>+</button>
                  </div>
                  <div>
                    <p><strong>Remove: </strong>
                      <button
                        onClick={() => rmvFood(item.id)}
                      >
                        <i className="fa-solid fa-trash ml-3 text-xl" style={{ color: 'red' }}></i>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Cart;

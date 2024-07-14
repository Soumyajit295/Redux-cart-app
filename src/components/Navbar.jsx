import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const state = useSelector((state)=>state.cartReducer)

    

    return (
        <div className='w-full bg-slate-800 p-5 flex justify-between sticky top-0'>
            <div>
                <Link to={'/'}>
                    <h1 className='text-2xl font-semibold text-teal-50'>MyShop</h1>
                </Link>
            </div>
            <div>
            <Link to={'/cart'}>
                    <i className="fa-solid fa-cart-shopping text-4xl mr-5" style={{ color: "#ffff" }}></i>
                </Link>
                <span className='absolute top-6 right-8 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2'>
                    {state.length}
                </span>
            </div>
        </div>
    );
}

export default Navbar;

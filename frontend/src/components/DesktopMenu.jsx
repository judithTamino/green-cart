import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const DesktopMenu = () => {
  const navigate = useNavigate();
  const { setShowUserLogin, user, setUser } = useAppContext();

  const logout = async () => {
    setUser(null);
    navigate('/');
  };

  return (
    <div className='hidden sm:flex items-center gap-8'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/products'>Products</NavLink>
      <NavLink to='/contact'>Contact</NavLink>

      <div className='hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full'>
        <input
          className='py-1.5 w-full bg-transparent outline-none placeholder-gray-500'
          type='text'
          placeholder='Search products'
        />
        <img src={assets.search_icon} alt='search icon' className='w-4 h-4' />
      </div>

      <div onClick={() => navigate('/cart')} className='relative cursor-pointer'>
        <img
          src={assets.cart_icon}
          alt='cart icon'
          className='w-6 opacity-80'
        />
        <button className='absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full'>
          3
        </button>
      </div>

      {!user ? (
        <button
          onClick={() => setShowUserLogin(true)}
          className='cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full'
        >
          Login
        </button>
      ) : (
        <div className='relative group'>
          <img src={assets.profile_icon} alt='profile image' className='w-10' />
          <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
            <li
              onClick={() => navigate('my-orders')}
              className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'
            >
              My Orders
            </li>
            <li
              onClick={logout}
              className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DesktopMenu;

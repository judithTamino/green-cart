import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const MobileMenu = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const { user, setUser, setShowUserLogin } = useAppContext();

  const logout = async () => {
    setUser(null);
    navigate('/');
  };
  return (
    <div
      className={`${
        open ? 'flex' : 'hidden'
      } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-40`}
    >
      <NavLink to='/' onClick={() => setOpen(false)}>
        Home
      </NavLink>
      <NavLink to='/products' onClick={() => setOpen(false)}>
        Products
      </NavLink>
      {user && (
        <NavLink to='/my-orders' onClick={() => setOpen(false)}>
          My Orders
        </NavLink>
      )}
      <NavLink to='/contact' onClick={() => setOpen(false)}>
        Contact
      </NavLink>

      {!user ? (
        <button
          onClick={() => {
            setOpen(false);
            setShowUserLogin(true);
          }}
          className='cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm'
        >
          Login
        </button>
      ) : (
        <button
          onClick={logout}
          className='cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm'
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default MobileMenu;

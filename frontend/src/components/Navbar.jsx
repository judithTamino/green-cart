import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className='flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all'>
      <NavLink to='/' onClick={() => setOpen(false)}>
        <img className='h-9' src={assets.logo} alt='logo' />
      </NavLink>

      {/* Desktop Menu */}
      <DesktopMenu />

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label='Menu'
        className='sm:hidden'
      >
        {/* Menu Icon SVG */}
        <img src={assets.menu_icon} alt='menu icon' />
      </button>

      {/* Mobile Menu */}
      <MobileMenu open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;

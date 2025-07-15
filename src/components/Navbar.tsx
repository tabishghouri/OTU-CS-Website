import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import csLogo from "../assets/images/computer-svgrepo-com.svg";

// CS Club Logo component
const CSLogo = () => (
  <Link to='/' className='flex items-center'>
    <img src={csLogo} alt='CS Club Logo' className='h-32 w-auto' />
  </Link>
);

// Dropdown menu component
interface DropdownProps {
  title: string;
  items: { name: string; path: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  return (
    <div className='nav-item group'>
      <Link to='#' className='flex items-center'>
        {title}
        <ChevronDown className='ml-1 h-4 w-4' />
      </Link>
      <div className='dropdown'>
        {items.map((item) => (
          <Link key={item.name} to={item.path} className='dropdown-item'>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Dropdown menu items
  const aboutItems = [
    { name: "Meet the Team", path: "/about/team" },
    { name: "Members", path: "/about/members" },
    { name: "History", path: "/about/history" },
  ];

  const resourcesItems = [
    { name: "Advice", path: "/resources/advice" },
    { name: "Services", path: "/resources/services" },
  ];

  return (
    <nav className='py-4 px-6 md:px-12 flex items-center justify-between relative z-10'>
      <CSLogo />

      {/* Mobile menu button */}
      <button
        className='md:hidden text-white focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          {isOpen ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          )}
        </svg>
      </button>

      {/* Desktop navigation */}
      <div className='hidden md:flex items-center space-x-2'>
        <Link to='/' className='nav-item'>
          Home
        </Link>
        <Dropdown title='About' items={aboutItems} />
        <Link to='/get-involved' className='nav-item'>
          Get Involved
        </Link>
        <Link to='/events' className='nav-item'>
          Events
        </Link>
        <Dropdown title='Resources' items={resourcesItems} />
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className='absolute top-full left-0 right-0 bg-csclub-dark border-t border-csclub-blue/30 md:hidden'>
          <div className='flex flex-col p-4 space-y-3'>
            <Link to='/' className='nav-item' onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <details className='group'>
              <summary className='nav-item list-none flex items-center cursor-pointer'>
                About
                <ChevronDown className='ml-1 h-4 w-4' />
              </summary>
              <div className='pl-4 pt-2 flex flex-col space-y-2'>
                {aboutItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className='dropdown-item'
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </details>
            <Link
              to='/get-involved'
              className='nav-item'
              onClick={() => setIsOpen(false)}
            >
              Get Involved
            </Link>
            <Link
              to='/events'
              className='nav-item'
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <details className='group'>
              <summary className='nav-item list-none flex items-center cursor-pointer'>
                Resources
                <ChevronDown className='ml-1 h-4 w-4' />
              </summary>
              <div className='pl-4 pt-2 flex flex-col space-y-2'>
                {resourcesItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className='dropdown-item'
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

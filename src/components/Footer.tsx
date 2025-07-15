import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, MessageSquare } from "lucide-react";
import CSLogo from "../assets/images/computer-svgrepo-com.svg";
const Footer: React.FC = () => {
  return (
    <footer className='border-t border-white/10 py-8 px-6 md:px-12'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <Link to='/' className='flex items-center mb-4'>
            <img src={CSLogo} alt='CS Club Logo' className='h-32 w-auto' />

            <span className='ml-2 text-xl font-bold'>CS Club</span>
          </Link>
          <p className='text-gray-400 text-sm'>
            Ontario Tech University's Student Computing Community
          </p>
        </div>

        <div>
          <h3 className='text-lg font-medium mb-3'>Quick Links</h3>
          <ul className='space-y-2'>
            <li>
              <Link
                to='/'
                className='text-gray-400 hover:text-csclub-blue transition-colors'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='text-gray-400 hover:text-csclub-blue transition-colors'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/get-involved'
                className='text-gray-400 hover:text-csclub-blue transition-colors'
              >
                Get Involved
              </Link>
            </li>
            <li>
              <Link
                to='/events'
                className='text-gray-400 hover:text-csclub-blue transition-colors'
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to='/resources'
                className='text-gray-400 hover:text-csclub-blue transition-colors'
              >
                Resources
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-medium mb-3'>Connect With Us</h3>
          <div className='flex space-x-4 mb-4'>
            <a
              href='https://instagram.com/otu.csclub'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
            >
              <Instagram size={20} />
              <span className='sr-only'>Instagram</span>
            </a>
            <a
              href='https://twitter.com/otucsclub'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
            >
              <Twitter size={20} />
              <span className='sr-only'>Twitter</span>
            </a>
            <a
              href='https://discord.com/invite/J9AyT8XADz'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
            >
              <MessageSquare size={20} />
              <span className='sr-only'>Discord</span>
            </a>
          </div>
          <p className='text-sm text-gray-400'>Email: ------------------</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Instagram, Twitter, MessageSquare } from "lucide-react";
import CSLogo from "../assets/logos/cslogo-transparent-background.png";

const Landing: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16 md:py-24 px-6 relative'>
      {/* Background patterns */}
      {/* <div className='absolute top-10 left-10 geometric-shape'>
        <svg width='100' height='100' viewBox='0 0 100 100' fill='none'>
          <rect x='0' y='0' width='80' height='80' fill='#153e75' />
        </svg>
      </div>
      <div className='absolute bottom-10 right-10 geometric-shape'>
        <svg width='60' height='60' viewBox='0 0 60 60' fill='none'>
          <rect x='0' y='0' width='60' height='60' fill='#f05c3b' />
        </svg>
      </div>
      <div className='absolute -left-20 top-1/3 geometric-shape opacity-70'>
        <svg width='300' height='300' viewBox='0 0 300 300' fill='none'>
          <path
            d='M150 0 C230 0 300 70 300 150 C300 230 230 300 150 300 C70 300 0 230 0 150 C0 70 70 0 150 0'
            fill='#1e88e5'
            fillOpacity='0.3'
          />
        </svg>
      </div>
      <div className='absolute -right-20 bottom-1/2 geometric-shape opacity-70'>
        <svg width='250' height='250' viewBox='0 0 250 250' fill='none'>
          <path
            d='M125 0 C194 0 250 56 250 125 C250 194 194 250 125 250 C56 250 0 194 0 125 C0 56 56 0 125 0'
            fill='#0d47a1'
            fillOpacity='0.3'
          />
        </svg>
      </div> */}

      {/* CS Club Logo */}
      <div className='mb-6'>
        <img src={CSLogo} alt='CS Club Logo' className='h-32 w-auto' />
      </div>

      {/* Club Name */}
      <h1 className='text-4xl md:text-5xl font-bold mb-4 text-white'>
        Computer Science Club
      </h1>

      {/* Club Description */}
      <p className='text-lg text-center text-gray-300 mb-8 max-w-2xl'>
        Ontario Tech University's Student Computing Community
      </p>

      {/* Social Media Links */}
      <div className='flex space-x-6'>
        <a
          href='https://www.instagram.com/otu.csclub/'
          target='_blank'
          rel='noopener noreferrer'
          className='social-icon'
        >
          <Instagram size={24} />
          <span className='sr-only'>Instagram</span>
        </a>
        <a
          href='https://twitter.com/otucsclub'
          target='_blank'
          rel='noopener noreferrer'
          className='social-icon'
        >
          <Twitter size={24} />
          <span className='sr-only'>Twitter</span>
        </a>
        <a
          href='https://discord.com/invite/J9AyT8XADz'
          target='_blank'
          rel='noopener noreferrer'
          className='social-icon'
        >
          <MessageSquare size={24} />
          <span className='sr-only'>Discord</span>
        </a>
      </div>
    </div>
  );
};

export default Landing;

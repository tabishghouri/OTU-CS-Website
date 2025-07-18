import React from "react";
import { Instagram, Twitter, MessageSquare } from "lucide-react";
import CSLogo from "../assets/logos/cslogo-transparent-background.png";
import "./Landing.css";

const Landing: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16 md:py-24 px-6 relative'>
      {/* CS Club Logo */}
      <div className='mb-6'>
        <img src={CSLogo} alt='CS Club Logo' className='cs-logo' />
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

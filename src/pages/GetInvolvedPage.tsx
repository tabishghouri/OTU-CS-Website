import React from "react";
import { Link } from "react-router-dom";

const GetInvolvedPage: React.FC = () => {
  return (
    <div className='min-h-screen py-12 px-6 md:px-12 max-w-7xl mx-auto'>
      <h1 className='text-4xl font-bold mb-6'>Get Involved</h1>

      <div className='space-y-8'>
        <div>
          <h2 className='text-2xl font-semibold mb-4'>Join Our Community</h2>
          <p className='text-gray-300 mb-4'>
            Becoming a part of the CS Club is easy! We welcome students from all
            backgrounds and experience levels. Whether you're a seasoned
            programmer or just starting your journey in computer science,
            there's a place for you in our community.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-black/20 p-6 rounded-md'>
            <h3 className='text-xl font-medium mb-3 text-csclub-blue'>
              Become a Member
            </h3>
            <p className='text-gray-300 mb-4'>
              Duis ut urna lacus. Nunc suscipit finibus ligula, et dictum lectus
              scelerisque ut. Proin nec mi ac lacus cursus elementum. Donec
              ornare nisl at sodales consectetur. Morbi varius elementum
              pellentesque.
            </p>
            <Link
              to='#'
              className='inline-block bg-csclub-blue text-white px-4 py-2 rounded-md hover:bg-csclub-teal transition-colors'
            >
              Sign Up
            </Link>
          </div>

          <div className='bg-black/20 p-6 rounded-md'>
            <h3 className='text-xl font-medium mb-3 text-csclub-blue'>
              Join Our Discord
            </h3>
            <p className='text-gray-300 mb-4'>
              Duis ut urna lacus. Nunc suscipit finibus ligula, et dictum lectus
              scelerisque ut. Proin nec mi ac lacus cursus elementum. Donec
              ornare nisl at sodales consectetur. Morbi varius elementum
              pellentesque.
            </p>
            <a
              href='https://discord.com/invite/J9AyT8XADz'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block bg-csclub-blue text-white px-4 py-2 rounded-md hover:bg-csclub-teal transition-colors'
            >
              Join Discord
            </a>
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-4'>
            Volunteer Opportunities
          </h2>
          <p className='text-gray-300 mb-4'>
            Duis ut urna lacus. Nunc suscipit finibus ligula, et dictum lectus
            scelerisque ut. Proin nec mi ac lacus cursus elementum. Donec ornare
            nisl at sodales consectetur. Morbi varius elementum pellentesque.
          </p>
          <div className='bg-black/20 p-6 rounded-md'>
            <h3 className='text-xl font-medium mb-3'>Available Positions</h3>
            <ul className='list-disc list-inside text-gray-300 space-y-2'>
              <li>Event Coordinators</li>
              <li>--------</li>
              <li>--------</li>
              <li>--------</li>
              <li>--------</li>
            </ul>
            <Link
              to='#'
              className='inline-block bg-csclub-blue text-white px-4 py-2 rounded-md hover:bg-csclub-teal transition-colors mt-4'
            >
              Apply to Volunteer
            </Link>
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-4'>
            Executive Team Applications
          </h2>
          <p className='text-gray-300 mb-4'>
            Duis ut urna lacus. Nunc suscipit finibus ligula, et dictum lectus
            scelerisque ut. Proin nec mi ac lacus cursus elementum. Donec ornare
            nisl at sodales consectetur. Morbi varius elementum pellentesque.
          </p>
          <p className='text-gray-300'>
            Duis ut urna lacus. Nunc suscipit finibus ligula, et dictum lectus
            scelerisque ut. Proin nec mi ac lacus cursus elementum. Donec ornare
            nisl at sodales consectetur. Morbi varius elementum pellentesque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedPage;

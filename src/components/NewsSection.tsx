import React from "react";
import { Link } from "react-router-dom";

const NewsSection: React.FC = () => {
  return (
    <div className='py-12 px-6 md:px-12'>
      <h2 className='text-3xl font-bold mb-4'>News</h2>
      <div className='mb-4'>
        <p className='mb-2'>
          Updates from our execs! See past news{" "}
          <Link
            to='/news'
            style={{ color: "#ECAD2D" }}
            className='hover:opacity-80 underline'
          >
            here
          </Link>
        </p>
      </div>
      <div className='space-y-4'>
        <div className='bg-black/20 p-6 rounded-md'>
          <h3 className='text-xl font-medium mb-2'>Fall Term Kickoff</h3>
          <p className='text-gray-300'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada faucibus leo posuere luctus. Aliquam malesuada lacinia
            nulla sit amet varius. Quisque id porttitor orci.
          </p>
          <p className='mt-2 text-sm text-gray-400'>Posted on May 26, 2026</p>
        </div>
        <div className='bg-black/20 p-6 rounded-md'>
          <h3 className='text-xl font-medium mb-2'>New Leadership Team</h3>
          <p className='text-gray-300'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada faucibus leo posuere luctus. Aliquam malesuada lacinia
            nulla sit amet varius. Quisque id porttitor orci.
          </p>
          <p className='mt-2 text-sm text-gray-400'>
            Posted on Month Date, Year
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;

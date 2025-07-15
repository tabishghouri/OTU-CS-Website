import React from "react";
import { Link } from "react-router-dom";

const EventsSection: React.FC = () => {
  return (
    <div className='py-12 px-6 md:px-12'>
      <h2 className='text-3xl font-bold mb-4'>Upcoming Events</h2>
      <div className='mb-4'>
        <p className='mb-2'>
          See past events{" "}
          <Link
            to='/events'
            style={{ color: "#ECAD2D" }}
            className='hover:opacity-80'
          >
            here
          </Link>
        </p>
      </div>
      <div className='bg-black/20 p-6 rounded-md'>
        <p className='text-gray-300'>
          There are no upcoming events right now. Please check back later!
        </p>
      </div>
    </div>
  );
};

export default EventsSection;

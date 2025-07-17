import React from "react";
import "animate.css";
import { Link } from "react-router-dom";
import img1 from "../assets/images/coding.jpg";
import img2 from "../assets/images/microsoft.jpg";
import img3 from "../assets/images/neural.jpg";
import img4 from "../assets/images/dayforce.jpg";
import "./EventsSection.css";

type Event = {
  title: string;
  imageUrl: string;
  link: string;
};

const events: Event[] = [
  {
    title: "Coding Contest, March 2026",
    imageUrl: img1,
    link: "https://www.youtube.com/",
  },
  {
    title: "Learn Azure with Microsoft Employee Amy Lee",
    imageUrl: img2,
    link: "https://www.youtube.com/",
  },
  {
    title: "Learn Neural Networks with Daniel Bourke",
    imageUrl: img3,
    link: "https://www.youtube.com/",
  },
  {
    title: "Meet Dayforce!",
    imageUrl: img4,
    link: "https://www.youtube.com/",
  },
];

const EventsSection: React.FC = () => {
  return (
    <div className='py-12 px-6 md:px-12'>
      <h2 className='text-3xl font-bold mb-4'>Events</h2>
      <div className='mb-4'>
        <p className='mb-2'>
          See past events{" "}
          <Link
            to='/news'
            style={{ color: "#ECAD2D" }}
            className='hover:opacity-80 underline'
          >
            here
          </Link>
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {events.map((event, index) => (
          <Link to={event.link} key={index} className='group block'>
            {/* Added overflow-hidden back to contain scaled image */}
            <div className='relative rounded-lg overflow-hidden'>
              <img
                src={event.imageUrl}
                alt={event.title}
                className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg'
              />

              {/* Changed to direct gradient classes and added group-hover scaling */}
              <div className='absolute inset-0 event-gradient-overlay'></div>

              <div className='absolute inset-0 flex items-center justify-center z-20 underline'>
                <span className='more-info-text animate__animated group-hover:animate__fadeInUp'>
                  MORE INFO
                </span>
              </div>
            </div>

            <div className='mt-2 text-white font-medium text-center'>
              {event.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsSection;

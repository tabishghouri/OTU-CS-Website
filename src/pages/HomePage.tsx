import React from "react";
import Landing from "../components/Landing";
import EventsSection from "../components/EventsSection";
import NewsSection from "../components/NewsSection";

const HomePage: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <Landing />
      <div className='w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent my-4 md:my-8 mx-auto max-w-7xl' />
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <EventsSection />
        <NewsSection />
      </div>
    </div>
  );
};

export default HomePage;

import React from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
}

const pastEvents: Event[] = [
  {
    id: 1,
    title: "Donec at eros eu enim mattis ullamcorper.",
    date: "May 26, 2026",
    location: "UA 1350",
    description:
      "Duis ut urna lacus. Nunc suscipit finibus ligula, et dictum lectus scelerisque ut. Proin nec mi ac lacus cursus elementum.",
  },
  {
    id: 2,
    title: "Donec at eros eu enim mattis ullamcorper.",
    date: "May 26, 2026",
    location: "Online (Google Meet)",
    description:
      "Duis ut urna lacus. Nunc suscipit finibus ligula, et dictum lectus scelerisque ut. Proin nec mi ac lacus cursus elementum.",
  },
  {
    id: 3,
    title: "Donec at eros eu enim mattis ullamcorper.",
    date: "May 26, 2026",
    location: "SHA",
    description:
      "Duis ut urna lacus. Nunc suscipit finibus ligula, et dictum lectus scelerisque ut. Proin nec mi ac lacus cursus elementum.",
  },
  {
    id: 4,
    title: "Donec at eros eu enim mattis ullamcorper.",
    date: "May 26, 2026",
    location: "Somewhere",
    description:
      "Duis ut urna lacus. Nunc suscipit finibus ligula, et dictum lectus scelerisque ut. Proin nec mi ac lacus cursus elementum.",
  },
];

const EventsPage: React.FC = () => {
  return (
    <div className='min-h-screen py-12 px-6 md:px-12 max-w-7xl mx-auto'>
      <h1 className='text-4xl font-bold mb-6'>Events</h1>

      <div className='mb-12'>
        <h2 className='text-2xl font-semibold mb-4'>Upcoming Events</h2>
        <div className='bg-black/20 p-6 rounded-md'>
          <p className='text-gray-300'>
            There are no upcoming events right now. Please check back later!
          </p>
        </div>
      </div>

      <div>
        <h2 className='text-2xl font-semibold mb-6'>Past Events</h2>
        <div className='space-y-6'>
          {pastEvents.map((event) => (
            <div key={event.id} className='bg-black/20 p-6 rounded-md'>
              <h3 className='text-xl font-medium mb-2'>{event.title}</h3>
              <div className='flex flex-wrap gap-x-6 gap-y-2 mb-3 text-sm text-gray-400'>
                <span>📅 {event.date}</span>
                <span>📍 {event.location}</span>
              </div>
              <p className='text-gray-300'>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;

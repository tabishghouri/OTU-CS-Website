import React from "react";

interface HistoryEvent {
  year: string;
  title: string;
  description: string;
}

const historyEvents: HistoryEvent[] = [
  {
    year: "2020",
    title: "Foundation",
    description:
      "Donec ornare nisl at sodales consectetur. Morbi varius elementum pellentesque.",
  },
  {
    year: "2023",
    title: "First Something",
    description:
      "Donec ornare nisl at sodales consectetur. Morbi varius elementum pellentesque.",
  },
];

const HistoryPage: React.FC = () => {
  return (
    <div className='min-h-screen py-12 px-6 md:px-12 max-w-7xl mx-auto'>
      <h1 className='text-4xl font-bold mb-6'>Our History</h1>
      <p className='text-lg text-gray-300 mb-10'>
        Include description of history of the club
      </p>

      <div className='relative'>
        {/* Timeline */}
        <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-csclub-blue/30 z-0'></div>

        <div className='space-y-12'>
          {historyEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex md:items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className='hidden md:block w-1/2'></div>

              {/* Year marker */}
              <div className='hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-10'>
                <div className='bg-csclub-dark border-4 border-csclub-blue rounded-full h-12 w-12 flex items-center justify-center'>
                  <span className='text-sm font-bold'>{event.year}</span>
                </div>
              </div>

              {/* Content */}
              <div
                className={`bg-black/20 p-6 rounded-md md:w-1/2 ${
                  index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                }`}
              >
                <h3 className='text-xl font-medium mb-2'>{event.title}</h3>
                <p className='text-gray-300'>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;

import React from "react";

const MembersPage: React.FC = () => {
  return (
    <div className='min-h-screen py-12 px-6 md:px-12 max-w-7xl mx-auto'>
      <h1 className='text-4xl font-bold mb-6'>Our Members</h1>
      <p className='text-lg text-gray-300 mb-8'>
        Duis ut urna lacus. Nunc suscipit finibus ligula, et dictum lectus
        scelerisque ut. Proin nec mi ac lacus cursus elementum. Donec ornare
        nisl at sodales consectetur. Morbi varius elementum pellentesque.
      </p>

      <div className='space-y-10'>
        <div>
          <h2 className='text-2xl font-semibold mb-4'>Member Demographics</h2>
          <div className='bg-black/20 p-6 rounded-md'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-csclub-blue mb-2'>
                  50+
                </div>
                <p className='text-gray-300'>Active Members</p>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-csclub-blue mb-2'>
                  25+
                </div>
                <p className='text-gray-300'>Different Programs</p>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-csclub-blue mb-2'>
                  50+
                </div>
                <p className='text-gray-300'>Events Per Year</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-4'>Member Benefits</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-black/20 p-6 rounded-md'>
              <h3 className='text-xl font-medium mb-3 text-csclub-blue'>
                Networking
              </h3>
              <p className='text-gray-300'>
                Donec ornare nisl at sodales consectetur. Morbi varius elementum
                pellentesque.
              </p>
            </div>
            <div className='bg-black/20 p-6 rounded-md'>
              <h3 className='text-xl font-medium mb-3 text-csclub-blue'>
                Skill Development
              </h3>
              <p className='text-gray-300'>
                Donec ornare nisl at sodales consectetur. Morbi varius elementum
                pellentesque.
              </p>
            </div>
            <div className='bg-black/20 p-6 rounded-md'>
              <h3 className='text-xl font-medium mb-3 text-csclub-blue'>
                Resources
              </h3>
              <p className='text-gray-300'>
                Donec ornare nisl at sodales consectetur. Morbi varius elementum
                pellentesque.
              </p>
            </div>
            <div className='bg-black/20 p-6 rounded-md'>
              <h3 className='text-xl font-medium mb-3 text-csclub-blue'>
                Leadership
              </h3>
              <p className='text-gray-300'>
                Donec ornare nisl at sodales consectetur. Morbi varius elementum
                pellentesque.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-4'>Member Spotlights</h2>
          <div className='bg-black/20 p-6 rounded-md'>
            <div className='space-y-6'>
              <div>
                <h3 className='text-xl font-medium mb-2'>
                  Random Name - 3rd Year CS
                </h3>
                <p className='text-gray-300 italic'>
                  "Donec ornare nisl at sodales consectetur. Morbi varius
                  elementum pellentesque."
                </p>
              </div>
              <div>
                <h3 className='text-xl font-medium mb-2'>
                  Random Name - 4th Year Software Engineering
                </h3>
                <p className='text-gray-300 italic'>
                  "Donec ornare nisl at sodales consectetur. Morbi varius
                  elementum pellentesque."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;

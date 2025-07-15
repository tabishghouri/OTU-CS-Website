import React from "react";

interface Service {
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    title: "Special Thing Number 1",
    description:
      "Curabitur turpis lectus, semper et sem eget, sollicitudin aliquet erat.",
    link: "#",
  },
  {
    title: "Special Thing Number 2",
    description:
      "Curabitur turpis lectus, semper et sem eget, sollicitudin aliquet erat.",
    link: "#",
  },
  {
    title: "Special Thing Number 3",
    description:
      "Curabitur turpis lectus, semper et sem eget, sollicitudin aliquet erat.",
    link: "#",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className='min-h-screen py-12 px-6 md:px-12 max-w-7xl mx-auto'>
      <h1 className='text-4xl font-bold mb-6'>Club Services</h1>
      <p className='text-lg text-gray-300 mb-10'>
        Acces to special things as a cs students
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
        {services.map((service, index) => (
          <div key={index} className='bg-black/20 p-6 rounded-md flex flex-col'>
            <div className='flex items-center mb-4'>
              <h3 className='text-xl font-medium ml-3'>{service.title}</h3>
            </div>
            <p className='text-gray-300 mb-4 flex-grow'>
              {service.description}
            </p>
            <a
              href={service.link}
              className='self-start inline-block text-csclub-blue hover:text-csclub-lightblue underline'
            >
              Learn more
            </a>
          </div>
        ))}
      </div>

      <div className='bg-black/20 p-6 rounded-md'>
        <h2 className='text-2xl font-semibold mb-4'>How to Access Services</h2>
        <ol className='list-decimal list-inside space-y-3 text-gray-300'>
          <li>-----------------------------</li>
          <li>-----------------------------</li>
          <li>-----------------------------</li>
          <li>-----------------------------</li>
        </ol>
        <div className='mt-6'></div>
      </div>
    </div>
  );
};

export default ServicesPage;

import React from "react";
import { Link } from "react-router-dom";

interface Resource {
  title: string;
  description: string;
  link: string;
}

const learningResources: Resource[] = [
  {
    title: "Introduction to Algorithms",
    description:
      "Curabitur turpis lectus, semper et sem eget, sollicitudin aliquet erat. Integer vestibulum aliquam leo non pellentesque.",
    link: "#",
  },
  {
    title: "Another Tutorial",
    description:
      "Curabitur turpis lectus, semper et sem eget, sollicitudin aliquet erat. Integer vestibulum aliquam leo non pellentesque.",
    link: "#",
  },
  {
    title: "Another Tutorial",
    description:
      "Curabitur turpis lectus, semper et sem eget, sollicitudin aliquet erat. Integer vestibulum aliquam leo non pellentesque.",
    link: "#",
  },
];

const careerResources: Resource[] = [
  {
    title: "Resume Review Guide",
    description:
      "Curabitur turpis lectus, semper et sem eget, sollicitudin aliquet erat. Integer vestibulum aliquam leo non pellentesque.",
    link: "#",
  },
  {
    title: "Another Work Tutorial",
    description:
      "Curabitur turpis lectus, semper et sem eget, sollicitudin aliquet erat. Integer vestibulum aliquam leo non pellentesque.",
    link: "#",
  },
  {
    title: "More Tutorials",
    description:
      "Curabitur turpis lectus, semper et sem eget, sollicitudin aliquet erat. Integer vestibulum aliquam leo non pellentesque.",
    link: "#",
  },
];

const ResourcesPage: React.FC = () => {
  return (
    <div className='min-h-screen py-12 px-6 md:px-12 max-w-7xl mx-auto'>
      <h1 className='text-4xl font-bold mb-6'>Resources</h1>

      <div className='space-y-12'>
        <div>
          <h2 className='text-2xl font-semibold mb-4'>Learning Resources</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {learningResources.map((resource, index) => (
              <div key={index} className='bg-black/20 p-6 rounded-md'>
                <h3 className='text-xl font-medium mb-2'>{resource.title}</h3>
                <p className='text-gray-300 mb-4'>{resource.description}</p>
                <Link
                  to={resource.link}
                  className='text-csclub-blue hover:text-csclub-lightblue underline'
                >
                  View Resource
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-4'>Career Resources</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {careerResources.map((resource, index) => (
              <div key={index} className='bg-black/20 p-6 rounded-md'>
                <h3 className='text-xl font-medium mb-2'>{resource.title}</h3>
                <p className='text-gray-300 mb-4'>{resource.description}</p>
                <Link
                  to={resource.link}
                  className='text-csclub-blue hover:text-csclub-lightblue underline'
                >
                  View Resource
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-4'>Club Services</h2>
          <div className='bg-black/20 p-6 rounded-md'>
            <h3 className='text-xl font-medium mb-3'>
              Resources Available to Members
            </h3>
            <ul className='list-disc list-inside text-gray-300 space-y-2 mb-4'>
              <li>---------------------</li>
              <li>---------------------</li>
              <li>---------------------</li>
              <li>---------------------</li>
            </ul>
            <Link
              to='/get-involved'
              className='inline-block bg-csclub-blue text-white px-4 py-2 rounded-md hover:bg-csclub-teal transition-colors'
            >
              Become a Member
            </Link>
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-4'>
            Partner Organizations/Clubs
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-black/20 p-6 rounded-md'>
              <h3 className='text-xl font-medium mb-2'>Partner 1</h3>
              <p className='text-gray-300 mb-4'>
                Curabitur turpis lectus, semper et sem eget, sollicitudin
                aliquet erat.
              </p>
              <a
                href='#'
                target='_self'
                rel='noopener noreferrer'
                className='text-csclub-blue hover:text-csclub-lightblue underline'
              >
                Visit Website
              </a>
            </div>
            <div className='bg-black/20 p-6 rounded-md'>
              <h3 className='text-xl font-medium mb-2'>Partner 2</h3>
              <p className='text-gray-300 mb-4'>
                Curabitur turpis lectus, semper et sem eget, sollicitudin
                aliquet erat.
              </p>
              <a
                href='#'
                target='_self'
                rel='noopener noreferrer'
                className='text-csclub-blue hover:text-csclub-lightblue underline'
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;

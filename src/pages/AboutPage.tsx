import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className='min-h-screen py-12 px-6 md:px-12 max-w-7xl mx-auto'>
      <h1 className='text-4xl font-bold mb-6'>About Us</h1>
      <div className='space-y-6'>
        <p className='text-lg text-gray-300'>
          The Computer Science Club is a student-run organization dedicated to
          fostering a vibrant computing community at the University of Waterloo.
          We organize various events, workshops, and social gatherings to
          promote learning, collaboration, and networking among students
          interested in computer science and related fields.
        </p>

        <h2 className='text-2xl font-semibold mt-8'>Our Mission</h2>
        <p className='text-gray-300'>
          Our mission is to create an inclusive and supportive environment where
          students can explore their passion for computing, develop their
          technical skills, and connect with like-minded individuals. We aim to
          bridge the gap between academic learning and practical application by
          providing opportunities for hands-on experience and professional
          development.
        </p>

        <h2 className='text-2xl font-semibold mt-8'>Our Vision</h2>
        <p className='text-gray-300'>
          We envision a community where every student feels empowered to pursue
          their interests in computing, regardless of their background or
          experience level. We strive to be a platform for innovation,
          collaboration, and knowledge sharing that extends beyond the
          classroom.
        </p>

        <h2 className='text-2xl font-semibold mt-8'>What We Do</h2>
        <ul className='list-disc list-inside text-gray-300 space-y-2'>
          <li>
            Organize workshops and technical talks by industry professionals and
            faculty members
          </li>
          <li>Host coding competitions, hackathons, and project showcases</li>
          <li>Provide resources for academic and professional development</li>
          <li>
            Facilitate networking opportunities with alumni and industry
            partners
          </li>
          <li>
            Create a supportive space for students to collaborate on personal
            projects
          </li>
          <li>
            Advocate for diversity and inclusion in the field of computing
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;

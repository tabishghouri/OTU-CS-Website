import React from "react";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Duis ut urna lacus",
    date: "May 26, 2026",
    summary: "",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada faucibus leo posuere luctus. Aliquam malesuada lacinia nulla sit amet varius. Quisque id porttitor orci. Proin feugiat eros ante, vitae tristique tellus vulputate et. Quisque semper, elit finibus dapibus pellentesque, justo nunc pulvinar mauris, nec vestibulum magna odio nec odio. Phasellus nec magna ullamcorper, vulputate nulla sit amet, vehicula nisi. Curabitur rutrum, quam nec feugiat blandit, lectus sapien vulputate felis, sed rutrum dolor erat eu risus. Ut odio magna, ultrices nec porta a, tempor eu odio. Cras faucibus dictum est vehicula mattis. Ut nec nisl sit amet justo congue laoreet eget et mauris. Praesent malesuada rutrum urna, sit amet dapibus felis volutpat quis. Nulla facilisi. Aenean eget volutpat metus, quis scelerisque nisl. Integer vel eros nisi. ",
  },
  {
    id: 2,
    title: "Duis ut urna lacus",
    date: "Month Date, Year",
    summary: "",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada faucibus leo posuere luctus. Aliquam malesuada lacinia nulla sit amet varius. Quisque id porttitor orci. Proin feugiat eros ante, vitae tristique tellus vulputate et. Quisque semper, elit finibus dapibus pellentesque, justo nunc pulvinar mauris, nec vestibulum magna odio nec odio. Phasellus nec magna ullamcorper, vulputate nulla sit amet, vehicula nisi. Curabitur rutrum, quam nec feugiat blandit, lectus sapien vulputate felis, sed rutrum dolor erat eu risus. Ut odio magna, ultrices nec porta a, tempor eu odio. Cras faucibus dictum est vehicula mattis. Ut nec nisl sit amet justo congue laoreet eget et mauris. Praesent malesuada rutrum urna, sit amet dapibus felis volutpat quis. Nulla facilisi. Aenean eget volutpat metus, quis scelerisque nisl. Integer vel eros nisi. ",
  },
  {
    id: 3,
    title: "Duis ut urna lacus",
    date: "Month Date, Year",
    summary: "",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada faucibus leo posuere luctus. Aliquam malesuada lacinia nulla sit amet varius. Quisque id porttitor orci. Proin feugiat eros ante, vitae tristique tellus vulputate et. Quisque semper, elit finibus dapibus pellentesque, justo nunc pulvinar mauris, nec vestibulum magna odio nec odio. Phasellus nec magna ullamcorper, vulputate nulla sit amet, vehicula nisi. Curabitur rutrum, quam nec feugiat blandit, lectus sapien vulputate felis, sed rutrum dolor erat eu risus. Ut odio magna, ultrices nec porta a, tempor eu odio. Cras faucibus dictum est vehicula mattis. Ut nec nisl sit amet justo congue laoreet eget et mauris. Praesent malesuada rutrum urna, sit amet dapibus felis volutpat quis. Nulla facilisi. Aenean eget volutpat metus, quis scelerisque nisl. Integer vel eros nisi. ",
  },
  {
    id: 4,
    title: "Duis ut urna lacus",
    date: "Month Date Year",
    summary: "",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada faucibus leo posuere luctus. Aliquam malesuada lacinia nulla sit amet varius. Quisque id porttitor orci. Proin feugiat eros ante, vitae tristique tellus vulputate et. Quisque semper, elit finibus dapibus pellentesque, justo nunc pulvinar mauris, nec vestibulum magna odio nec odio. Phasellus nec magna ullamcorper, vulputate nulla sit amet, vehicula nisi. Curabitur rutrum, quam nec feugiat blandit, lectus sapien vulputate felis, sed rutrum dolor erat eu risus. Ut odio magna, ultrices nec porta a, tempor eu odio. Cras faucibus dictum est vehicula mattis. Ut nec nisl sit amet justo congue laoreet eget et mauris. Praesent malesuada rutrum urna, sit amet dapibus felis volutpat quis. Nulla facilisi. Aenean eget volutpat metus, quis scelerisque nisl. Integer vel eros nisi. ",
  },
];

const NewsPage: React.FC = () => {
  return (
    <div className='min-h-screen py-12 px-6 md:px-12 max-w-7xl mx-auto'>
      <h1 className='text-4xl font-bold mb-6'>News & Announcements</h1>
      <p className='text-lg text-gray-300 mb-10'>
        Stay updated with the latest happenings, announcements, and achievements
        from our club. Here you'll find information about upcoming events, new
        initiatives, and member spotlights.
      </p>

      <div className='space-y-8'>
        {newsItems.map((item) => (
          <div key={item.id} className='bg-black/20 p-6 rounded-md'>
            <h2 className='text-2xl font-semibold mb-2'>{item.title}</h2>
            <p className='text-sm text-gray-400 mb-4'>{item.date}</p>
            <p className='text-gray-300'>{item.content}</p>
          </div>
        ))}
      </div>

      <div className='mt-12 text-center'>
        <p className='text-gray-400'>
          Looking for older news? Check our
          <a
            href='#'
            className='ml-1 text-csclub-blue hover:text-csclub-lightblue underline'
          >
            archives
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default NewsPage;

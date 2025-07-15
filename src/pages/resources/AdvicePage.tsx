import React from "react";

interface AdviceCategory {
  title: string;
  tips: string[];
}

const adviceCategories: AdviceCategory[] = [
  {
    title: "Academic Success",
    tips: [
      "Suspendisse pellentesque orci ut auctor posuere. ",
      "------------",
      "------------",
      "------------",
    ],
  },
  {
    title: "Technical Skill Development",
    tips: [
      "Suspendisse pellentesque orci ut auctor posuere. ",
      "------------",
      "------------",
      "------------",
    ],
  },
  {
    title: "Career Preparation",
    tips: [
      "Suspendisse pellentesque orci ut auctor posuere. ",
      "------------",
      "------------",
      "------------",
    ],
  },
  {
    title: "Work-Life Balance",
    tips: [
      "Suspendisse pellentesque orci ut auctor posuere. ",
      "------------",
      "------------",
      "------------",
    ],
  },
];

const AdvicePage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6 md:px-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Advice & Tips</h1>
      <p className="text-lg text-gray-300 mb-10">
        Sed laoreet, lectus sit amet sagittis vehicula, erat orci placerat
        ligula, et euismod turpis neque vitae augue. Fusce ullamcorper hendrerit
        odio suscipit ultrices.
      </p>

      <div className="space-y-10">
        {adviceCategories.map((category, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
            <div className="bg-black/20 p-6 rounded-md">
              <ul className="space-y-3">
                {category.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start">
                    <span className="text-csclub-blue mr-3">•</span>
                    <p className="text-gray-300">{tip}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div>
          <h2 className="text-2xl font-semibold mb-4">From Our Alumni</h2>
          <div className="bg-black/20 p-6 rounded-md">
            <blockquote className="border-l-4 border-csclub-blue pl-4 italic text-gray-300 mb-6">
              "Sed laoreet, lectus sit amet sagittis vehicula, erat orci
              placerat ligula, et euismod turpis neque vitae augue. Fusce
              ullamcorper hendrerit odio suscipit ultrices. Phasellus vitae nunc
              sed erat egestas pulvinar. "
              <footer className="mt-2 text-sm text-gray-400">
                — Somone, From Somewhere
              </footer>
            </blockquote>

            <blockquote className="border-l-4 border-csclub-blue pl-4 italic text-gray-300">
              "Sed laoreet, lectus sit amet sagittis vehicula, erat orci
              placerat ligula, et euismod turpis neque vitae augue. Fusce
              ullamcorper hendrerit odio suscipit ultrices. Phasellus vitae nunc
              sed erat egestas pulvinar. "
              <footer className="mt-2 text-sm text-gray-400">
                — Someone, From Somewhere
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvicePage;

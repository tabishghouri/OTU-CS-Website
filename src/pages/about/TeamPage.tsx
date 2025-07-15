import React from "react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Siegward",
    role: "President",
    description:
      "Duis ut urna lacus. Nunc suscipit finibus ligula, et dictum lectus scelerisque ut.",
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Malenia",
    role: "Vice President",
    description:
      "Duis ut urna lacus. Nunc suscipit finibus ligula, et dictum lectus scelerisque ut.",
    imageUrl: "/placeholder.svg",
  },
];

const TeamPage: React.FC = () => {
  return (
    <div className='min-h-screen py-12 px-6 md:px-12 max-w-7xl mx-auto'>
      <h1 className='text-4xl font-bold mb-6'>Meet the Team</h1>
      <p className='text-lg text-gray-300 mb-8'>
        Duis ut urna lacus. Nunc suscipit finibus ligula, et dictum lectus
        scelerisque ut. Proin nec mi ac lacus cursus elementum.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {teamMembers.map((member, index) => (
          <div key={index} className='bg-black/20 p-6 rounded-md'>
            <div className='flex items-center mb-4'>
              {member.imageUrl && (
                <div className='mr-4'>
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className='w-16 h-16 rounded-full bg-csclub-blue/20'
                  />
                </div>
              )}
              <div>
                <h3 className='text-xl font-medium'>{member.name}</h3>
                <p className='text-csclub-blue'>{member.role}</p>
              </div>
            </div>
            <p className='text-gray-300'>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;

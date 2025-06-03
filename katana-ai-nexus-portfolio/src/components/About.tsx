import React, { useState } from 'react';

// Select a few key skills to display initially - Moved outside the component
const initialSkills = [
  "Generative AI",
  "Blockchain Development",
  "Full-Stack Web Development",
  "Data Structures & Algorithms (DSA)",
  "C++",
  "Python",
  "React.js",
  "MongoDB"
];

const About = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const skillsData = [
    {
      category: "Languages",
      items: ["C", "C++", "Java", "Python", "R"]
    },
    {
      category: "Web Technologies",
      items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"]
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "VS Code", "Google Collab", "LTspice"]
    },
    {
      category: "Cloud",
      items: ["AWS (Basics)", "IBM Cloud"]
    },
    {
      category: "Concepts",
      items: ["DSA", "Operating Systems", "Computer Networks", "COA (Computer Architecture & Organization)", "TOC (Theory of Computation)", "Gen AI", "Blockchain", "Machine Learning", "MATLAB", "Micro Vision"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 minimal-bg-animation">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center scroll-fade">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-shimmer">
              About Me
            </h2>
            <p className="text-gray-400 leading-relaxed">
              I'm a Computer Science and Engineering Core student deeply passionate about emerging technologies, especially Generative AI and Blockchain. I blend academic learning with hands-on experience through projects and research focused on building innovative, real-world solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Currently, I'm exploring intelligent systems powered by GenAI and developing decentralized applications using Blockchain. I actively participate in many hackathons, embracing the challenge of rapid innovation and collaboration.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I'm always open to exciting opportunities and meaningful collaborations. Feel free to reach out!
            </p>
          </div>

          {/* Education Section with Neon Border */}
          <div className="p-6 rounded-lg border-2 border-purple-600 shadow-lg shadow-purple-500/50">
             <h3 className="text-3xl font-bold text-purple-400 mb-8 flex items-center">
                <span className="mr-3 text-4xl">📚</span> Education
             </h3>
             <div className="space-y-8">
                {/* B.Tech Entry with transparent neon effect */}
                <div className="border-l-4 border-purple-500 pl-6 pb-2 rounded-sm shadow-md shadow-purple-400/30 transition-shadow duration-300 hover:shadow-purple-400/60">
                   <h4 className="text-xl font-bold text-white">B.Tech in Computer Science Engineering</h4>
                   <p className="text-gray-400 text-sm">VIT Chennai (2023-2027)</p>
                </div>
                {/* JEE Advanced Entry with transparent neon effect */}
                <div className="border-l-4 border-blue-500 pl-6 pb-2 rounded-sm shadow-md shadow-blue-400/30 transition-shadow duration-300 hover:shadow-blue-400/60">
                   <h4 className="text-xl font-bold text-white">JEE Advanced</h4>
                   <p className="text-gray-400 text-sm">AIR 20,000 (General Category)</p>
                </div>
                 {/* 12th Grade Entry with transparent neon effect */}
                 <div className="border-l-4 border-green-500 pl-6 pb-2 rounded-sm shadow-md shadow-green-400/30 transition-shadow duration-300 hover:shadow-green-400/60">
                   <h4 className="text-xl font-bold text-white">12th Grade (97%)</h4>
                   <p className="text-gray-400 text-sm">Narayana Junior College, Tirupati</p>
                </div>
                 {/* 10th Grade Entry with transparent neon effect */}
                 <div className="border-l-4 border-yellow-500 pl-6 pb-2 rounded-sm shadow-md shadow-yellow-400/30 transition-shadow duration-300 hover:shadow-yellow-400/60">
                   <h4 className="text-xl font-bold text-white">10th Grade (99%)</h4>
                   <p className="text-gray-400 text-sm">Sri Chaitanya, Tirupati</p>
                </div>
             </div>
          </div>

          {/* Skills */}
          <div id="skills" className="p-6 rounded-lg border-2 border-green-600 shadow-lg shadow-green-500/50">
            <h3 className="text-3xl font-bold text-green-400 mb-8 flex items-center">
               <span className="mr-3 text-4xl">⚙️</span> Skills
            </h3>

            {!showAllSkills ? (
              <>
                {/* Initially display a few key skills */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {initialSkills.map((skill, index) => (
                    <div key={index} className="skill-card bg-gray-800 rounded-lg p-3 text-gray-300 magnetic-hover text-center text-sm">
                      {skill}
                    </div>
                  ))}
                </div>

                {/* View All Skills Button at the bottom of initial skills */}
                <div className="text-center mt-4">
                  <button
                    onClick={() => setShowAllSkills(true)}
                    className="glass-button text-white font-bold py-2.5 px-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
                  >
                    View All Skills
                  </button>
                </div>
              </>
            ) : (
              /* Display detailed categorized skills when showAllSkills is true */
              <div className="space-y-6">
                {skillsData.map((skillCategory, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-semibold text-white mb-3">{skillCategory.category}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-card bg-gray-800 rounded-lg p-3 text-gray-300 magnetic-hover text-center text-sm">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                 {/* Option to hide skills again */}
                <div className="text-center mt-4">
                   <button
                      onClick={() => setShowAllSkills(false)}
                      className="text-blue-400 hover:underline text-sm"
                    >
                      Hide Skills
                    </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Export initialSkills here
export { initialSkills };

export default About;
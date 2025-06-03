import React from 'react';

const Certificates = () => {
  // Placeholder for certificate data
  const certificates = [
    {
      id: 1,
      title: "FabriChain (ICIDDM 2K25, Springer)",
      issuer: "Presented at the International Conference on Interactive Design And Digital Manufacturing, SRM Institute of Science & Technology Tiruchirappalli",
      image: "/images/1.png", // Updated path to your certificate image
      link: "#" // TODO: Replace with the actual verification link when available
    },
    {
      id: 2,
      title: "I❤️HACKATHON BLOCKCHAIN",
      issuer: "Issuing Organization 2",
      image: "/images/2.png", // TODO: Replace with the actual path to your certificate image
      link: "#" // TODO: Replace with the actual verification link when available
    },
    {
      id: 3,
      title: "STUDENT COORDINATOR OF WORKSHOP ON WEB DESIGNING AND HACKATHON",
      issuer: "Issuing Organization 3",
      image: "/images/3.png", // TODO: Replace with the actual path to your certificate image
      link: "#" // TODO: Replace with the actual verification link when available
    },
    {
      id: 4,
      title: "FULL STACK DEVELOPMENT HACKATHON",
      issuer: "Issuing Organization 4",
      image: "/images/4.png", // TODO: Replace with the actual path to your certificate image
      link: "#" // TODO: Replace with the actual verification link when available
    },
    {
      id: 5,
      title: "GLITCHCON",
      issuer: "Issuing Organization 5",
      image: "/images/5.png", // TODO: Replace with the actual path to your certificate image
      link: "#" // TODO: Replace with the actual verification link when available
    },
    {
      id: 6,
      title: "CPP TUTORIAL IIT BOMBAY",
      issuer: "Issuing Organization 6",
      image: "/images/6.png", // TODO: Replace with the actual path to your certificate image
      link: "#" // TODO: Replace with the actual verification link when available
    },
    {
      id: 7,
      title: "C TUTORIAL IIT BOMBAY",
      issuer: "Issuing Organization 7",
      image: "/images/7.png", // TODO: Replace with the actual path to your certificate image
      link: "#" // TODO: Replace with the actual verification link when available
    },
    {
      id: 8,
      title: "PYTHON TUTORIAL IIT BOMBAY",
      issuer: "Issuing Organization 8",
      image: "/images/8.png", // TODO: Replace with the actual path to your certificate image
      link: "#" // TODO: Replace with the actual verification link when available
    }
    // Add more certificate objects here
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-900 minimal-bg-animation">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-shimmer">
              Certificates
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Showcasing my achievements and completed courses.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mt-4"></div>
        </div>

        {/* IBM Certification Container */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 card-hover scroll-fade">
          <div className="flex justify-between items-center mb-4">
            <span className="bg-purple-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded">In Progress</span>
            <span className="text-gray-400 text-sm">IBM</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">IBM Certified Generative AI Expert</h3>
          <p className="text-gray-400 mb-4">Covers advanced Generative AI concepts, implementation strategies, and enterprise applications.</p>
          <p className="text-purple-400 text-sm italic">To be updated upon completion</p>
        </div>

        {/* IIT Roorkee Quantum Computing Course Container */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 card-hover scroll-fade">
          <div className="flex justify-between items-center mb-4">
            <span className="bg-purple-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded">In Progress</span>
            <span className="text-gray-400 text-sm">IIT Roorkee</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Quantum Computing Course</h3>
          <p className="text-gray-400 mb-4">Comprehensive course on the fundamentals and applications of quantum computing.</p>
          {/* Add more details or link if available */}
        </div>

        {/* Grid to display certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through certificates data here */}
          {certificates.map(certificate => (
            <div key={certificate.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg card-hover">
              <img src={certificate.image} alt={certificate.title} className="w-full object-contain" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{certificate.title}</h3>
              </div>
            </div>
          ))}
           {/* Placeholder if no certificates are added yet */}
           {certificates.length === 0 && (
             <div className="col-span-1 md:col-span-2 lg:col-cols-3 text-center text-gray-500">
               No other certificates added yet.
             </div>
           )}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Generative AI in Education – In collaboration with VIT Chennai",
      description: "Researching GenAI applications in education, focusing on adaptive learning, content generation, and automated feedback using LLMs.",
      techStack: ["#GenAI", "#EducationTech", "#LLM", "#Research"],
      category: "GenAI",
      highlight: true,
      status: "In Progress"
    },
    {
      title: "GenAI Project – IBM Collaboration",
      description: "Working with IBM on implementing scalable GenAI systems for real-world applications with a focus on performance and responsible AI.",
      techStack: ["#GenAI", "#IBM", "#AIEngineering", "#Collaboration"],
      category: "GenAI",
      highlight: true,
      status: "In Progress"
    },
    {
      title: "Event Management Website (VIT College)",
      description: "Comprehensive platform for student registration, event management by admins, and merchandise purchase. Features user authentication, admin dashboard, and payment integration.",
      techStack: ["HTML", "CSS", "JavaScript", "MySQL"],
      category: "Web Development",
      highlight: true,
      status: "Completed"
    },
    {
      title: "AURUM – Digital NFT Marketplace",
      description: "Secure platform for buying and selling NFTs with smart contract integration, user profiles, and auction functionality. Built with modern blockchain technologies.",
      techStack: ["Solidity", "Web3.js", "React", "IPFS"],
      category: "Blockchain",
      highlight: true,
      status: "Completed"
    },
    {
      title: "InnoVere – Innovation Hub",
      description: "Global innovation hub integrating research, patents, news, and collaboration tools. Features AI-powered recommendation system and real-time collaboration.",
      techStack: ["React", "Node.js", "MongoDB", "AI/ML"],
      category: "Full-Stack",
      highlight: true,
      status: "Completed"
    },
    {
      title: "Bandwidth Usage Monitor",
      description: "Real-time network monitoring tool with terminal GUI, alert system, and detailed logging. Provides comprehensive network analytics and performance metrics.",
      techStack: ["Python", "Linux", "System APIs"],
      category: "System Tools",
      highlight: false,
      status: "Completed"
    },
    {
      title: "Full-Stack Scalable Blog App",
      description: "Modern blogging platform with user authentication, content management, and SEO optimization. Features real-time editing and collaborative writing.",
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js"],
      category: "Full-Stack",
      highlight: false,
      status: "Completed"
    },
    {
      title: "TaskMaster Pro – Advanced To-Do List App",
      description: "Complex task management application with reminders, notifications, and productivity analytics. Built entirely on Linux with advanced scheduling features.",
      techStack: ["Linux", "C++", "SQLite"],
      category: "Desktop Application",
      highlight: false,
      status: "Completed"
    },
    {
      title: "PixelBoost – Parallel Photo Enhancer",
      description: "High-performance image processing tool using parallel programming techniques. Significantly improved processing speed for batch image enhancement.",
      techStack: ["C++", "OpenMP", "Image Processing"],
      category: "Performance",
      highlight: false,
      status: "Completed"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "GenAI": "from-purple-400 to-pink-500",
      "Blockchain": "from-purple-500 to-pink-500",
      "Web Development": "from-blue-500 to-cyan-500",
      "Full-Stack": "from-green-500 to-blue-500",
      "System Tools": "from-orange-500 to-red-500",
      "Desktop Application": "from-yellow-500 to-orange-500",
      "Performance": "from-red-500 to-purple-500"
    };
    return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  const getStatusColor = (status: string) => {
    const colors = {
      "Completed": "bg-green-500/20 text-green-400 border-green-500/30",
      "In Progress": "bg-blue-600/30 text-blue-300 border-blue-600/40",
      "Beta": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    };
    return colors[status as keyof typeof colors] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  return (
    <section id="projects" className="py-20 bg-black minimal-bg-animation">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-shimmer">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Showcasing innovative solutions across AI, Blockchain, and Web Development. I'm currently working on multiple interesting GenAI projects.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto mt-4"></div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Projects</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.filter(project => project.highlight).map((project, index) => (
              <Card key={index} className="project-card bg-gray-900/50 border-0 overflow-hidden card-hover">
                <div className={`h-2 bg-gradient-to-r ${getCategoryColor(project.category)}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-white text-lg group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge className={`text-xs whitespace-nowrap ${getStatusColor(project.status)}`}>
                      {project.status}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="w-fit text-xs border-purple-500/30 text-purple-400">
                    {project.category}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-gray-800 text-gray-300 hover:bg-gray-700 magnetic-hover">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.filter(project => !project.highlight).map((project, index) => (
              <Card key={index} className="project-card bg-gray-900/30 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group card-hover">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-white text-base group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge className={`text-xs whitespace-nowrap ${getStatusColor(project.status)}`}>
                      {project.status}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="w-fit text-xs border-gray-600 text-gray-400">
                    {project.category}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-400 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-gray-800 text-gray-400 magnetic-hover">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => window.open('https://github.com/KattaJignesh', '_blank')}
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 magnetic-hover"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

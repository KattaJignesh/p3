import React from 'react';
import { FileText, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Research = () => {
  return (
    <section id="research" className="py-20 bg-gray-900 minimal-bg-animation">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-shimmer">
              Research
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Contributing to cutting-edge research and staying updated with the latest technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Research Paper */}
          <Card className="research-card bg-gray-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 group card-hover">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 magnetic-hover">
                  Published Research
                </Badge>
                <Badge variant="outline" className="border-blue-500/30 text-blue-400 magnetic-hover">
                  Springer
                </Badge>
              </div>
              <CardTitle className="text-white group-hover:text-green-400 transition-colors leading-tight">
                FabriChain: A Scalable and Privacy-Preserving Blockchain Framework for Secure Manufacturing Supply Chains
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-400 leading-relaxed">
                Presented at the International Conference on Interactive Design And Digital Manufacturing (ICIDDM 2K25), 
                organized by the School of Mechanical Engineering, SRM Institute of Science & Technology Tiruchirappalli.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 pulse-glow"></div>
                  <span className="text-gray-300">Conference: ICIDDM 2K25</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 pulse-glow"></div>
                  <span className="text-gray-300">Date: April 11-12, 2025</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 pulse-glow"></div>
                  <span className="text-gray-300">Mode: Hybrid</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 pulse-glow"></div>
                  <span className="text-gray-300">Publisher: Springer</span>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-gray-500 italic">
                  DOI and publication link will be updated upon availability
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Research Internship */}
          <Card className="research-card bg-gray-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group card-hover">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 magnetic-hover">
                  Research Internship
                </Badge>
                <Badge variant="outline" className="border-green-500/30 text-green-400 magnetic-hover">
                  Ongoing
                </Badge>
              </div>
              <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                Generative AI in Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-400 leading-relaxed">
                Collaborative research project with VIT Chennai focusing on the implementation and impact 
                of Generative AI technologies in educational environments and learning systems.
              </p>
              
              <div className="space-y-3">
                <h4 className="text-white font-semibold">Research Focus Areas:</h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 pulse-glow"></div>
                    <span className="text-gray-300 text-sm">AI-powered personalized learning</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 pulse-glow"></div>
                    <span className="text-gray-300 text-sm">Automated content generation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 pulse-glow"></div>
                    <span className="text-gray-300 text-sm">Educational chatbot development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 pulse-glow"></div>
                    <span className="text-gray-300 text-sm">Learning analytics and assessment</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications Section */}
        

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Interested in collaborating on research projects or discussing my work?
          </p>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 magnetic-hover"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Research;

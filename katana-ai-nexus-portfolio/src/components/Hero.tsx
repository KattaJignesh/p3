import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { initialSkills } from '../components/About'; // Import initialSkills

const Hero = () => {
  const handleResumeClick = () => {
    window.open('https://docs.google.com/document/d/1V8ZeuREaVHFUGecponRkTjO9VPb7X3NL/edit?usp=sharing&ouid=117966494895922318152&rtpof=true&sd=true', '_blank');
  };

  // Typewriter effect for Greetings
  const greetings = ['Hello', 'నమస్కారం', 'नमस्ते', 'ನಮಸ್ಕಾರ', 'നമസ്കാരം', 'வணக்கம்', 'Hallo', 'Hola', '你好'];
  const [displayedHello, setDisplayedHello] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % greetings.length;
      const fullTxt = greetings[i];

      setDisplayedHello(isDeleting 
        ? fullTxt.substring(0, displayedHello.length - 1)
        : fullTxt.substring(0, displayedHello.length + 1));

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && displayedHello === fullTxt) {
        timer = setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedHello === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedHello, isDeleting, loopNum]);

  // Typewriter effect for Skills
  const [displayedSkill, setDisplayedSkill] = useState('');
  const [isDeletingSkill, setIsDeletingSkill] = useState(false);
  const [loopNumSkill, setLoopNumSkill] = useState(0);
  const [typingSpeedSkill, setTypingSpeedSkill] = useState(120);

  useEffect(() => {
    let timer;
    const handleTypeSkill = () => {
      const i = loopNumSkill % initialSkills.length;
      const fullTxt = initialSkills[i];

      setDisplayedSkill(isDeletingSkill 
        ? fullTxt.substring(0, displayedSkill.length - 1)
        : fullTxt.substring(0, displayedSkill.length + 1));

      setTypingSpeedSkill(isDeletingSkill ? 60 : 120);

      if (!isDeletingSkill && displayedSkill === fullTxt) {
        timer = setTimeout(() => setIsDeletingSkill(true), 1500); // Pause after typing skill
      } else if (isDeletingSkill && displayedSkill === '') {
        setIsDeletingSkill(false);
        setLoopNumSkill(loopNumSkill + 1);
        setTypingSpeedSkill(120);
      }
    };

    timer = setTimeout(handleTypeSkill, typingSpeedSkill);

    return () => clearTimeout(timer);
  }, [displayedSkill, isDeletingSkill, loopNumSkill, initialSkills]); // Added initialSkills dependency

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Effects with Subtle Animations */}
      <div className="absolute inset-0 bg-circuit opacity-5 parallax-slow"></div>
      <div className="absolute inset-0">
        {/* Subtle Blue Blob */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl floating" style={{animationDelay: '0s'}}></div>
        {/* Subtle Purple Blob */}
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
        {/* Subtle Green Blob */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/20 rounded-full blur-3xl floating" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10 pt-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="mb-6">
              {/* Typewriter Hello above the name with blinking cursor */}
              <div className="text-2xl lg:text-3xl font-bold text-white mb-2 text-glow">
                {displayedHello}<span className="blinking-cursor">|</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent text-glow">
                  Jignesh
                </span>
                <br />
                <span className="text-white text-glow">Katta</span>
              </h1>
              <div className="text-xl lg:text-2xl text-gray-300 mb-6">
                <span className="text-blue-400">Computer Science and Engineering Core</span> Student
                <br />
                <span className="text-purple-400">GenAI</span> & <span className="text-green-400">Blockchain</span> Enthusiast
              </div>
            </div>

            {/* Skills Typewriter instead of tagline with gradient color */}
            <div className="text-lg font-medium max-w-2xl mb-8 leading-relaxed min-h-[2.5em] text-shimmer">
                {displayedSkill}<span className="blinking-cursor">|</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleResumeClick}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 glow-blue"
              >
                View Resume
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore Projects
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">7+</div>
                <div className="text-sm text-gray-400">Projects</div>
                <div className="text-gray-500 text-xs">(working on interesting GenAI projects)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">1</div>
                <div className="text-sm text-gray-400">Research Paper</div>
                <div className="text-gray-500 text-xs">(continuously working on new papers)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">3rd</div>
                <div className="text-sm text-gray-400">Year CSE Core</div>
              </div>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex-shrink-0 parallax-slow">
            <div className="relative">
              {/* Animated Ring Effect */}
              <div className="absolute inset-[-10px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-50 blur-md animate-pulse"></div>

              <div className="gradient-border floating">
                <img
                  src="https://i.postimg.cc/76q1PSNz/Whats-App-Image-2025-05-30-at-20-50-35-0b0b07a9.jpg"
                  alt="Jignesh Katta"
                  className="w-80 h-80 object-cover rounded-full relative z-10 animate-glitch"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center pulse-glow">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

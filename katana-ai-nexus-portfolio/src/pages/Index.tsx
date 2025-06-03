import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Certificates from '@/components/Certificates';
import CursorFollower from '@/components/CursorFollower';
import ShootingStars from '@/components/ShootingStars';

const Index = () => {
  useEffect(() => {
    // Scroll-based animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all scroll-fade elements
    const scrollElements = document.querySelectorAll('.scroll-fade');
    scrollElements.forEach((el) => observer.observe(el));

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-slow');
      
      parallaxElements.forEach((element) => {
        const speed = 0.3;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.setProperty('--scroll-offset', `${yPos}px`);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white unified-bg">
      {/* Floating Elements - Added here for background effect on all pages */}
      {/* Larger subtle blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl subtle-float" style={{animationDelay: '0s'}}></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-500/15 rounded-full blur-3xl subtle-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-green-500/15 rounded-full blur-3xl subtle-float" style={{animationDelay: '6s'}}></div>

      {/* Large Glowing Orbs */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] subtle-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-[15%] right-[25%] w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[120px] subtle-float" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-[40%] left-[40%] w-[450px] h-[450px] bg-green-400/10 rounded-full blur-[90px] subtle-float" style={{animationDelay: '6s'}}></div>
      <div className="absolute bottom-[30%] left-[10%] w-[550px] h-[550px] bg-pink-400/10 rounded-full blur-[110px] subtle-float" style={{animationDelay: '8s'}}></div>
      <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[80px] subtle-float" style={{animationDelay: '10s'}}></div>
      <div className="absolute bottom-[40%] right-[35%] w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[100px] subtle-float" style={{animationDelay: '12s'}}></div>
      <div className="absolute top-[60%] left-[25%] w-[450px] h-[450px] bg-violet-400/10 rounded-full blur-[90px] subtle-float" style={{animationDelay: '14s'}}></div>
      <div className="absolute bottom-[20%] left-[45%] w-[550px] h-[550px] bg-fuchsia-400/10 rounded-full blur-[110px] subtle-float" style={{animationDelay: '16s'}}></div>

      {/* Many colorful hovering stars/dots - Group 1 */}
      <div className="absolute top-[5%] left-[15%] w-1 h-1 bg-white/80 rounded-full blur-sm subtle-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-[10%] right-[10%] w-2 h-2 bg-blue-400/60 rounded-full blur-sm subtle-float" style={{animationDelay: '2.5s'}}></div>
      <div className="absolute bottom-[15%] left-[5%] w-1 h-1 bg-purple-400/60 rounded-full blur-sm subtle-float" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-[30%] left-[25%] w-3 h-3 bg-green-400/50 rounded-full blur-md subtle-float" style={{animationDelay: '5.5s'}}></div>
      <div className="absolute bottom-[10%] right-[20%] w-2 h-2 bg-white/70 rounded-full blur-sm subtle-float" style={{animationDelay: '7s'}}></div>
      <div className="absolute top-[50%] right-[5%] w-1 h-1 bg-blue-400/50 rounded-full blur-sm subtle-float" style={{animationDelay: '8.5s'}}></div>
      <div className="absolute bottom-[5%] left-[50%] w-3 h-3 bg-purple-400/40 rounded-full blur-md subtle-float" style={{animationDelay: '10s'}}></div>
      <div className="absolute top-[20%] right-[30%] w-2 h-2 bg-green-400/40 rounded-full blur-sm subtle-float" style={{animationDelay: '11.5s'}}></div>
      <div className="absolute bottom-[30%] left-[10%] w-1 h-1 bg-white/60 rounded-full blur-sm subtle-float" style={{animationDelay: '13s'}}></div>
      <div className="absolute top-[70%] left-[10%] w-3 h-3 bg-blue-400/30 rounded-full blur-md subtle-float" style={{animationDelay: '14.5s'}}></div>
      <div className="absolute bottom-[20%] right-[40%] w-2 h-2 bg-purple-400/30 rounded-full blur-sm subtle-float" style={{animationDelay: '16s'}}></div>
      <div className="absolute top-[60%] right-[15%] w-1 h-1 bg-green-400/30 rounded-full blur-sm subtle-float" style={{animationDelay: '17.5s'}}></div>
      <div className="absolute top-[40%] left-[5%] w-2 h-2 bg-white/50 rounded-full blur-sm subtle-float" style={{animationDelay: '19s'}}></div>
      <div className="absolute bottom-[40%] right-[10%] w-3 h-3 bg-blue-400/20 rounded-full blur-md subtle-float" style={{animationDelay: '20.5s'}}></div>

      {/* Group 2 - More stars */}
      <div className="absolute top-[15%] left-[35%] w-1 h-1 bg-white/70 rounded-full blur-sm subtle-float" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-[25%] right-[25%] w-2 h-2 bg-blue-400/50 rounded-full blur-sm subtle-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute bottom-[25%] left-[20%] w-1 h-1 bg-purple-400/50 rounded-full blur-sm subtle-float" style={{animationDelay: '4.5s'}}></div>
      <div className="absolute top-[45%] left-[45%] w-3 h-3 bg-green-400/40 rounded-full blur-md subtle-float" style={{animationDelay: '6s'}}></div>
      <div className="absolute bottom-[35%] right-[15%] w-2 h-2 bg-white/60 rounded-full blur-sm subtle-float" style={{animationDelay: '7.5s'}}></div>
      <div className="absolute top-[65%] right-[25%] w-1 h-1 bg-blue-400/40 rounded-full blur-sm subtle-float" style={{animationDelay: '9s'}}></div>
      <div className="absolute bottom-[45%] left-[35%] w-3 h-3 bg-purple-400/30 rounded-full blur-md subtle-float" style={{animationDelay: '10.5s'}}></div>
      <div className="absolute top-[35%] right-[45%] w-2 h-2 bg-green-400/30 rounded-full blur-sm subtle-float" style={{animationDelay: '12s'}}></div>
      <div className="absolute bottom-[55%] left-[15%] w-1 h-1 bg-white/50 rounded-full blur-sm subtle-float" style={{animationDelay: '13.5s'}}></div>
      <div className="absolute top-[85%] left-[30%] w-3 h-3 bg-blue-400/20 rounded-full blur-md subtle-float" style={{animationDelay: '15s'}}></div>

      {/* Group 3 - Even more stars */}
      <div className="absolute top-[5%] left-[55%] w-1 h-1 bg-white/60 rounded-full blur-sm subtle-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-[20%] right-[55%] w-2 h-2 bg-blue-400/40 rounded-full blur-sm subtle-float" style={{animationDelay: '3.5s'}}></div>
      <div className="absolute bottom-[15%] left-[65%] w-1 h-1 bg-purple-400/40 rounded-full blur-sm subtle-float" style={{animationDelay: '5s'}}></div>
      <div className="absolute top-[40%] left-[75%] w-3 h-3 bg-green-400/30 rounded-full blur-md subtle-float" style={{animationDelay: '6.5s'}}></div>
      <div className="absolute bottom-[25%] right-[65%] w-2 h-2 bg-white/50 rounded-full blur-sm subtle-float" style={{animationDelay: '8s'}}></div>
      <div className="absolute top-[55%] right-[75%] w-1 h-1 bg-blue-400/30 rounded-full blur-sm subtle-float" style={{animationDelay: '9.5s'}}></div>
      <div className="absolute bottom-[35%] left-[85%] w-3 h-3 bg-purple-400/20 rounded-full blur-md subtle-float" style={{animationDelay: '11s'}}></div>
      <div className="absolute top-[75%] right-[85%] w-2 h-2 bg-green-400/20 rounded-full blur-sm subtle-float" style={{animationDelay: '12.5s'}}></div>
      <div className="absolute bottom-[65%] left-[75%] w-1 h-1 bg-white/40 rounded-full blur-sm subtle-float" style={{animationDelay: '14s'}}></div>
      <div className="absolute top-[95%] left-[85%] w-3 h-3 bg-blue-400/10 rounded-full blur-md subtle-float" style={{animationDelay: '15.5s'}}></div>

      {/* Group 4 - Tiny stars */}
      <div className="absolute top-[8%] left-[28%] w-0.5 h-0.5 bg-white/90 rounded-full blur-sm subtle-float" style={{animationDelay: '1.2s'}}></div>
      <div className="absolute top-[18%] right-[38%] w-0.5 h-0.5 bg-blue-400/70 rounded-full blur-sm subtle-float" style={{animationDelay: '2.7s'}}></div>
      <div className="absolute bottom-[28%] left-[48%] w-0.5 h-0.5 bg-purple-400/70 rounded-full blur-sm subtle-float" style={{animationDelay: '4.2s'}}></div>
      <div className="absolute top-[38%] left-[58%] w-0.5 h-0.5 bg-green-400/60 rounded-full blur-sm subtle-float" style={{animationDelay: '5.7s'}}></div>
      <div className="absolute bottom-[38%] right-[48%] w-0.5 h-0.5 bg-white/80 rounded-full blur-sm subtle-float" style={{animationDelay: '7.2s'}}></div>
      <div className="absolute top-[48%] right-[58%] w-0.5 h-0.5 bg-blue-400/60 rounded-full blur-sm subtle-float" style={{animationDelay: '8.7s'}}></div>
      <div className="absolute bottom-[48%] left-[68%] w-0.5 h-0.5 bg-purple-400/50 rounded-full blur-sm subtle-float" style={{animationDelay: '10.2s'}}></div>
      <div className="absolute top-[58%] right-[68%] w-0.5 h-0.5 bg-green-400/50 rounded-full blur-sm subtle-float" style={{animationDelay: '11.7s'}}></div>
      <div className="absolute bottom-[58%] left-[78%] w-0.5 h-0.5 bg-white/70 rounded-full blur-sm subtle-float" style={{animationDelay: '13.2s'}}></div>
      <div className="absolute top-[68%] right-[78%] w-0.5 h-0.5 bg-blue-400/40 rounded-full blur-sm subtle-float" style={{animationDelay: '14.7s'}}></div>

      <Header />
      <section className="section-hero">
        <Hero />
      </section>
      <section className="section-about scroll-fade">
        <About />
      </section>
      <section className="section-projects scroll-fade">
        <Projects />
      </section>
      <section className="section-research scroll-fade">
        <Research />
      </section>
      <section className="section-certificates scroll-fade">
        <Certificates />
      </section>
      <section className="section-contact scroll-fade">
        <Contact />
      </section>
      <Footer />

      {/* Cursor Follower */}
      <CursorFollower />

      {/* Shooting Stars Background */}
      <ShootingStars />
    </div>
  );
};

export default Index;

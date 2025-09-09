import { ArrowDown, Download, Github } from 'lucide-react';
import profileImage from '../assets/madhavan-profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-surface to-background">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left fade-in visible">
            <div className="mb-6">
              <p className="text-primary font-semibold text-lg mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                Madhavan M
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground-muted mb-6">
                Full Stack Developer
              </h2>
              <p className="text-lg text-foreground-muted max-w-2xl">
                Building impactful and intuitive web applications that blend design and functionality. 
                Passionate about creating solutions that make a difference.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="#portfolio" className="btn-hero-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-hero-secondary">
                Contact Me
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <a 
                href="#" 
                className="flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors"
                title="Download Resume"
              >
                <Download size={20} />
                <span>Resume</span>
              </a>
              <a 
                href="https://github.com/madhavan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors"
                title="GitHub Profile"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 fade-in visible">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-hero relative z-10">
                <img 
                  src={profileImage} 
                  alt="Madhavan M - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-hero opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-accent-teal opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-foreground-muted hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
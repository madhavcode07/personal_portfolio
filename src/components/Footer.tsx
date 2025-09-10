import { Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-100 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="text-2xl font-bold mb-4">
                Madhavan<span className="text-primary">.</span>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                Full Stack Developer passionate about creating impactful web applications 
                that blend design and functionality.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h3 className="font-semibold mb-4 text-neutral-100">Quick Links</h3>
              <div className="space-y-2">
                {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-neutral-300 hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="md:col-span-1">
              <h3 className="font-semibold mb-4 text-neutral-100">Connect</h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/madhavcode07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-300 hover:text-primary transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Github size={20} />
                  </div>
                  <span>GitHub Profile</span>
                </a>
                
                <div className="mt-6">
                  <a 
                    href="/lovable-uploads/22ed333b-d0af-48ba-86dd-0b49ebcf90c6.png"
                    download="Madhavan_M_Resume.png"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-neutral-300">
                <span>© {currentYear} Madhavan M. Made with</span>
                <Heart className="text-red-500" size={16} />
                <span>and lots of coffee.</span>
              </div>
              
              <div className="text-neutral-400 text-sm">
                <span>B.E. CSE, K. Ramakrishnan College of Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
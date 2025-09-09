import { GraduationCap, Code, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-foreground-muted text-lg">
              Passionate about creating technology that makes a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Bio Content */}
            <div className="fade-in">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Heart className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">My Passion</h3>
                    <p className="text-foreground-muted leading-relaxed">
                      Currently pursuing a full stack development course, I am passionate about creating 
                      intuitive and impactful web applications that blend both design and functionality. 
                      I enjoy exploring new technologies, problem-solving, and collaborating on projects 
                      that challenge me to grow my technical and creative skills.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-teal/10 rounded-lg flex items-center justify-center">
                    <Code className="text-accent-teal" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">What I Do</h3>
                    <p className="text-foreground-muted leading-relaxed">
                      I specialize in building complete web applications from concept to deployment. 
                      My approach combines clean, efficient code with user-centered design principles 
                      to create digital experiences that users love.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Achievements */}
            <div className="fade-in">
              <div className="card-elevated p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-accent-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Education</h3>
                    <p className="text-foreground-muted">Academic Background</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Bachelor of Engineering - Computer Science</h4>
                    <p className="text-accent-blue font-medium">K. Ramakrishnan College of Engineering</p>
                    <p className="text-foreground-muted">2021 - 2025</p>
                  </div>

                  <div className="bg-accent-teal-light rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Featured Project</h4>
                    <p className="text-foreground-muted text-sm leading-relaxed">
                      <strong>Integrated Maternal and Child Health Monitoring System</strong> - 
                      Developed a comprehensive healthcare monitoring solution with unique ID assignment 
                      for tracking maternal and child health metrics throughout different stages of care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
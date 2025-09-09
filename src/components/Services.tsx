import { Monitor, Code, Smartphone, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Front-End Development',
      description: 'Creating responsive and user-friendly interfaces using modern technologies like HTML, CSS, Bootstrap, and JavaScript. Focus on clean design and seamless user experience.',
      features: ['Responsive Design', 'Cross-browser Compatibility', 'Performance Optimization', 'Modern UI/UX']
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building complete applications with both front-end and back-end integration. From database design to user interface, delivering end-to-end solutions.',
      features: ['Database Integration', 'API Development', 'Complete Web Apps', 'System Architecture']
    },
    {
      icon: Smartphone,
      title: 'Responsive Web Design',
      description: 'Ensuring your website looks and works perfectly on all devices. Mobile-first approach with attention to user experience across all screen sizes.',
      features: ['Mobile Optimization', 'Touch-friendly Interfaces', 'Fast Loading Times', 'SEO Friendly']
    },
    {
      icon: Palette,
      title: 'UI/UX Consultation',
      description: 'Providing insights on user interface design and user experience optimization. Helping create intuitive and engaging digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    }
  ];

  return (
    <section id="services" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Services I Offer
            </h2>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              Comprehensive web development services to bring your ideas to life with modern technology and best practices
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card fade-in group">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  {service.title}
                </h3>
                
                <p className="text-foreground-muted leading-relaxed mb-6 text-center">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-foreground-muted text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 fade-in">
            <div className="card-elevated p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-foreground-muted mb-6">
                Let's collaborate to bring your vision to life with clean, efficient, and user-friendly solutions.
              </p>
              <a href="#contact" className="btn-hero-primary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
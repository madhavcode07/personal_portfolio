import { ExternalLink, Github, Heart, Bike } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Bike Website',
      description: 'A modern, responsive website for a bike company designed using HTML and Bootstrap. Features clean design, product showcases, and mobile-optimized user experience.',
      image: '/api/placeholder/600/400',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      category: 'Frontend Development',
      icon: Bike,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      id: 2,
      title: 'Maternal & Child Health Monitoring System',
      description: 'Comprehensive healthcare monitoring solution with unique ID assignment for tracking maternal and child health metrics. Academic project focusing on healthcare technology.',
      image: '/api/placeholder/600/400',
      technologies: ['Full Stack', 'Database', 'Healthcare', 'ID System'],
      category: 'Full Stack Development',
      icon: Heart,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-foreground-muted text-lg">
              A showcase of my recent work and academic projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card fade-in ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
              >
                {/* Project Image */}
                <div className="lg:w-1/2 relative overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none bg-gradient-to-br from-neutral-100 to-neutral-200">
                  <div className="aspect-video flex items-center justify-center">
                    <div className={`w-24 h-24 ${project.bgColor} rounded-2xl flex items-center justify-center`}>
                      <project.icon className={project.color} size={48} />
                    </div>
                  </div>
                  
                  {/* Project overlay on hover */}
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <button className="p-3 bg-background rounded-full text-foreground hover:bg-surface transition-colors">
                        <ExternalLink size={20} />
                      </button>
                      <button className="p-3 bg-background rounded-full text-foreground hover:bg-surface transition-colors">
                        <Github size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-surface text-foreground-muted text-sm rounded-full border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors">
                      <ExternalLink size={16} />
                      View Project
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-border text-foreground hover:bg-surface rounded-lg transition-colors">
                      <Github size={16} />
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Projects Teaser */}
          <div className="text-center mt-16 fade-in">
            <div className="card-elevated p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                More Projects Coming Soon
              </h3>
              <p className="text-foreground-muted mb-6">
                I'm constantly working on new projects and learning new technologies. 
                Check back soon for more exciting work!
              </p>
              <a href="https://github.com/madhavan" target="_blank" rel="noopener noreferrer" className="btn-hero-secondary">
                <Github size={20} className="mr-2" />
                View All on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
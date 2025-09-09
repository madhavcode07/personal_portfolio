import { useEffect, useState } from 'react';
import { Code2, Database, Layout, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'HTML', level: 90, icon: Layout, color: 'text-orange-500' },
    { name: 'CSS', level: 85, icon: Layout, color: 'text-blue-500' },
    { name: 'Bootstrap', level: 80, icon: Layout, color: 'text-purple-500' },
    { name: 'JavaScript', level: 85, icon: Code2, color: 'text-yellow-500' },
    { name: 'SQL', level: 75, icon: Database, color: 'text-green-500' },
  ];

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      color: 'text-primary'
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: ['SQL', 'Database Design'],
      color: 'text-accent-teal'
    },
    {
      title: 'Tools & Technologies',
      icon: Zap,
      skills: ['Git', 'Responsive Design', 'Web Standards'],
      color: 'text-accent-blue'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-foreground-muted text-lg">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Skill Categories */}
            <div className="space-y-8 fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-8">Areas of Expertise</h3>
              {skillCategories.map((category, index) => (
                <div key={index} className="card-elevated p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className={category.color} size={24} />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-surface text-foreground-muted text-sm rounded-full border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Skill Progress Bars */}
            <div className="fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-8">Technical Proficiency</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="card-elevated p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <skill.icon className={skill.color} size={20} />
                        <span className="font-semibold text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-foreground-muted font-medium">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress ${isVisible ? 'w-full' : 'w-0'}`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
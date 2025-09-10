import { useState } from 'react';
import { Github, Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/madhavcode07',
      href: 'https://github.com/madhavcode07'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/maddy-madhavan',
      href: 'https://www.linkedin.com/in/maddy-madhavan-24770b2a8'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'madhavanmohan2210@gmail.com',
      href: 'mailto:madhavanmohan2210@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9360492302',
      href: 'tel:+919360492302'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, Tamil Nadu',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="fade-in">
              <div className="card-elevated p-8 h-full">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Let's Connect
                </h3>
                <p className="text-foreground-muted mb-8 leading-relaxed">
                  Feel free to reach out for project collaborations, full-stack development 
                  opportunities, or just to say hello. I'm always excited to discuss 
                  technology and potential partnerships.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.label === 'GitHub' || info.label === 'LinkedIn' ? '_blank' : undefined}
                      rel={info.label === 'GitHub' || info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-foreground-muted text-sm">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* GitHub CTA */}
                <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Github className="text-primary" size={24} />
                    <h4 className="font-semibold text-foreground">Check out my GitHub</h4>
                  </div>
                  <p className="text-foreground-muted text-sm mb-4">
                    Explore my projects, contributions, and coding journey on GitHub.
                  </p>
                  <a 
                    href="https://github.com/madhavcode07" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-hero-primary w-full justify-center"
                  >
                    <Github size={20} className="mr-2" />
                    Visit GitHub Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in">
              <div className="card-elevated p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-foreground font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-foreground font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-foreground font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how we can collaborate..."
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full btn-hero-primary">
                    <Send size={20} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
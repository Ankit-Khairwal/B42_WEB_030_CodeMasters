
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, Briefcase, Users, Star, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "Looking for React developers to build a modern e-commerce solution",
      skills: ["React", "Node.js", "MongoDB"],
      duration: "3 months"
    },
    {
      title: "Mobile App Development",
      description: "Need UI/UX designers for an innovative health tracking app",
      skills: ["UI/UX", "Figma", "Mobile Design"],
      duration: "2 months"
    },
    {
      title: "AI Integration Project",
      description: "Seeking ML engineers to implement AI features in existing platform",
      skills: ["Python", "TensorFlow", "API Development"],
      duration: "4 months"
    }
  ];

  const trustedBy = [
    { name: "TechCorp", role: "Technology Partner" },
    { name: "InnovateLabs", role: "Research Collaborator" },
    { name: "DesignStudio", role: "Creative Partner" }
  ];

  const successStories = [
    {
      name: "Sarah Johnson",
      role: "Full Stack Developer",
      story: "Found my dream project through TalentLink"
    },
    {
      name: "Michael Chen",
      role: "UI/UX Designer",
      story: "Connected with amazing clients"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent">
      <main className="container mx-auto px-4 py-8">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/c2d49521-8982-43ee-bebd-152a96a6c3c1.png" 
            alt="TalentPool Logo" 
            className="h-12 md:h-16"
          />
        </div>

        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Connect. Collaborate. Create.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of talented individuals and find your next opportunity
            to collaborate on amazing projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button className="btn-primary">Get Started</Button>
            </Link>
            <Link to="/projects">
              <Button className="btn-secondary">Browse Projects</Button>
            </Link>
          </div>
        </motion.section>

        {/* Search Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <div className="glass-card max-w-3xl mx-auto p-4 rounded-lg">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for projects or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-md bg-background border 
                         focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </motion.section>

        {/* Features Grid */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {[
            {
              icon: <Briefcase className="w-8 h-8" />,
              title: "Find Projects",
              description: "Discover opportunities that match your skills and interests."
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Build Teams",
              description: "Connect with talented individuals and form powerful collaborations."
            },
            {
              icon: <Star className="w-8 h-8" />,
              title: "Grow Together",
              description: "Learn from others and enhance your skills through real projects."
            }
          ].map((feature, index) => (
            <div key={index} className="glass-card p-6 rounded-lg text-center">
              <div className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </motion.section>

        {/* Featured Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="glass-card">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Duration: {project.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/projects">
              <Button variant="outline" className="group">
                View All Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.section>

        {/* Companies Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Trusted By</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {trustedBy.map((company, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <Building2 className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
                <p className="text-muted-foreground">{company.role}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Success Stories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{story.story}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

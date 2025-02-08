
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Grid, List } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Projects = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      title: "AI-Powered Healthcare Platform",
      description: "Developing an AI system for early disease detection and diagnosis",
      skills: ["Python", "TensorFlow", "Healthcare API"],
      duration: "6 months",
      budget: "$15,000 - $20,000",
      category: "Healthcare"
    },
    {
      title: "E-commerce Mobile App",
      description: "Building a cross-platform mobile app for an established online retailer",
      skills: ["React Native", "Node.js", "Firebase"],
      duration: "4 months",
      budget: "$12,000 - $15,000",
      category: "Mobile"
    },
    {
      title: "Blockchain Trading Platform",
      description: "Creating a secure cryptocurrency trading platform",
      skills: ["Solidity", "Web3.js", "React"],
      duration: "5 months",
      budget: "$25,000 - $30,000",
      category: "Blockchain"
    },
    {
      title: "Smart Home Automation System",
      description: "IoT-based home automation solution with mobile app control",
      skills: ["IoT", "React Native", "Python"],
      duration: "3 months",
      budget: "$10,000 - $12,000",
      category: "IoT"
    },
    {
      title: "Educational Learning Platform",
      description: "Interactive learning platform for K-12 students",
      skills: ["React", "Node.js", "MongoDB"],
      duration: "4 months",
      budget: "$18,000 - $22,000",
      category: "Education"
    },
    {
      title: "Social Media Analytics Tool",
      description: "Advanced analytics platform for social media marketing",
      skills: ["Python", "Data Science", "React"],
      duration: "3 months",
      budget: "$14,000 - $16,000",
      category: "Analytics"
    },
    {
      title: "AR Shopping Experience",
      description: "Augmented reality solution for online shopping",
      skills: ["Unity", "AR Kit", "iOS Development"],
      duration: "5 months",
      budget: "$20,000 - $25,000",
      category: "AR/VR"
    },
    {
      title: "Financial Management App",
      description: "Personal finance tracking and investment management platform",
      skills: ["React", "Node.js", "FinTech APIs"],
      duration: "4 months",
      budget: "$16,000 - $20,000",
      category: "Finance"
    },
    {
      title: "Game Development Project",
      description: "3D multiplayer game development using Unity",
      skills: ["Unity", "C#", "Networking"],
      duration: "6 months",
      budget: "$30,000 - $35,000",
      category: "Gaming"
    },
    {
      title: "Content Management System",
      description: "Custom CMS for a large media company",
      skills: ["React", "GraphQL", "PostgreSQL"],
      duration: "3 months",
      budget: "$15,000 - $18,000",
      category: "Enterprise"
    },
    // Adding more projects...
    {
      title: "Supply Chain Management System",
      description: "Blockchain-based supply chain tracking solution",
      skills: ["Hyperledger", "Node.js", "React"],
      duration: "5 months",
      budget: "$22,000 - $26,000",
      category: "Enterprise"
    },
    // ... Adding 20 more similar projects with varied skills, budgets, and categories
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent p-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Browse Projects</h1>
          <p className="text-muted-foreground">
            Discover exciting projects and opportunities to collaborate
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              onClick={() => setViewMode("grid")}
            >
              <Grid className="w-4 h-4 mr-2" />
              Grid
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4 mr-2" />
              List
            </Button>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`grid gap-6 ${
            viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
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
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Duration: {project.duration}</p>
                    <p>Budget: {project.budget}</p>
                    <p>Category: {project.category}</p>
                  </div>
                  <Button className="w-full mt-4">Apply Now</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

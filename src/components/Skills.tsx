import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML5", "CSS3"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Vercel", "Firebase", "Figma", "VS Code"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Leadership", "Agile", "Communication", "Mentoring"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 hover:bg-primary/20 text-foreground border-primary/20 transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
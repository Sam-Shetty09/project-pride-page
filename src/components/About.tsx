const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a full-stack developer with over 5 years of experience building 
              web applications. I specialize in React, Node.js, and cloud technologies, 
              always staying up-to-date with the latest industry trends.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community through blog posts and talks.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 gradient-text">What I Do</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Frontend Development with React & TypeScript
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Backend API Development with Node.js
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Cloud Architecture & DevOps
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  UI/UX Design & Prototyping
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center animate-float">
              <div className="w-64 h-64 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-6xl font-bold text-primary-foreground">
                AJ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
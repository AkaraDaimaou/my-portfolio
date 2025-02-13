import React, { useEffect, useRef } from 'react';
import { Code, Server, Palette } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    // Add mouse move event for 3D effect
    const cards = document.querySelectorAll('.skill-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      observer.disconnect();
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    card.style.transition = 'transform 0.1s';

    // Add glowing effect
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;
    card.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 50%)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    card.style.transition = 'transform 0.5s, background 0.5s';
    card.style.background = 'none';
  };

  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description:
        "Building responsive web applications with React, TypeScript, and modern CSS frameworks.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
        "Next.js",
        "Vue.js",
      ],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Development",
      description: "Creating robust server-side applications and APIs.",
      technologies: ["Node.js", "Express.js", "Django", "Ruby on Rails"],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Database Management",
      description: "Managing and maintaining databases efficiently.",
      technologies: ["SQL", "PostgreSQL", "MongoDB", "Supabase"],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Data Science",
      description: "Analyzing data and building data-driven solutions.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "Plotly",
      ],
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces.",
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "API Development",
      description: "Developing and testing APIs.",
      technologies: [
        "REST APIs",
        "JSON",
        "API Testing",
        "Application Programming Interfaces",
      ],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Deployment",
      description: "Deploying applications to various platforms.",
      technologies: ["Heroku", "Netlify", "Scalingo"],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Tools & Version Control",
      description: "Using tools and version control systems effectively.",
      technologies: ["Git", "GitHub", "Jupyter Notebook", "Google Colab"],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 glowing-text">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience in
            building web applications. I love solving complex problems and
            creating intuitive user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-card p-6 bg-white dark:bg-gray-800 rounded-lg animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 hover:shadow-xl dark:shadow-lg dark:shadow-blue-500/20 cursor-pointer`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 transform transition-transform hover:rotate-12">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 hover:rotate-3"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
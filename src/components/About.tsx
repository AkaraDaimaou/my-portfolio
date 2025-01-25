import { useEffect, useRef } from 'react';
import { Code, Server, Palette } from 'lucide-react';

const About = () => {
  const sectionRef = useRef(null);

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

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Frontend Development',
      description: 'Building responsive web applications with React, TypeScript, and modern CSS frameworks.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Next.js', 'Vue.js'],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Backend Development',
      description: 'Creating robust server-side applications and APIs.',
      technologies: ['Node.js', 'Express.js', 'Django', 'Ruby on Rails'],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Database Management',
      description: 'Managing and maintaining databases efficiently.',
      technologies: ['SQL', 'PostgreSQL', 'MongoDB', 'Supabase'],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Data Science',
      description: 'Analyzing data and building data-driven solutions.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Plotly'],
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces.',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'API Development',
      description: 'Developing and testing APIs.',
      technologies: ['REST APIs', 'JSON', 'API Testing', 'Application Programming Interfaces'],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Deployment',
      description: 'Deploying applications to various platforms.',
      technologies: ['Heroku', 'Netlify', 'Scalingo'],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Tools & Version Control',
      description: 'Using tools and version control systems effectively.',
      technologies: ['Git', 'GitHub', 'Jupyter Notebook', 'Google Colab'],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-100 translate-y-0 transition-all duration-1000">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience in building web applications.
            I love solving complex problems and creating intuitive user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 bg-gray-50 rounded-lg animate-on-scroll opacity-100 translate-y-0 transition-all duration-500 ease-in-out transform hover:shadow-xl hover:-translate-y-2 hover:scale-105 hover:bg-blue-50`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 transform transition-transform duration-500 ease-in-out hover:rotate-12">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h3>
              <p className="text-gray-600 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 hover:text-blue-900 transition-colors duration-300 ease-in-out"
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

import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';

const App = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Particles Background */}
      <div className="fixed inset-0 -z-10">
        <Particles
          init={particlesInit}
          options={{
            particles: {
              number: { value: 50 },
              color: { value: "#ffffff" },
              opacity: { value: 0.5 },
              size: { value: 1 },
              links: {
                enable: true,
                color: "#ffffff",
                opacity: 0.2,
                width: 1,
              },
              move: { enable: true, speed: 1 },
            },
          }}
        />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen flex flex-col justify-center items-center text-center"
        >
          <h1 className="text-6xl font-bold mb-4">John Doe</h1>
          <p className="text-2xl text-gray-300 mb-8">Full Stack Developer</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-all"
          >
            View Work
          </motion.button>
        </motion.section>

        {/* About Section */}
        <section className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">About</h2>
          <div className="max-w-2xl mx-auto text-gray-300 leading-relaxed">
            <p className="mb-6">
              Passionate developer with 5+ years of experience in building scalable web applications.
              Specialized in modern JavaScript frameworks and cloud technologies.
            </p>
            {/* Add more content */}
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'GraphQL', 'TypeScript'].map((skill) => (
              <motion.div 
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="border border-white p-4 text-center rounded-lg"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
          <form className="max-w-xl mx-auto space-y-6">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full bg-transparent border border-white p-3 rounded focus:outline-none focus:border-gray-400"
            />
            <textarea 
              placeholder="Message" 
              rows="5"
              className="w-full bg-transparent border border-white p-3 rounded focus:outline-none focus:border-gray-400"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full border border-white py-3 rounded hover:bg-white hover:text-black transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default App;
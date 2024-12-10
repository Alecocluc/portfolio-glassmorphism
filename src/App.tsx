import { About } from './components/About'
import { Header } from './components/Header'
import { ProjectCard } from './components/ProjectCard'
import { Skills } from './components/Skills'
import { BentoBox } from './components/BentoBox'

function App() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js",
      tags: ["React", "Node.js", "PostgreSQL"],
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80"
    },
    {
      title: "Portfolio Website",
      description: "A minimalist portfolio with glassmorphic design",
      tags: ["React", "TypeScript", "Tailwind"],
      imageUrl: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <Header />
        
        <main className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <About />
            <BentoBox className="row-span-1">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="text-center">
                <h2 className="font-semibold">Senior Developer</h2>
                <p className="text-white/70">Available for freelance</p>
              </div>
            </BentoBox>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <Skills />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <BentoBox key={project.title}>
                  <ProjectCard {...project} />
                </BentoBox>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
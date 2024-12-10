import { Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-4">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        John Doe
      </h1>
      <nav className="flex gap-4">
        <a href="https://github.com" className="text-white/70 hover:text-white transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com" className="text-white/70 hover:text-white transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="mailto:contact@example.com" className="text-white/70 hover:text-white transition-colors">
          <Mail className="w-5 h-5" />
        </a>
      </nav>
    </header>
  );
}
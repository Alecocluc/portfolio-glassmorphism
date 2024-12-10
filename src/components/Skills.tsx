import { Code2, Palette, Terminal } from 'lucide-react';
import { BentoBox } from './BentoBox';

export function Skills() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <BentoBox className="flex flex-col items-center text-center">
        <Code2 className="w-8 h-8 mb-3 text-purple-400" />
        <h3 className="font-semibold mb-2">Frontend</h3>
        <p className="text-sm text-white/70">React, TypeScript, Tailwind CSS</p>
      </BentoBox>
      <BentoBox className="flex flex-col items-center text-center">
        <Terminal className="w-8 h-8 mb-3 text-pink-400" />
        <h3 className="font-semibold mb-2">Backend</h3>
        <p className="text-sm text-white/70">Node.js, Python, PostgreSQL</p>
      </BentoBox>
      <BentoBox className="flex flex-col items-center text-center">
        <Palette className="w-8 h-8 mb-3 text-blue-400" />
        <h3 className="font-semibold mb-2">Design</h3>
        <p className="text-sm text-white/70">Figma, Adobe XD, UI/UX</p>
      </BentoBox>
    </div>
  );
}
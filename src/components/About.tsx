import { BentoBox } from './BentoBox';

export function About() {
  return (
    <BentoBox className="col-span-2">
      <h2 className="text-xl font-semibold mb-4">About Me</h2>
      <p className="text-white/80 leading-relaxed">
        I'm a passionate full-stack developer with a keen eye for design and a love for creating 
        beautiful, functional web applications. With 5 years of experience in the industry, 
        I specialize in building modern web applications using cutting-edge technologies.
      </p>
    </BentoBox>
  );
}
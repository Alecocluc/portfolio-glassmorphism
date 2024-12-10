import { ReactNode } from 'react';

interface BentoBoxProps {
  children: ReactNode;
  className?: string;
}

export function BentoBox({ children, className = '' }: BentoBoxProps) {
  return (
    <div className={`rounded-2xl backdrop-blur-md bg-white/10 p-6 hover:bg-white/20 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}
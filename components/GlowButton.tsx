'use client';

import React from 'react';
import Link from 'next/link';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const GlowButton: React.FC<GlowButtonProps> = ({ children, onClick, href, className = '' }) => {
  // Si `href` está presente, usamos `next/link` para navegación
  if (href) {
    return (
      <Link href={href} className={`cssbuttons-io ${className}`} target="_blank" rel="noopener noreferrer">
        <span>{children}</span>
      </Link>
    );
  }

  // Si no hay `href`, devolvemos un botón interactivo
  return (
    <button className={`cssbuttons-io ${className}`} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

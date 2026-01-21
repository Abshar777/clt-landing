"use client"
import React from 'react';

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({ children, onClick, className }) => {
  return (
    <button className={`shiny-cta ${className}`} onClick={onClick}>
      <div className="glow" />
      <span>{children}</span>
    </button>
  );
};

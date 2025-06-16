import React from 'react';
import { GraduationCap } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/10 rounded-lg">
            <GraduationCap className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
            {subtitle && (
              <p className="text-blue-100 mt-1 text-sm sm:text-base">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-200 border-b border-b-gray-400 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="relative flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Joanna Florence Makes
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </div>

          {/* Mobile navigation */}
          <div
            className={`absolute top-full left-0 right-0 bg-white border-b md:hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <div className="flex flex-col space-y-4 px-4 py-6">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

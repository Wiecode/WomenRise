import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const navItems = ['Courses', 'Network', 'Resources', 'Business Growth'];

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="font-bold text-xl text-purple-600">WomenEntrepreneurs</span>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="hidden sm:flex sm:items-center">
            <Button className="px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-md">
              Sign Up
            </Button>
          </div>
          <div className="sm:hidden">
            <Button variant="ghost">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

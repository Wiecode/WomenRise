import React from 'react';
import { Navbar } from './Navbar';

export function Layout({ children }) {
  return (

      <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2023 Course Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

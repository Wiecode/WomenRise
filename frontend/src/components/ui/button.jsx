// src/components/ui/button.jsx

import React from 'react';

export function Button({ className, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
}

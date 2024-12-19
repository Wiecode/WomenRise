import React from 'react';
import { Button } from './ui/button';

export function CourseCard({ title, description, category }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{category}</p>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
      <div className="p-4 bg-gray-100 text-center">
        <Button className="w-full text-white bg-purple-600 hover:bg-purple-700 rounded-md py-2">
          Enroll Now
        </Button>
      </div>
    </div>
  );
}

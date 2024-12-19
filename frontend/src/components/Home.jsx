import React from 'react';
import { Hero } from './Hero';
import { Layout } from './Layout';
import { CourseCard } from './CourseCard';

const courses = [
  {
    title: 'Business Fundamentals',
    description: 'Learn the basics of starting and running a successful business.',
    category: 'Business'
  },
  {
    title: 'Digital Marketing Mastery',
    description: 'Master the art of digital marketing to grow your business online.',
    category: 'Marketing'
  },
  {
    title: 'Financial Planning for Entrepreneurs',
    description: 'Understand the financial aspects of running a business and plan for success.',
    category: 'Finance'
  }
];

function Home() {
  return (
    <Layout>
      <Hero />
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Featured Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;

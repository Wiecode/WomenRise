import React, { createContext, useContext, useState } from 'react';

// Create a context
const CoursesContext = createContext();

// Custom hook to use the courses context
export const useCourses = () => useContext(CoursesContext);

// Provider component to wrap the app with
export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    setCourses((prevCourses) => [...prevCourses, course]);
  };

  const deleteCourse = (courseId) => {
    setCourses((prevCourses) => prevCourses.filter(course => course.id !== courseId));
  };

  return (
    <CoursesContext.Provider value={{ courses, addCourse, deleteCourse }}>
      {children}
    </CoursesContext.Provider>
  );
};

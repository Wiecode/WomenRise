import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import axios from 'axios';

export default function CoursePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Assuming user authentication status is stored in localStorage or context
  const isAuthenticated = localStorage.getItem('userToken'); // or useContext

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/UploadCourse/courses/${id}`);
        setCourse(response.data.course);
      } catch (err) {
        console.error('Error fetching course:', err);
        setError('Failed to load course. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleEnrollClick = () => {
    if (!isAuthenticated) {
      // Redirect to SignupUser page if not authenticated
      navigate('/signupuser');
    } else {
      // Proceed with enrollment logic if authenticated (e.g., call enrollment API)
      console.log('Enroll in the course');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-white">{course.title}</h1>
      <p className="text-xl mb-2">Mentor: {course.mentor?.name || 'Unknown'}</p>
      <p className="text-lg mb-4">Mentor Email: {course.mentor?.email || 'Not available'}</p>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-black">Course Description</h2>
        <p className="text-gray-700">{course.description || 'No description available'}</p>
      </div>
      <div className="flex space-x-4">
        <Button size="lg" className="bg-black text-white hover:bg-gray-800" onClick={handleEnrollClick}>
          Enroll Now
        </Button>
        <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blue hover:text-white">
          <Link to="/courses">Back to Courses</Link>
        </Button>
      </div>
    </div>
  );
}

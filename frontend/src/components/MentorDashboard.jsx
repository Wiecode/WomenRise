import React, { useState } from 'react';
import { useCourses } from './context/CourseContext'; // Import the custom hook

const MentorDashboard = () => {
  const { addCourse } = useCourses(); // Use the context to add course to the global state
  const [courseDetails, setCourseDetails] = useState({
    title: '',
    description: '',
    price: '',
    Accno: '', // Adding Accno to the state
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    const { title, description, price, Accno } = courseDetails;

    // Basic validation for required fields
    if (!title || !description || !price || !Accno) {
      alert('Please fill in all fields');
      return;
    }

    // Get the auth token
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Token is missing. Please log in again.');
      return;
    }

    setLoading(true);
    setError(null); // Reset any previous errors

    const data = { title, description, price, Accno };

    try {
      // Make the API call to the backend
      const response = await fetch('http://localhost:5000/api/UploadCourse/upload-course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
        body: JSON.stringify(data),
      });
     
      let responseData;
      try {
        responseData = await response.json();
      } catch (err) {
        throw new Error('Invalid response from server');
      }

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to upload course');
      }

      if (responseData.success) {
        addCourse(responseData.course); // Add the new course to the context (if needed)
        alert('Course uploaded successfully');
        setCourseDetails({ title: '', description: '', price: '', Accno: '' }); // Clear form fields
      }
    } catch (error) {
      console.error('Error adding course:', error);
      setError(error.message); // Set error state for displaying in the UI
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-5">Mentor Dashboard</h1>

      {/* Add New Course Form */}
      <form onSubmit={handleAddCourse} className="mb-5">
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="mb-4">
          <label htmlFor="title" className="block text-lg">Course Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={courseDetails.title}
            onChange={handleInputChange}
            className="w-full p-2 mt-2 rounded text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-lg">Course Description</label>
          <textarea
            id="description"
            name="description"
            value={courseDetails.description}
            onChange={handleInputChange}
            className="w-full p-2 mt-2 rounded text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-lg">Course Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={courseDetails.price}
            onChange={handleInputChange}
            className="w-full p-2 mt-2 rounded text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Accno" className="block text-lg">Account Number (Accno)</label>
          <input
            type="text"
            id="Accno"
            name="Accno"
            value={courseDetails.Accno}
            onChange={handleInputChange}
            className="w-full p-2 mt-2 rounded text-black"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#2DD4BF] hover:bg-[#2ba899] text-white font-bold py-2 px-4 rounded mb-5 transition-all"
          disabled={loading}
        >
          {loading ? 'Uploading...' : 'Add New Course'}
        </button>
      </form>
    </div>
  );
};

export default MentorDashboard;

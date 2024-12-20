// EnrolledUsers.js
import React, { useState, useEffect } from 'react';

const EnrolledUsers = ({ courseId, courseTitle }) => {
  const [enrolledUsers, setEnrolledUsers] = useState([]);
  const [error, setError] = useState(null);

  // Fetch enrolled users for the given course
  const fetchEnrolledUsers = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/mentor/courses/${courseId}/enrollments`, {
        method: 'GET',
        headers: {
          'auth-token': localStorage.getItem('token'),
        },
      });
      const responseData = await response.json();
      if (responseData.success) {
        setEnrolledUsers(responseData.enrollments);
      } else {
        setError('Failed to fetch enrolled users');
      }
    } catch (error) {
      setError('Error fetching enrolled users');
      console.error('Error fetching enrolled users:', error);
    }
  };

  useEffect(() => {
    fetchEnrolledUsers();
  }, [courseId]);

  return (
    <div className="mb-5">
      <h2 className="text-2xl font-semibold">{courseTitle}</h2>
      <h3 className="text-lg text-gray-300">Enrolled Users:</h3>
      {error && <div className="text-red-500">{error}</div>}
      <ul>
        {enrolledUsers.length > 0 ? (
          enrolledUsers.map((user) => (
            <li key={user._id} className="text-lg">{user.name} ({user.email})</li>
          ))
        ) : (
          <li className="text-lg text-gray-500">No users enrolled yet.</li>
        )}
      </ul>
    </div>
  );
};

export default EnrolledUsers;

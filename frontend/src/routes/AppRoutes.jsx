import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import CoursesPage from '../components/CoursesPage';
import CoursePage from '../components/CoursePage';
import NetworkPage from '../components/NetworkPage';
import ResourcesPage from '../components/ResourcesPage';
import BusinessGrowthPage from '../components/BusinessGrowthPage';
import SignUpPage from '../components/SignUpPage';
import MentorDashboard from '../components/MentorDashboard';
import SignUpUser from '../components/SignUpUser';
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/:id" element={<CoursePage />} />
      <Route path="/network" element={<NetworkPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/business-growth" element={<BusinessGrowthPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/MentorDashboard" element={<MentorDashboard />}/>
      <Route path="/signupuser" element={<SignUpUser />}/>
      <Route path="/CoursePage" element={<CoursePage />}
       />
    </Routes>
  );
}

export default AppRoutes;

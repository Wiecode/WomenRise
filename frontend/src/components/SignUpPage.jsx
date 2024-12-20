import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); 
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/creatementor', { name, email, password });
      console.log(response);
      if (response.data.success) {
        alert("Sign Up Successful!");
        navigate('/MentorDashboard'); // Redirect to homepage after signup
      }
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred. Please try again.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginEmail = document.getElementById("login-email").value;
      const loginPassword = document.getElementById("login-password").value;
      const response = await axios.post('http://localhost:5000/api/auth/login', { email: loginEmail, password: loginPassword });
      if (response.data.success) {
        alert("Login Successful!");
        localStorage.setItem('token', response.data.authtoken); // Store auth token
        navigate('/MentorDashboard'); // Redirect to dashboard or mentor-specific page
      }
    } catch (err) {
      setError(err.response?.data?.error || "Invalid login credentials.");
    }
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
    setError(''); // Clear any previous errors
  };

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen bg-slate-900">
      <Card className="w-full max-w-md bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-teal-400">Join WomenRise</CardTitle>
          <CardDescription className="text-center text-slate-300">Start your entrepreneurial journey today</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-200">Full Name</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-slate-700 text-slate-100 border-slate-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-200">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-slate-700 text-slate-100 border-slate-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-200">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-slate-700 text-slate-100 border-slate-600"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full bg-teal-500 text-slate-900 hover:bg-teal-400">
              Sign Up
            </Button>
            <p className="text-center text-slate-400 mt-4">
              <button type="button" onClick={toggleLoginModal} className="text-teal-400 hover:underline">
                Already Have an Account?
              </button>
            </p>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm text-slate-400">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </CardFooter>
      </Card>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-slate-800 p-6 rounded-lg max-w-md w-full">
            <h2 className="text-teal-400 text-xl font-bold text-center mb-4">Login to WomenRise</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="login-email" className="text-slate-200">Email</Label>
                <Input 
                  id="login-email" 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-slate-700 text-slate-100 border-slate-600"
                  required
                />
              </div>
              <div>
                <Label htmlFor="login-password" className="text-slate-200">Password</Label>
                <Input 
                  id="login-password" 
                  type="password" 
                  placeholder="Enter your password"
                  className="bg-slate-700 text-slate-100 border-slate-600"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="w-full bg-teal-500 text-slate-900 hover:bg-teal-400">
                Login
              </Button>
            </form>
            <Button 
              onClick={toggleLoginModal} 
              className="w-full mt-4 bg-red-500 text-slate-100 hover:bg-red-400">
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

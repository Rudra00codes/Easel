import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { loginSuccess } from '@/store/slices/authSlice';
import { useToast } from '../common/ToastProvider';
import Input from '../common/Input';
import Button from '../common/Button';
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      dispatch(loginSuccess(data));
      showToast('success', 'Registration successful');
      navigate('/');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Registration failed';
      showToast('error', message);
    }
  };

  return (
    <div className="relative h-full w-full bg-slate-950 overflow-hidden"> {/* Main container for background and centered content */}
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"/>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"/>
      <div className="flex min-h-screen items-center justify-center p-6 md:p-10"> {/* Centering container for the form */}
        <Card className="w-full max-w-sm rounded-lg bg-[#14141d] p-0 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold text-white">Create your account</h1>
                <p className="text-muted-foreground text-sm text-[#a0a0b0]">
                  Or{" "}
                  <Link to="/login" className="font-medium text-[#7a8fe8] hover:underline">
                    sign in to your account
                  </Link>
                </p>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jon Snow"
                  label="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  leftIcon={<FiUser className="h-5 w-5 text-gray-400" />}
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  label="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  leftIcon={<FiMail className="h-5 w-5 text-gray-400" />}
                />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  label="Password"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                  leftIcon={<FiLock className="h-5 w-5 text-gray-400" />}
                />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  label="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  leftIcon={<FiLock className="h-5 w-5 text-gray-400" />}
                />
                <div className="flex items-center space-x-2 mt-2">
                  <input
                    type="checkbox"
                    id="updates"
                    className="h-4 w-4 rounded border-[#3a3a4c] bg-[#2a2a3a] text-[#7a8fe8] focus:ring-[#7a8fe8] focus:ring-offset-0"
                  />
                  <label htmlFor="updates" className="text-sm text-[#a0a0b0]">
                    I want to receive updates via email.
                  </label>
                </div>
                <Button type="submit" className="w-full bg-[#4a63f7] text-white hover:bg-[#3a52d9]">
                  Sign up
                </Button>
              </form>
              <div className="after:border-[#3a3a4c] relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-[#14141d] text-[#a0a0b0] relative z-10 px-2">
                  or
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="outline" type="button" className="w-full border-[#3a3a4c] bg-[#1a1a2a] text-white hover:bg-[#2a2a3a]">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.24 10.22h6.86c0 .48.06 1.4-.24 2.16-1.04 2.88-3.4 4.96-6.62 4.96-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5c2.08 0 3.86.88 5.12 2.08l2.5-2.48c-1.84-1.7-4.24-2.78-6.62-2.78-5.74 0-10.42 4.68-10.42 10.42S6.5 22.5 12.24 22.5c6.38 0 10.16-4.5 10.16-9.68 0-.68-.06-1.28-.16-1.82H12.24z"/>
                  </svg>
                  Sign up with Google
                </Button>
                <Button variant="outline" type="button" className="w-full border-[#3a3a4c] bg-[#1a1a2a] text-white hover:bg-[#2a2a3a]">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0001 2.00012C6.47648 2.00012 2.00012 6.47648 2.00012 12.0001C2.00012 17.5238 6.47648 22.0001 12.0001 22.0001C17.5238 22.0001 22.0001 17.5238 22.0001 12.0001C22.0001 6.47648 17.5238 2.00012 12.0001 2.00012ZM15.4201 17.2001C15.4201 17.2001 15.1701 17.9001 14.5401 17.9001C13.9101 17.9001 13.0601 17.3801 12.0001 16.0301C10.9401 17.3801 10.0901 17.9001 9.46012 17.9001C8.83012 17.9001 8.58012 17.2001 8.58012 17.2001C8.58012 17.2001 8.83012 15.6501 10.0201 14.2801C11.2101 12.9101 12.0001 11.5101 12.0001 10.4201C12.0001 9.22012 11.6901 8.85012 11.1901 8.85012C10.6901 8.85012 9.87012 9.40012 9.07012 10.3901C8.27012 11.3801 8.00012 12.0001 8.00012 12.0001L7.14012 12.0001C7.14012 12.0001 7.18012 10.4001 8.00012 9.17012C8.82012 7.94012 10.0001 7.00012 12.0001 7.00012C14.0001 7.00012 15.1801 7.94012 16.0001 9.17012C16.8201 10.4001 16.8601 12.0001 16.8601 12.0001L16.0001 12.0001C16.0001 12.0001 15.7301 11.3801 14.9301 10.3901C14.1301 9.40012 13.3101 8.85012 12.8101 8.85012C12.3101 8.85012 12.0001 9.22012 12.0001 10.4201C12.0001 11.5101 12.7901 12.9101 13.9801 14.2801C15.1701 15.6501 15.4201 17.2001 15.4201 17.2001Z" fill="currentColor"/>
                  </svg>
                  Sign up with Apple
                </Button>
              </div>
              <div className="text-center text-sm text-[#a0a0b0]">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-[#7a8fe8] hover:underline">
                  Sign in
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register; 
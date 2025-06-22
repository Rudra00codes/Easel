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

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12.24 10.22h6.86c0 .48.06 1.4-.24 2.16-1.04 2.88-3.4 4.96-6.62 4.96-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5c2.08 0 3.86.88 5.12 2.08l2.5-2.48c-1.84-1.7-4.24-2.78-6.62-2.78-5.74 0-10.42 4.68-10.42 10.42S6.5 22.5 12.24 22.5c6.38 0 10.16-4.5 10.16-9.68 0-.68-.06-1.28-.16-1.82H12.24z" />
    </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
      />
    </svg>
);

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
                  <GoogleIcon className="mr-2 h-4 w-4" />
                  Sign up with Google
                </Button>
                <Button variant="outline" type="button" className="w-full border-[#3a3a4c] bg-[#1a1a2a] text-white hover:bg-[#2a2a3a]">
                  <GithubIcon className="mr-2 h-4 w-4" />
                  Sign up with GitHub
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
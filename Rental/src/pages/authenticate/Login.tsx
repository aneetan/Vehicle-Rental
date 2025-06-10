import React, { useState } from 'react';
import Button, { ButtonType } from '../../components/custom/Button';
import Image from '../../assets/images/image.png'
import Logo from '../../components/Logo';
import { FcGoogle } from "react-icons/fc";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth';
import { useNavigate } from 'react-router';
import { firebaseLoginErrorMessages } from '../../firebase/firebaseErrors';

interface User{
  email: string,
  password: string
}

const Login = () => {
  const [formData, setFormData] = useState<User>({
    email: '',
    password: ''
  });

  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await doSignInWithEmailAndPassword(formData);
      navigate("/");
    } catch (e: unknown) {
      let message = "An unknown error occurred";
      if (typeof e === "object" && e !== null && "code" in e) {
        const err = e as { code: string; message: string };
        message = firebaseLoginErrorMessages[err.code] || err.message || message;
      } else if (e instanceof Error) {
        message = e.message;
      }
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async(e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsGoogleLoading(true);
     try {
      await doSignInWithGoogle();
      console.log("Logij with google")
      navigate('/');
    } catch (err) {
      console.error(err);
    } finally {
      setIsGoogleLoading(false);
    } 
  }

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-50 p-12">
      <div className="flex flex-col md:flex-row w-[70%] bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side - Image with Text */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
          <div className="text-black text-center">
            <Logo/>
            <p className="text-base mt-4 mb-6">Sign in to access your account and continue your journey with us.</p>
          </div>
          <div className='w-full'>
            <img src={Image} alt='img'/>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login to Rent-ALL</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <span className='text-red-500 text-sm'> {error}</span>}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password" 
                id="password"
                name='password'
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-[var(--primary-color)] border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">Remember me</label>
              </div>
              <a href="#" className="text-sm text-[var(--primary-color)] hover:text-[var(--primary-color)]">Forgot password?</a>
            </div>

            <Button variant={ButtonType.primary}
              className="w-full bg-[var(--primary-color)] hover:bg-[var(--primary-color)] text-white font-medium py-3 px-4 rounded-lg transition duration-200"
            >
              Login
            </Button>

             <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                  </div>
              </div>
  
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition duration-200"
            >
              <FcGoogle className="text-xl" />
              Sign in with Google
            </button>

            <div className="text-center text-sm text-gray-500">
              Don't have an account?{' '}
              <a href="/register" className="text-[var(--primary-color)] hover:text-[var(--primary-color-hover)] hover:underline transition-normal font-medium"> Register </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
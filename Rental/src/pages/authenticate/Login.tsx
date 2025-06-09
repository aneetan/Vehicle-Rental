import React from 'react';
import Button, { ButtonType } from '../../components/custom/Button';
import Image from '../../assets/images/image.png'
import Logo from '../../components/Logo';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted');
  };

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
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password" 
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-[var(--primary-color)] focus:ring-[var(--primary-color)] border-gray-300 rounded"
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
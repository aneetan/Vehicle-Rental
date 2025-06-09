import React from 'react';
import Button, { ButtonType } from '../../components/custom/Button';
import Image from '../../assets/images/register.png';
import Logo from '../../components/Logo'; 

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted');
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-50 p-12">
      <div className="flex flex-col md:flex-row w-[80%] bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side - Image with Text */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
          <div className="text-black text-center">
            <Logo />
            <h1 className="text-2xl font-semibold mt-4">Create Your Account</h1>
            <p className="text-base mt-2 mb-6">Join our community and start your journey with us.</p>
          </div>
          <div className='w-full'>
            <img src={Image} alt='Registration illustration' className="w-full h-auto" />
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Register to Rent-ALL</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Enter your full name"
                required
              />
            </div>

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
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Create a password"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 8 characters with at least one number</p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Confirm your password"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-[var(--primary-color)] focus:ring-[var(--primary-color)] border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="#" className="text-[var(--primary-color)] hover:underline">Terms of Service</a> and <a href="#" className="text-[var(--primary-color)] hover:underline">Privacy Policy</a>
              </label>
            </div>

            <Button 
              variant={ButtonType.primary}
              className="w-full bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)] text-white font-medium py-3 px-4 rounded-lg transition duration-200 mt-6"
            >
              Create Account
            </Button>

            <div className="text-center text-sm text-gray-500 pt-4">
              Already have an account?{' '}
              <a href="/login" className="text-[var(--primary-color)] hover:text-[var(--primary-color-hover)] hover:underline font-medium">Login</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
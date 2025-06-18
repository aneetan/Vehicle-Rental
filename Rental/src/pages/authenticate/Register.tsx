import React, { useState } from 'react';
import Button, { ButtonType } from '../../components/custom/Button';
import Image from '../../assets/images/register.png';
import Logo from '../../components/Logo'; 
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { GLOBAL_URL } from '../../config/url';

interface UserDetails {
  email: string;
  password:string;
  fullName: string;
  phone: string;
  confirmPassword: string;
  termsAccepted: boolean;
}

interface ErrorProps{
  fullName: string,
  email: string,
  phone: string,
  password: string,
  confirmPw: string,
  firebase: string,
  terms: string
}


const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserDetails>({
      email: '',
      password: '',
      fullName: '',
      phone: '',
      confirmPassword: '',
      termsAccepted: false
    });
  const [errors, setErrors] = useState<ErrorProps>({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPw: '',
    firebase: '',
    terms: ''
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    setErrors({
      ...errors,
      [name] : ''
    });
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors = {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPw: '',
      firebase: '',
      terms: ''
    };

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Password validation
    const passwordValidation = validatePassword(formData.password);
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.message;
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^\+?[0-9\s\-]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    // Confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPw = 'Passwords do not match';
      isValid = false;
    }

    //terms validation
     if (!formData.termsAccepted) {
      newErrors.terms = "Please accept the Terms of Service and Privacy Policy";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return {
      isValid: password.length >= 8 && hasUpperCase && hasNumber && hasSymbol,
      message: 'Password must be at least 8 characters with 1 uppercase, 1 number, and 1 symbol'
    };
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if(validateForm()){
      const data = {
        email: formData.email,
        fullName: formData.fullName,
        password: formData.password,
        phone: formData.phone
      }

      //Make the post request to server
      axios.post(`${GLOBAL_URL}/users`, data)
        .then(response => {
          navigate('/login')
        })
        .catch(error => {
          console.log(error)
        })
    // Clear previous Firebase error
      setErrors(prev => ({ ...prev, firebase: '' }));

     try {
        const result = await doCreateUserWithEmailAndPassword({
          email: formData.email,
          password: formData.password
        });
        console.log('Registration successful', result.user);
        navigate('/'); 
      } catch (error) {
         if (typeof error === 'object' && error !== null && 'code' in error) {
            const err = error as { code: string; message: string };
            switch (err.code) {
              case 'auth/email-already-in-use':
                setErrors(prev => ({ ...prev, firebase: 'Email already in use' }));
                break;
              case 'auth/weak-password':
                setErrors(prev => ({ ...prev, password: 'Password is too weak' }));
                break;
              case 'auth/invalid-email':
                setErrors(prev => ({ ...prev, email: 'Invalid email format' }));
                break;
              default:
                setErrors(prev => ({ ...prev, firebase: err.message }));
            }
          } else if (error instanceof Error) {
            setErrors(prev => ({ ...prev, firebase: error.message }));
          } else {
            setErrors(prev => ({ ...prev, firebase: 'An unknown error occurred' }));
          }
      }
    }
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
              {errors.firebase && <p className='text-red-500'> {errors.firebase}</p>}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                name='fullName'
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className='text-red-500 text-sm'> {errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="text"
                name='email'
                value={formData.email}
                onChange={handleChange}
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
              {errors.email && <p className='text-red-500 text-sm'> {errors.email} </p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                name='phone'
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className='text-red-500 text-sm'> {errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                name='password'
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Create a password"
              />
              {errors.password && <p className='text-red-500 text-sm'> {errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Confirm your password"
              />
              {errors.confirmPw && <p className='text-red-500 text-sm'> {errors.confirmPw}</p>}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name='termsAccepted'
                checked= {formData.termsAccepted}
                onChange={handleChange}
                className="h-4 w-4 text-[var(--primary-color)] focus:ring-[var(--primary-color)] border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="#" className="text-[var(--primary-color)] hover:underline">Terms of Service</a> and <a href="#" className="text-[var(--primary-color)] hover:underline">Privacy Policy</a>
              </label>
            </div>
                {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}


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
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        email: email,
        password: password,
      });

      // Assuming your server sends a success message upon successful login
      if (response.data.message === 'Login successful') {
        // Redirect or perform any action upon successful login
        navigate('/Home'); // Change the path as needed
      } else {
        setError('Invalid email or password'); // Update state with error message
      }
    } catch (error) {
      console.error(error);
      setError('Internal Server Error'); // Update state with error message
    }
  };
  return (
    <div className='w-full h-screen'>
      <img
        className='hidden sm:block absolute w-full h-full object-cover'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg'
        alt='/'
      />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Login</h1>
            <form className='w-full flex flex-col py-4'>
            <input
          className='p-3 my-2 bg-gray-700 rounded'
          type='email'
          placeholder='Email'
          autoComplete='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='p-3 my-2 bg-gray-700 rounded'
          type='password'
          placeholder='Password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type='button'
          onClick={handleSignIn}
          className='bg-red-600 py-3 my-6 rounded font-bold text-center'
        >
          Login
        </button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p>
                  <input className='mr-2' type='checkbox' />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className='py-8'>
                <span className='text-gray-600'>New to Netflix?</span>{' '}
                <Link to='/Signup'>Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [userIdError, setUserIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // prevent the default form submission behavior

    // Check if the user ID and password are correct
    if (userId === 'admin' && password === '1234') {
      // Redirect the user to the new_request form
      navigate('/New_Request');
    } else {
      // Set error messages for invalid inputs
      if (userId !== 'admin') {
        setUserIdError('Invalid user ID');
      } else {
        setUserIdError('');
      }

      if (password !== '1234') {
        setPasswordError('Invalid password');
      } else {
        setPasswordError('');
      }
    }
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
    setUserIdError(''); // Reset error message
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(''); // Reset error message
  };

  return (
    <div className='body'>
      <div className='logincontainer'>
        <div className='login'>
          <div className='content'>
            <img src={require('../img/imgpc.png')} alt='imagee' />
          </div>

          <form onSubmit={handleLogin}> 
            <div className='title'>SLT GATE PASS</div>
            <div className='user-details'>
              <div className='input-box'>
                <span className='details'>User ID</span>
                <input
                  type='text'
                  placeholder='Enter User ID'
                  value={userId}
                  onChange={handleUserIdChange}
                  required
                />
                {userIdError && <p className='error-messageuserid'>{userIdError}</p>}
              </div>
              <div className='input-box'>
                <span className='details'>Password</span>
                <input
                  type='password'
                  placeholder='Enter Password'
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                {passwordError && <p className='error-messagepassowrd'>{passwordError}</p>}
              </div>
              <div>
                <button className='logbtn' type='submit'>
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

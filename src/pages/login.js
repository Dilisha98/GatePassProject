import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    
    // Check if the user ID and password are correct
    if (userId === 'dilisha' && password === '1234') {
      // Redirect the user to the new_request form
      navigate('/New_Request');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className='body'>
    <div className='logincontainer'>
      <div className='login'>
        <div className='content'>
          <img src={require('../img/imgpc.png')} alt='imagee' />
        </div>

        <form>
          <div className='title'>SLT GATE PASS</div>
          <div className='user-details'>
            <div className='input-box'>
              <span className='details'>User ID</span>
              <input type='text' placeholder='Enter User ID' value={userId} onChange={handleUserIdChange} required />
            </div>
            <div className='input-box'>
              <span className='details'>Password</span>
              <input type='password' placeholder='Enter Password' value={password} onChange={handlePasswordChange} required />
            </div>
            <div>
              <button className='logbtn' type='button' onClick={handleLogin}>
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

 
/*<div class="login">
            <div className='content'>
            <img src={require('../img/imgpc.jpg')} alt="imagee" />
            </div>
            <div className='loginform'>
                <h1>SLT GATE PASS</h1>
                <form>
                <div class="tbox">
                        <input type="text" name="" class="" placeholder="Enter Serial Number"/>
                    </div>
                    
                    <div class="tbox">
                        <input type="text" name="" class="" placeholder="Enter Pin Number"/>
                    </div>
                        <button className='btn'> Save </button>
                </form>
            </div>
        </div> */
import React, { useState } from 'react'
// Import Parse minified version
import Parse from 'parse/dist/parse.min.js';
import UploadMusic from './UploadMusic';
import './admin.css'
import UploadVideo from './UploadVideo';
import UploadNews from './UploadNews';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'zhHGEWNxZinpU9x6khFTTJsnPzWFP8Z095UXIgEH';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'r1WuXQrw1fGKDcCgBvtO3QI4opo2T0jtZXi8UfvE';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

const AdminLogin = () => {
  // State variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  // Function that will return current user and also update current username
  const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    // Update state variable holding current user
    setCurrentUser(currentUser);
    return currentUser;
  };

  const doUserLogIn = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = username;
    const passwordValue = password;
    try {
      const loggedInUser = await Parse.User.logIn(usernameValue, passwordValue);
      // logIn returns the corresponding ParseUser object
     
      // To verify that this is in fact the current user, `current` can be used
      const currentUser = await Parse.User.current();
      console.log(loggedInUser === currentUser);
      // Clear input fields
      setUsername('');
      setPassword('');
      // Update state variable holding current user
      getCurrentUser();
      return true;
    } catch (error) {
      // Error can be caused by wrong parameters or lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const doUserLogOut = async function () {
    try {
      await Parse.User.logOut();
      // To verify that current user is now empty, currentAsync can be used
      const currentUser = await Parse.User.current();
      if (currentUser === null) {
        console.log('User logged out');
      }
      // Update state variable holding current user
      getCurrentUser();
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };
  return (
    <div>
      {currentUser === null && (
        <center>
          <div className="container">
            <h2 className="heading">{'Admin Login'}</h2>
            <hr />
            <div className="form_wrapper">
              <label for='email'>Email Address</label>
              <input
                className='text1'
                id='email'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Your email"
                size="large"
              /><br />
              <label for='password'>Password</label>
              <input
                className='text1'
                id='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                size="large"
                type="password"
              />
            </div>
            <div className="form_buttons">
              <button
                onClick={() => doUserLogIn()}
                type="primary"
                color={'#fff'}
                size="small"
                className='btn2'
              >
                Log In
              </button>
            </div>
          </div>
        </center>
      )}
  
      {currentUser !== null &&
        (<div className="user-container">
          <h2 className="heading">{'Admin Screen'}</h2>
          <h2 className="heading">{`Hello ${currentUser.get('username')}!`}</h2>
          <div className="form_buttons">
            <button
              onClick={() => doUserLogOut()}
              type="primary"
              className="form_button"
              color={'#208AEC'}
              size="large"
            >
              Log Out
            </button>
          </div>
          <UploadMusic />
          <UploadVideo />
          <UploadNews />
        </div>)
      }
    </div>
  )
}

export default AdminLogin
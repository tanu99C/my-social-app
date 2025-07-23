import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';  // Make sure this is your correct path
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


const Login = () => {

 const [state, dispatch]= useStateValue();


  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER, 
          user: result.user,
        })
        console.log("User signed in:", result.user);
      })
      .catch((error) => {
        console.error("Error during sign-in:", error.message);

      });
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img src="./flogo.png" alt="Facebook Logo" />
        <img src="./text.png" alt="Facebook Text" />
      </div>
      <button type="submit" onClick={signIn}>Sign In</button>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

import Form from "./Form";

const App = () => {

  const [user, setUser] = useState(null);

  const handleLogin = (response) => {
    const data = jwt_decode(response.credential);
    setUser(data);
  }

  const handleFailure = (error) => {
    console.log('Login Fail', error);
  }

  const handleLogout = () => {
    console.log('Your are log out');
    setUser(null);
  }

  return (

    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_API_KEY}
    >
      <div className="container small-container">
        {
          !user ? (
            <div className="content-wrapper">
              <h2 className="form-title">Sign in to Smile Afric</h2>
              <div className="login-logo">
                <GoogleLogin
                  onSuccess={handleLogin}
                  onError={handleFailure}
                />
              </div>
              <Form />
            </div>
          ) : (
            <div className="content-wrapper">
              <div className="content-header">
                <img src={user.picture} alt={user.picture} />
              </div>
              <h2>Welcome {user.name}</h2>
              <p>Your logged in as {user.email} </p>
              <button onClick={handleLogout}>logout</button>
            </div>
          )
        }
      </div>
    </GoogleOAuthProvider>

  );
};

export default App;


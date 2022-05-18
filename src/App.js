import React, { useEffect, useState } from "react";
import Login from "./Component/Login/Login";
import "./App.css";
import Notfound from "./Component/Notfound/Notfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useToken from './Component/useToken';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

function App() {
  const { token, setToken } = useToken();

  const [viewOtpForm, setViewOtpForm] = useState(false);
  const [user, setUser] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyDjkljcSEMIo606FH54T6Ru1bWCqMpzmgY",
    authDomain: "cmnreact-eb742.firebaseapp.com",
    projectId: "cmnreact-eb742",
    storageBucket: "cmnreact-eb742.appspot.com",
    messagingSenderId: "202979541848",
    appId: "1:202979541848:web:88a78d31cd6fc595141b2d"
  };

  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  }, []);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const auth = firebase.auth();

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });

  const loginSubmit = (mobile) => {
   // e.preventDefault();
  console.log(mobile);
   // let phone_number = "+91" + e.target.mobile.value;
    let phone_number = mobile;
    const appVerifier = window.recaptchaVerifier;

    auth
      .signInWithPhoneNumber(phone_number, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log("otp sent");
        setViewOtpForm(true);
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        alert(error.message);
      });
  };

  const otpSubmit = (setOtp) => {
    //e.preventDefault();
    console.log(setOtp);
    let opt_number = setOtp;

    window.confirmationResult
      .confirm(opt_number)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        console.log("success");
        window.open("/new", "_self");
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert(error.message);
      });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.open("/", "_self");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  // if (!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
   
      <BrowserRouter>
       <div id="recaptcha-container"></div>
        <Routes>
          <Route path="/" element={<Login setToken={setToken} loginSubmit={loginSubmit}
            otpSubmit={otpSubmit}
            viewOtpForm={viewOtpForm} />} />
          <Route path="/new" element={<Notfound signOut={signOut} user={user}/>}/>
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./Login.css";
import loginImg from "../../images/login.png";
import logo from "../../images/logo.png";
import otpimg from "../../images/otp.png";
import Vector from "../../images/Vector.png";
import Shape from "../../images/Shape.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PropTypes from 'prop-types';
import OtpInput from 'react-otp-input';

const loginUser = async (credentials) => {
  return fetch('https://7xgg2kbpik.execute-api.us-east-2.amazonaws.com/dev/auth/signup/mobile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json());
}

const Login = ({ setToken, loginSubmit, otpSubmit, isSubmitting, viewOtpForm, otpFormReset }) => {
  const initialValues = { mobile: "", countrycode: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [otp, setOtp] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (viewOtpForm) {
      setCounter(10);
    }
  }, [viewOtpForm]);

  const handleChange = (value, country, event) => {
    if (value != country.dialCode) {
      setFormValues({ ...formValues, ['mobile']: value, ['countrycode']: country.dialCode });
    }
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    if (otp != "" && otp != null && otp.length == 6) {
      otpSubmit(otp);
    }
  };

  const resendOtp = (e) => {
    handleSubmit(e);
  };

  // Edit mobile number on otp screen to fire new otp
  const changeMobile = () => {
    setCounter(10);
    setFormValues({ ...formValues, ['mobile']: "", ['countrycode']: "" });
    setFormErrors({});
    setIsSubmit(false);
    setOtp('');
    otpFormReset();
  };

  // Phone number verify and send otp
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (formValues.mobile !== "" && formValues.mobile !== null) {
      console.log('submit', formValues.mobile);
      setIsSubmit(true);
      loginSubmit("+" + formValues.mobile);
      // const response = await loginUser(formValues);
      // if (response.status === true) {
      //   setToken(response.data.token);
      //   navigate('/otp');
      // }
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    if (!regex.test(values.mobile)) {
      errors.mobile = "Enter valid mobile number!";
    } else if (!values.mobile) {
      errors.mobile = "Mobile is required!";
    }
    return errors;
  };

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <div className="login">
        <div className="login_wrapper">
          <div className="image">
            <img src={loginImg} alt="login" />
          </div>
          <div className="right_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            {!viewOtpForm ? (
              <div>
                <div className="reward">
                  <div className="vector">
                    <img src={Vector} alt="vector" />
                  </div>
                  <p>Claim Your Reward</p>
                </div>
                <form onSubmit={handleSubmit} >
                  <div className="mobile">
                    <div className="phonenumber">
                      <PhoneInput
                        className="inputMobile" id="inputMobile"
                        placeholder="Enter phone number"
                        countryCodeEditable={false}
                        country={"in"}
                        value={formValues.mobile}
                        onChange={handleChange}
                        inputExtraProps={{
                          name: 'mobile',
                        }}
                      />
                    </div>

                    <div className="submitbtn">
                      {isSubmitting ? (
                        <div className="spinner-border text-light"></div>
                      ) : (
                        <button type="submit" style={{ outline: 'none', border: 'none', background: 'none' }}>
                          <div className="next">
                            <div className="images">
                              <img src={Shape} alt="flag" />
                            </div>
                          </div>
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="mobile">
                    <div className="errorMesssage">
                      <p>{formErrors.mobile}</p>
                    </div>
                  </div>
                </form>
              </div>) : (
              <div>
                <div className="verification">
                  <div className="vector">
                    <img src={otpimg} alt="vector" />
                  </div>
                  <p>Enter 6 digit Verification code</p>
                </div>
                <form onSubmit={verifyOTP}>
                  <div className="verification_code">
                    <OtpInput className="code"
                      value={otp}
                      onChange={setOtp}
                      numInputs={6}
                      autoFocus
                      disabled={false} secure
                    />
                  </div>

                  <div className="resend_code">
                    <p>verify code in 00:{counter}</p>
                  </div>

                  <div className="wrong_code">
                    <p>
                      Wrong number ?<span className="editMobile" onClick={changeMobile}>Edit</span>
                    </p>
                  </div>
                  <div className="next_btn">
                    {(counter !== 0 && otp.length === 6) && (
                      <button type="submit" className="btn btn-primary">
                        Next
                      </button>)}
                    {(counter === 0) && (
                      <button onClick={resendOtp} className="btn btn-danger" style={{ outline: 'none', border: 'none' }}>Resend</button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div >
    </>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;

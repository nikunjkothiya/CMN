import React from "react";
import "./Otp.css";
import loginImg from "../../images/login.png";
import logo from "../../images/logo.png";
import otp from "../../images/otp.png";

const Otp = () => {
  return (
    <>
      <div className="otp">
        <div className="otp_wrapper">
          <div className="image">
            <img src={loginImg} alt="login" />
          </div>

          <div className="right_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="verification">
              <div className="vector">
                <img src={otp} alt="vector" />
              </div>
              <p>Enter 4 digit Verification code</p>
            </div>

            <div className="verification_code">
              <div className="code"></div>
              <div className="code"></div>
              <div className="code"></div>
              <div className="code"></div>
            </div>

            <div className="resend_code">
              <p>Resend code in 00:20</p>
            </div>

            <div className="wrong_code">
              <p>
                Wrong number ?<span> Edit</span>
              </p>
            </div>

            <div className="next_btn">
              <button type="button" className="btn btn-primary">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;

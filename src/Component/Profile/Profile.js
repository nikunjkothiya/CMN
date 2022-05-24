import React from "react";
import Header from "../Header/Header";
import "./Profile.css";
import profilebg from "../../images/profile-bg.png";
import user from "../../images/profile.png";
import bgshape from "../../images/bg-shape.png";
import bgshape1 from "../../images/bg-shape-1.png";
import fb from "../../images/fb.png";
import insta from "../../images/insta.png";
import tele from "../../images/tele.png";
import twitter from "../../images/twitter.png";
import hub from "../../images/hub.png";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="profile-section">
        <div className="profile-shape">
          <img src={bgshape} alt="bg" />
        </div>
        <div className="profile-shape-1">
          <img src={bgshape1} alt="bg" />
        </div>

        <div className="profile-title">
          <p>Profile</p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-11 col-12 mx-auto">
              <div className="profile-contant">
                {/* <div className="wrapper-flex"> */}
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="image ">
                      <img src={profilebg} alt="bg" />
                    </div>
                  </div>
                  {/* line */}
                  <div className="col-md-1">
                    <div className="line"></div>
                  </div>
                  {/* user-details */}
                  <div className="col-md-5">
                    <div className="profile-details">
                      <div className="profile-img">
                        <div className="user-image">
                          <img src={user} alt="profile" />
                        </div>
                        <div className="balance">
                          <div className="bal">Your Balanace</div>
                          <div className="point">
                            <p>100 </p>
                            <span>CMN</span>
                          </div>
                        </div>
                      </div>

                      <form className="form-details">
                        <div className="mb-3">
                          <label for="username" className="label mb-1">
                            Username
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label for="email" className="label mb-1">
                            Email id
                          </label>
                          <input type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label for="phone" className="label mb-1">
                            Phone Number
                          </label>
                          <input type="phone" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label for="location" className="label mb-1">
                            Location
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>

          <div className="social-link">
            <p>Follow Us</p>
            <img src={fb} alt="fb" />
            <img src={insta} alt="insta" />
            <img src={tele} alt="tele" />
            <img src={twitter} alt="twitter" />
            <img src={hub} alt="hub" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

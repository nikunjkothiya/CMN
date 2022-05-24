import React from "react";
import Header from "../Header/Header";
import main from "../../images/bg-main.png";
import bgshape from "../../images/bg-shape.png";
import bgshape1 from "../../images/bg-shape-1.png";

import "./Rewards.css";
import Activity from "../Activity/Activity";
import Faqs from "../Faqs/Faqs";

const Rewards = () => {
  return (
    <>
      <Header />
      <div className="main-section">
        <div className="bg-shape">
          <img src={bgshape} alt="bg" />
        </div>
        <div className="bg-shape-1">
          <img src={bgshape1} alt="bg" />
        </div>

        <div className="balance">
          <div className="balance-box">
            <div className="title">
              <p className="main-title">MCMN Balance</p>
              <div className="number">
                <div className="MCMN">
                  <p>100</p>
                  <span>MCMN</span>
                </div>
                <p className="equal">=</p>
                <div className="MCMN">
                  <p>100</p>
                  <span>CMN</span>
                </div>
              </div>
              <div className="claim-btn">
                <button className="btn btn-primary">claim</button>
              </div>
            </div>
            <div className="iamges">
              <img src={main} alt="img" />
            </div>
          </div>
        </div>

        {/* Reward Bonus */}
        <div className="container">
          <div className="reward-bonus">
            <div className="title">
              <p>Reward Bouns</p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="reward-box">
                  <p className="head">Profile Complete</p>
                  <p className="point">+9 Points</p>
                  <button className="btn btn-primary">claim</button>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="reward-box"
                  style={{ backgroundColor: "#7381FF" }}
                >
                  <p className="head">Signup Bonus</p>
                  <p className="point">+9 Points</p>
                  <button className="btn btn-primary">claim</button>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="reward-box"
                  style={{ backgroundColor: "#F5C361" }}
                >
                  <p className="head">Holder Bonus</p>
                  <p className="point">+9 Points</p>
                  <button className="btn btn-primary">claim</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Activity />
      <Faqs />
    </>
  );
};

export default Rewards;

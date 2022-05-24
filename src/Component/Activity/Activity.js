import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./Activity.css";

const Activity = () => {
  return (
    <>
      <div className="container">
        <div className="activity-section">
          <div className="activity-title">
            <p>Your Activity</p>
          </div>

          <div className="main-activity">
            {data &&
              data.map((item) => {
                return (
                  <div className="activity-content" key={item.id}>
                    <div className="liked">
                      <p>{item.liked}</p>
                    </div>
                    <div className="heading">
                      <div className="title">
                        <p>{item.title}</p>
                      </div>
                      <div className="points">
                        <p>{item.points}</p>
                      </div>
                    </div>
                    <div className="time">
                      <span>{item.credited}</span>
                      <span>{item.expire}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;

const data = [
  {
    liked: "Article Liked",
    title: "Walmart announces its own cryptocurrency and NFT sale",
    points: "+9 points",
    credited: "Credited on 24-5-22",
    expire: "Expires on 24-6-22",
  },
  {
    liked: "Article Liked",
    title: "Walmart announces its own cryptocurrency and NFT sale",
    points: "+9 points",
    credited: "Credited on 24-5-22",
    expire: "Expires on 24-6-22",
  },
  {
    liked: "Article Liked",
    title: "Walmart announces its own cryptocurrency and NFT sale",
    points: "+9 points",
    credited: "Credited on 24-5-22",
    expire: "Expires on 24-6-22",
  },
  {
    liked: "Article Liked",
    title: "Walmart announces its own cryptocurrency and NFT sale",
    points: "+9 points",
    credited: "Credited on 24-5-22",
    expire: "Expires on 24-6-22",
  },
];

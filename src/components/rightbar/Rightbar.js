import React from "react";
import { Cake } from "@mui/icons-material";
import "./rightbar.css";
const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="brithdayContainer">
          <Cake className="birthdayImg" />
          <span className="brithdayText">
            <b>pola foster</b> and <b>three onther friends</b> have a birthday
            today
          </span>
        </div>
        <img
          className="rightbarAd"
          src="/assets/post/pexels-photo-5199144.jpeg"
          alt=""
        />
        <h4 className="rightbarTitle">Online Friend</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/profile3.jpeg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">john carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/profile3.jpeg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">john carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/profile3.jpeg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">john carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/profile3.jpeg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">john carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/profile3.jpeg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">john carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/profile3.jpeg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">john carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/profile3.jpeg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">john carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/profile3.jpeg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">john carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;

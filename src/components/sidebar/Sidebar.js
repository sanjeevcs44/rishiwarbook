import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  Videocam,
  Group,
  Bookmark,
  HelpOutline,
  School,
  WorkOutline,
  Event,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <Videocam className="sidebarIcon" />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmart</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">show more</button>
        <hr className="sidebarHr " />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/profile2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">john doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/profile2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">john doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/profile2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">john doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/profile2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">john doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/profile2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">john doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/profile2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">john doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/profile2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">john doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/profile2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">john doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/profile2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">john doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/profile2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">john doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/profile2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">john doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/profile2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">john doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

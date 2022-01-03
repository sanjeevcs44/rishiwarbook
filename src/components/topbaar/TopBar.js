import "./topbar.css";

import { Search, ChatBubble, Person, Notifications } from "@mui/icons-material";

const TopBar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">RishishwarBook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            className="searchInput"
            placeholder="search for friend post and any video "
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">HomePage</span>
          <span className="topbarLinks">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <ChatBubble />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/profile1.jpeg" alt=" " className="topbarImg" />
      </div>
    </div>
  );
};

export default TopBar;

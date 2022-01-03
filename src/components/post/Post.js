import React from "react";
import { MoreVert, ThumbUp, Favorite } from "@mui/icons-material";
import "./post.css";
const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/profile1.jpeg"
            />
            <span className="postUserName">sanjeev sharma</span>
            <span className="postDate">5 minute ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey It's My First Post</span>
          <img
            src="/assets/post/pexels-photo-3016696.jpeg"
            className="postImg"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUp className="likeIcon" htmlColor="blue" />
            <Favorite className="likeIcon" htmlColor="red" />
            <span className="postLikeCounter">32 people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">52 people comment it </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;

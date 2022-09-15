import React from "react";
import Post from "./Post";
import "./Posts.css";
function Posts({ posts, userId }) {
  const IMAGE_URL = "https://api.lorem.space/image/watch?w=332&h=188&val=";

  let count = 0;
  const counter = () => {
    return count++;
  };
  return (
    <div className="posts-flex">
      
      <div className="lines"></div>
      {posts.length == 0 ? (
        <div className="no-users">
          <p className="posts-no-posts">No User selected</p>
        </div>
      ) : (
        <div className="each-post">
          {posts.map((post) => (
            <Post
              post={post}
              key={post.id}
              IMAGE_URL={IMAGE_URL + userId + counter()}
              className='post-col'
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;

import React from 'react'
import "./Post.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div className='post'>
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                <span className='name'> {post.name} </span>
              </Link>
                <span className='date'>1 minute ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p> {post.desc} </p>
          <img src={post.img} alt="" />
        </div>
        <div className="info"></div>
      </div>
    </div>
  )
}

export default Post

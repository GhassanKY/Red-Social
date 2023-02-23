import React, { useContext } from "react";
import "./leftbar.scss";
import Friends from "../../../assets/1.png";
import Groups from "../../../assets/2.png";
import Market from "../../../assets/3.png";
import Watch from "../../../assets/4.png";
import Memories from "../../../assets/5.png";
import Events from "../../../assets/6.png";
import Gaming from "../../../assets/7.png";
import Gallery from "../../../assets/8.png";
import Videos from "../../../assets/9.png";
import Message from "../../../assets/10.png";
import Tutorials from "../../../assets/11.png";
import Courses from "../../../assets/12.png";
import Fund from "../../../assets/13.png";
import { AuthContext } from "../../../context/authContext";

const Leftbar = () => {

  const {currentUser} = useContext(AuthContext);


  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt="Perfil"
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
          <hr></hr>
          <div className="menu">
            <span>Shortcut</span>
            <div className="item">
              <img src={Events} alt="" />
              <span>Events</span>
            </div>
            <div className="item">
              <img src={Gaming} alt="" />
              <span>Gaming</span>
            </div>
            <div className="item">
              <img src={Gallery} alt="" />
              <span>Gallery</span>
            </div>
            <div className="item">
              <img src={Videos} alt="" />
              <span>Videos</span>
            </div>
            <div className="item">
              <img src={Message} alt="" />
              <span>Message</span>
            </div>
          </div>
          <hr></hr>
          <div className="menu">
            <span>Others</span>
            <div className="item">
              <img src={Tutorials} alt="" />
              <span>Tutorials</span>
            </div>
            <div className="item">
              <img src={Courses} alt="" />
              <span>Courses</span>
            </div>
            <div className="item">
              <img src={Fund} alt="" />
              <span>Fund</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;

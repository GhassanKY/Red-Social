import React, { useContext } from "react";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Link } from "react-router-dom";
import "./navbar.scss";
import { DarkModeContext } from "../../../context/darkModeContext";
import { AuthContext } from "../../../context/authContext";

const Navbar = () => {


  const { toggle, darkMode } = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);




  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>¡Hola Mundo!</span>
        </Link>

        <OtherHousesOutlinedIcon />
        {darkMode ? <WbSunnyIcon onClick={toggle} /> : <DarkModeOutlinedIcon onClick={toggle} />}
        <GridViewOutlinedIcon />

        <div className="search">
          <TravelExploreOutlinedIcon />
          <input type="text" placeholder="Buscar...." />
        </div>
      </div>

      <div className="right">
        <PersonOutlineOutlinedIcon />
        <ChatOutlinedIcon />
        <NotificationsActiveOutlinedIcon />
        <div className="user">
          <img
            src={currentUser.profilePic}
            alt="Perfil"
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext } from 'react'
import "./stories.scss"
import {AuthContext} from "../../../context/authContext"
const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //Data temporal

  const stories = [
    {
      id: 1,
      name:"John Doe",
      img:"https://media.istockphoto.com/id/1396668771/es/foto/principado-de-asturias.jpg?s=612x612&w=0&k=20&c=V0IdCFjuAErGtmdWaoImQp-7SpdDGQ9I34cvXDrnMD8="
    },
    {
      id: 2,
      name:"John Doe",
      img:"https://media.istockphoto.com/id/1396668771/es/foto/principado-de-asturias.jpg?s=612x612&w=0&k=20&c=V0IdCFjuAErGtmdWaoImQp-7SpdDGQ9I34cvXDrnMD8="
    },
    {
      id: 3,
      name:"John Doe",
      img:"https://media.istockphoto.com/id/1396668771/es/foto/principado-de-asturias.jpg?s=612x612&w=0&k=20&c=V0IdCFjuAErGtmdWaoImQp-7SpdDGQ9I34cvXDrnMD8="
    },
    {
      id: 4,
      name:"John Doe",
      img:"https://media.istockphoto.com/id/1396668771/es/foto/principado-de-asturias.jpg?s=612x612&w=0&k=20&c=V0IdCFjuAErGtmdWaoImQp-7SpdDGQ9I34cvXDrnMD8="
    },
  ]

  return (
    <div className='stories'>
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span> {currentUser.name} </span>
          <button>+</button>
        </div>
      {stories.map(story =>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span> {story.name} </span>
        </div>
      ))}
    </div>
  )
}

export default Stories

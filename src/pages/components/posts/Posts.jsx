import React from 'react'
import Post from "../post/Post"
import "./posts.scss"

const Posts = () => {


  const post = [
    {
      id: 1,
      name: "Jhon Doe",
      userId: 1,
      img: "https://media.istockphoto.com/id/1431423547/es/foto/regi%C3%B3n-vitivin%C3%ADcola-del-pened%C3%A8s.jpg?s=612x612&w=0&k=20&c=gOBvS_dFEqYM9K6te2-tGyqDy1JbK4NLwffRr9LfzJY=",
      desc: "lorem ipsum dolor sit amet, consect",
      profilePic:"https://media.istockphoto.com/id/1431423547/es/foto/regi%C3%B3n-vitivin%C3%ADcola-del-pened%C3%A8s.jpg?s=612x612&w=0&k=20&c=gOBvS_dFEqYM9K6te2-tGyqDy1JbK4NLwffRr9LfzJY="
    },
    {
      id: 2,
      name: "Jhon Doe",
      userId: 1,
      img: "https://media.istockphoto.com/id/186534154/es/foto/hermoso-paisaje-de-invierno-con-reflejo-en-el-agua.jpg?s=612x612&w=0&k=20&c=-tjLDHVHq_sL7U1EmF1EQpMVoM1TOP_VxDKp6tuA1kk=",
      desc: "lorem ipsum dolor sit amet, consect",
      profilePic:"https://media.istockphoto.com/id/1431423547/es/foto/regi%C3%B3n-vitivin%C3%ADcola-del-pened%C3%A8s.jpg?s=612x612&w=0&k=20&c=gOBvS_dFEqYM9K6te2-tGyqDy1JbK4NLwffRr9LfzJY="
    },
    {
      id: 3,
      name: "Jhon Doe",
      userId: 1,
      img: "https://media.istockphoto.com/id/1406486675/es/foto/gramineas-siluetas-retroiluminadas.jpg?s=612x612&w=0&k=20&c=uz9_ZJXzeZyBVacTHejC727wnyHnBQHvX78ScYtNxAM=",
      desc: "lorem ipsum dolor sit amet, consect",
      profilePic:"https://media.istockphoto.com/id/1431423547/es/foto/regi%C3%B3n-vitivin%C3%ADcola-del-pened%C3%A8s.jpg?s=612x612&w=0&k=20&c=gOBvS_dFEqYM9K6te2-tGyqDy1JbK4NLwffRr9LfzJY="
    },
    {
      id: 4,
      name: "Jhon Doe",
      userId: 1,
      img: "https://media.istockphoto.com/id/1431423547/es/foto/regi%C3%B3n-vitivin%C3%ADcola-del-pened%C3%A8s.jpg?s=612x612&w=0&k=20&c=gOBvS_dFEqYM9K6te2-tGyqDy1JbK4NLwffRr9LfzJY=",
      desc: "lorem ipsum dolor sit amet, consect",
      profilePic:"https://media.istockphoto.com/id/1431423547/es/foto/regi%C3%B3n-vitivin%C3%ADcola-del-pened%C3%A8s.jpg?s=612x612&w=0&k=20&c=gOBvS_dFEqYM9K6te2-tGyqDy1JbK4NLwffRr9LfzJY="
    },
    {
      id: 5,
      name: "Jhon Doe",
      userId: 1,
      img: "https://media.istockphoto.com/id/1406486675/es/foto/gramineas-siluetas-retroiluminadas.jpg?s=612x612&w=0&k=20&c=uz9_ZJXzeZyBVacTHejC727wnyHnBQHvX78ScYtNxAM=",
      desc: "lorem ipsum dolor sit amet, consect",
      profilePic:"https://media.istockphoto.com/id/1431423547/es/foto/regi%C3%B3n-vitivin%C3%ADcola-del-pened%C3%A8s.jpg?s=612x612&w=0&k=20&c=gOBvS_dFEqYM9K6te2-tGyqDy1JbK4NLwffRr9LfzJY="
    }
  ]




  return (
    <div className='posts'>
      {post.map(post => (
        <div className='post'>
          <Post post={post} key={post.id} />
        </div>
      ))}
    </div>
  )
}

export default Posts

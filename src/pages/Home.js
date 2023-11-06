import React from 'react'
import Navbar from '../components/Navbar'
// import image from "../assests/plant-8297610_1280.jpg"
import { Link } from 'react-router-dom'
// import "../styles/Home.css"

const Home = () => {
  return (
    <div className='bgcolor'>
        <Navbar/>
      <h1>Home</h1>
      {/* <img src={image} alt="plant" /> */}
      <Link to='/Content'>Content</Link>
      <br />
      <Link to='/form'>Form</Link>
      <br />
      <Link to='/counter'>Counter</Link>
      <br />
      <Link to='/map'>map</Link>
      <br />
      <Link to='/counter'>Counter</Link>
      <br />
      <Link to='/counter'>Counter</Link>
      <br />
      <Link to='/search'>Search</Link>
    </div>
  )
}

export default Home

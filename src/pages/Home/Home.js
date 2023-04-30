import React from 'react'
import "./home.scss"
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/Featured/Featured'
import List from '../../components/List'


// https://www.youtube.com/watch?v=FzWG8jiw4XM time 25:26
// Estudar https://www.youtube.com/watch?v=lKZiXQWnlUw
// https://github.com/safak/youtube/tree/react-netflix-ui
// Modelo de layout para EAF Intranet

const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <Featured type="movie"/>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
    </div>
  )
}

export default Home
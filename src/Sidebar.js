import React from 'react'
import "./css/sidebar.css"
import { Avatar } from "@material-ui/core"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {
    const user =  useSelector(selectUser);
    return (

       
        <div className="sidebar">
            <div className="sidebar__profile">
                <img src="https://images.pexels.com/photos/7130472/pexels-photo-7130472.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                   <div className="profile__details">
                        <Avatar src={user.photoURL} className="sidebar_Ave"/>
                        <h4>{user.displayName}</h4>
                        <p>Web Developer</p>
             </div>
             </div>
                    <div className='profile_stats'>
                    <div className="profile__stat">
                        <span>Who viewed you </span>
                        <span className="stat__number"> 2,320</span>
                    </div>

                    <div className="profile__stat">
                        <span>Views on post </span>
                        <span className="stat__number"> 202</span>
                    </div>
                    </div>
        

            <div className="sidebar__recent">
                <span>Recent</span>
                <p className="hash"><span>#</span> developer</p>
                <p className="hash"><span>#</span> design</p>
                <p className="hash"><span>#</span> webdevelopment</p>
                <p className="hash"><span>#</span> programming</p>
                <p className="hash"><span>#</span> reactjs</p>
                <p className="hash"><span>#</span> softwareeengineering</p>
            </div>
            
        </div>
    )
}

export default Sidebar

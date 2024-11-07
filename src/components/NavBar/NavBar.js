import React, { useState, } from 'react';
import './NavBar.css';
import Search from '../Search/Search';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { RiAccountCircleFill } from "react-icons/ri";
import { HiViewGridAdd } from "react-icons/hi";
import { SiGooglebard } from "react-icons/si";


function NavBar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);


  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
    }
    catch (err) {
      console.log(err);
    }
  }
  var name = [""];
  if(user){
  if(user.displayName){
     name = user.displayName.split(" ");
  }
}
  const showHandlerOpen = () => {
    setShow(true);
  }
  const showHandlerClose = () => {
    setShow(false);
  }
  return (
    <div className='NavBar'>
      <div className='vistaio'>
        <Link to='/' > <h1></h1> </ Link>
        <Link to='/account' ><p id='topstrem'>Drop-dead List<HiViewGridAdd className='favr'/> </p></Link>
      </div>
      <div className='user'>
        {user?.email && <Search className="srch"></Search>}
        {user?.email ?
          <div>
            <div className='profile' onClick={showHandlerOpen} onMouseLeave={showHandlerClose}>
              {/* <img src={photo} alt='' ></img> */}
              <div className='account-box'> <RiAccountCircleFill className='account-icon' /> </div>
            </div>
            {show &&
              <div className='bars' onMouseOut={showHandlerClose} onMouseOver={showHandlerOpen}>
                {user ? <p className='userName acountbtn' >{name[0]}</p> : <p>Moron</p> }
                <Link to='/account'>
                  <button className='acountbtn'>Account</button>
                </Link>
                <button className='acountbtn'
                  onClick={handleLogout}>
                  Logout
                </button>
              </div>}
          </div> :
          <div>
            <Link to='/login'>
              <button className='acountbtn-log'>Sign In</button>
            </Link>
            <Link to='/signup'>
              <button className='acountbtn-log'>
                Sign Up
              </button>
            </Link>
          </div>
        }
      </div>
    </div>
  )
}

export default NavBar;

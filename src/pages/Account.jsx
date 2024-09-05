import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Saved from '../components/SaveShows/Saved'
import './Pav.css'
function Account() {
  return (
    <div>
      
      <NavBar />
      <p className='whish'></p>
      <Saved />
    </div>
  )
}

export default Account

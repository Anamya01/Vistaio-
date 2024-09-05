import React from 'react'
import './SavedShows.css';
import { useState, useEffect } from 'react';


import { UserAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import Cards from '../Cards/Cards';


function Saved() {
  const [Lists, setList] = useState([]);
  const { user } = UserAuth();


  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), async (doc) => {
      const meta = await doc.data()?.savedShows;
      setList(meta);
      console.log(Lists);
    });
  }, [user?.email]);


  const movieRef = doc(db, 'users', `${user?.email}`)
  const deleteShow = async (passedID) => {
      try {
        const result = Lists.filter((item) => item.id !== passedID)
        await updateDoc(movieRef, {
            savedShows: result
        })
      } catch (error) {
            console.log(error)
      }
  }

  return (
    <div className='container1'>
    { Lists == undefined ? (<p></p>) : (Lists.map(items => <Cards param={items.data.param} media = {items.type} />))}
  </div>
  )
}

export default Saved

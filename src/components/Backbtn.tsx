'use client'

import React from 'react';

const Back = () => {

  const back =()=>{
    window.history.back()
  }

  
  return(
      <button 
      type="button"
      className={`px-2 text-lg text-white`}
      onClick={back}>
        back
      </button>
  )
}

export default Back
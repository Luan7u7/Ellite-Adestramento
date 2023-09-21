'use client'

import React from 'react';

export const Back = () => {

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

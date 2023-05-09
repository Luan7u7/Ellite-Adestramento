'use client'

import React from 'react';

const Back = () => {

  const back =()=>{
    window.history.back()
  }

  
  return(
      <button 
      type="button"
      className="border rounded-lg px-2 bg-zinc-500 "
      onClick={back}>
        back
      </button>
  )
}

export default Back
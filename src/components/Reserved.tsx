


import React, { Suspense } from 'react';
import { container } from './Containers';


export async function Reserved() {

  await new Promise(resolve => setTimeout(resolve, 10000))

  return (
    <>
        <container.full>
          <container.center>
            <h1>Charging</h1>
          </container.center>
        </container.full>
    </>
  )
}
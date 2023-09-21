

import React from 'react'

import { container } from '../Containers'
import { generalProps } from '@/interfaces'
import { skeleton } from '../Skeleton'


export function Charging({ children }: generalProps) {

  return (
    <>
      <container.screen>
        <container.full>

          <skeleton.container>

            <skeleton.content>
              <skeleton.square />
              <skeleton.text />
            </skeleton.content>

            <skeleton.textP />
            <skeleton.frame />
            <skeleton.text />

          </skeleton.container>
        </container.full>
      </container.screen>
    </>
  )
}

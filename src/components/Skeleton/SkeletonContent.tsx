

import React from 'react';
import { generalProps } from '@/interfaces';

export const Content = ({children}: generalProps) => {
  return (
    <>
      <div className="flex w-full gap-3">
        {children}
      </div>
    </>
  );
};
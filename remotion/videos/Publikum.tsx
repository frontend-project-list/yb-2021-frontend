import React from 'react';
import { Img } from 'remotion';

export const Publikum: React.FC = () => {
  return (
    <Img
      style={{
        position: 'absolute',
        bottom: 0,
      }}
      src="https://jonnyburger.s3.eu-central-1.amazonaws.com/_DSC3635.jpg"
    ></Img>
  );
};

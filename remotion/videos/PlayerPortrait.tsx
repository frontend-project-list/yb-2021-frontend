import React from 'react';
import { Img } from 'remotion';
import { TEAM_API } from '../../utils/infos';
import { useFont } from './use-font';

export const PlayerPortrait: React.FC<{
  style: React.CSSProperties;
  height: number;
  playerNumber: number;
}> = ({ style, height, playerNumber }) => {
  useFont();
  return (
    <div
      style={{
        ...style,
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Img
        src={TEAM_API[playerNumber].assets.portrait}
        style={{
          height,
        }}
      ></Img>
      <div
        style={{
          backgroundColor: 'yellow',
          fontSize: 60,
          padding: '10px 14px',
          fontFamily: 'YB',
          display: 'inline-block',
          textAlign: 'center',
          position: 'absolute',
          top: 350,
        }}
      >
        {TEAM_API[playerNumber].lastName.toUpperCase()}
      </div>
    </div>
  );
};

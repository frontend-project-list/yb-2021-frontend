import React from 'react';
import { AbsoluteFill, Img } from 'remotion';
import { Teams } from '../../utils/infos';
import { Background } from './Background';
import { TeamLogo } from './TeamLogo';
import { useFont } from './use-font';

const container: React.CSSProperties = {
  width: 120,
  display: 'block',
  textAlign: 'center',
  position: 'relative',
};

export const NewScore: React.FC<{
  awayTeam: Teams;
  homeScore: number;
  awayScore: number;
}> = ({ awayTeam, homeScore, awayScore }) => {
  useFont();
  return (
    <Background>
      <AbsoluteFill
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            color: 'white',
            fontFamily: 'YB',
            fontSize: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TeamLogo team={Teams.YB} />
          <div style={{ width: 30 }} />
          <div style={container}>
            <div style={{ width: 120, top: 0, position: 'absolute' }}>
              {homeScore}
            </div>
            <div style={{ width: 120, top: 0, position: 'absolute' }}>
              {homeScore}
            </div>
          </div>
          <div style={container}>-</div>
          <div style={container}>{awayScore}</div>
          <div style={{ width: 30 }} />
          <TeamLogo team={awayTeam} />
        </div>
      </AbsoluteFill>
    </Background>
  );
};

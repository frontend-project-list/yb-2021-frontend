import React, { useEffect, useState } from 'react';
import {
  AbsoluteFill,
  continueRender,
  delayRender,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { interpolateAs } from 'next/dist/shared/lib/router/router';
import { isClientSide } from '@utils/helpers';
import { SlidingText } from './SlidingText';
import fassnacht from './fassnacht-removebg.png';

const player: React.CSSProperties = {
  position: 'absolute',
  bottom: 0,
  right: '-5%',
};

export const Spieler: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const [waitForFont] = useState(() => delayRender());

  useEffect(() => {
    const font = new FontFace(
      'YB',
      `url(https://jonnyburger.s3.eu-central-1.amazonaws.com/big_noodle_titling.ttf)`
    ).load();
    font.then(async () => document.fonts.add(await font));

    continueRender(waitForFont);
  }, [waitForFont]);

  const spr = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
  });

  const playerScale =
    interpolate(frame, [0, 50], [1.1, 1.15]) *
    interpolate(spr, [0, 1], [0.8, 1]);

  return (
    <AbsoluteFill>
      <Img
        style={{
          ...player,
          mixBlendMode: 'color-dodge',
          transform: `scale(${playerScale})`,
          transformOrigin: '75% 75%',
        }}
        // @ts-ignore
        src={fassnacht}
      ></Img>
      <Img
        style={{
          ...player,
          opacity: 0.4,
          transform: `scale(${playerScale})`,
          transformOrigin: '75% 75%',
        }}
        // @ts-ignore

        src={fassnacht}
      ></Img>
      <SlidingText delay={0} fontSize={200} color="white" left={100} top={120}>
        CHRISTIAN
      </SlidingText>
      <SlidingText delay={3} fontSize={200} color="white" left={100} top={320}>
        FASSNACHT
      </SlidingText>
      <SlidingText delay={6} fontSize={80} color="#ffcf00" left={100} top={530}>
        10. SAISONTOR
      </SlidingText>
    </AbsoluteFill>
  );
};

import { Composition } from 'remotion';
import { Goal } from './videos/Goal';

export const Video = () => {
  return (
    <>
      <Composition
        id="Goal"
        height={1920}
        width={1080}
        component={Goal}
        durationInFrames={300}
        fps={30}
      ></Composition>
    </>
  );
};

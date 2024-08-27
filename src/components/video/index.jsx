import { Player, DefaultUi, Youtube } from "@vime/react";
import * as C from "./style";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const Video = ({ linkVideo, playVideo, handleClosePlayVideo }) => {
  return playVideo ? (
    <C.Container>
      <C.Button onClick={handleClosePlayVideo}>
        <AiOutlineArrowLeft />
        Back
      </C.Button>
      <Player>
        <DefaultUi Controls>
          <Youtube videoId={linkVideo} autoplay />
        </DefaultUi>
      </Player>
    </C.Container>
  ) : null;
};

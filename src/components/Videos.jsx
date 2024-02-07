import React from "react";
import { Box, Stack } from "@mui/material";
import VideoCart from "./VideoCart";
import ChannelCart from "./ChannelCart";

const Videos = ({ video }) => {
  console.log(video);
  return (
    <>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="start"
        gap={2}
      >
        {video.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCart video={item}/>}
            {item.id.channelId && <ChannelCart channelDetail={item}/>}
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default Videos;

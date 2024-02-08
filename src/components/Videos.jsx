import React from "react";
import { Box, Stack } from "@mui/material";
import {VideoCart, ChannelCart } from "./";


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
            {item.id.videoId && <VideoCart videos={item}/>}
            {item.id.channelId && <ChannelCart channelDetail={item}/>}
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default Videos;

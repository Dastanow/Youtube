import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidbar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";

const Feed = () => {
const [selectedCategory, setSelecterCategory] = useState('New')
const [video, setVideo] = useState([])

 


  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then(data => setVideo(data.items))
    console.log(fetchFromAPI);
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidbar 
        selectedCategory={selectedCategory}
        setSelecterCategory={setSelecterCategory}/>
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copirait 2022 JSM Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          md={3}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Videos video={video} />
      </Box>
    </Stack>
  );
};

export default Feed;

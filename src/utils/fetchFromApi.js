import axios from "axios";
const BEST_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: BEST_URL,
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
    q: 'music',
    regionCode: 'US',
    maxResults: '50',
    order: 'date'

  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BEST_URL}/${url}`, options);
  return data
};

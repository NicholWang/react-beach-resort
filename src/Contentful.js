import { createClient } from "contentful";

console.log(process.env.REACT_BEACH_APP_ACCESS_TOKEN);
const client = createClient({
  space: process.env.REACT_APP_API_SPACE_KEY,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

export default client;

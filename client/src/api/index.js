import axios from "axios";

// http://localhost:8080/api/
const API = axios.create({
  baseURL: "https://min-journey-dall-e.onrender.com/api/",
});

export const GetPosts = async () => await API.get("/v1/post/");
export const CreatePost = async (data) => await API.post("/v1/post/", data);
export const GenerateImageFromPrompt = async (data) =>
  await API.post("/v1/dalle/", data)

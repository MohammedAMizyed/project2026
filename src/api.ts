import axios from "axios"
export const api = axios.create({
  baseURL: "https://api.glow.net.sa/",
})

import axios from "axios";

export const api = axios.create({
    baseURL: "https://dev-tasks-hub.onrender.com",
    withCredentials: true,
})
import axios from "axios";

const API = axios.create({
baseURL: "https://inventory-backend-xsxj.onrender.com",});

export default API;
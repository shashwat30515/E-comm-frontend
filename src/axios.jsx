import axios from "axios";

const API = axios.create({
  baseURL: "https://e-comm-backend-oo4p.onrender.com/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;

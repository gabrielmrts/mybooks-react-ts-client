import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:8090"
});

export default Api;
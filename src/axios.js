import axios from "axios";

const http = axios.create({
    baseURL: "https://trello.vimlc.uz/"
})

export default http
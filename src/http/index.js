import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})
console.log(process.env.REACT_APP_API_URL)

export {
    $host
}
import axios from "axios";
import md5 from "md5";

const privateKey = 'aaac8803aac183c09d4261632a0e4f8e7bbe2973'

const publicKey = '311dd3e65e2d638ce01e680124a08f84'

const timeNumber = Number(new Date())

const hashCode = md5(timeNumber + privateKey + publicKey)

export const API = axios.create({
    baseURL: `http://gateway.marvel.com/v1/public/`,
    params: {
        ts: timeNumber,
        apikey: publicKey,
        hash: hashCode
    },
    timeout: 5000
})
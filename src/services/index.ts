import axios from 'axios';


export const api = axios.create({
baseURL:"https://voliveira.s3-sa-east-1.amazonaws.com"
})
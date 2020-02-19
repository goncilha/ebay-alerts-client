import axios, { AxiosInstance } from 'axios'

const instance:AxiosInstance = axios.create({
  baseURL: 'http://localhost:3334'
});

export default instance;
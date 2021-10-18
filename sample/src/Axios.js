import axios from 'axios'
import { Baseurl } from './Constants/Constance';

const instance = axios.create({
    baseURL: Baseurl,
    
  });
  export default instance
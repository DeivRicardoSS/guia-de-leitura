import axios from "axios";
import { user } from "../localdata/User";

const API = axios.create({
    baseURL: 'http://192.168.0.102:3000'
});

export const signup = async (userData) => {
    const response = await API.post('/user/cadastro', userData);
    return response.data;
}

export const confirmUser = async (userData) => {
    const response = await API.post('/user/confirm', userData);
    return response.data;
}

export const loginUser = async (userData) => {
    const response = await API.post(`/user/login`, userData);
    return response.data;
}
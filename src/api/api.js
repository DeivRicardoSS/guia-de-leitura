import axios from "axios";
import { user } from "../localdata/User";

const API = axios.create({
    baseURL: 'http://10.81.0.5:3000'
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

export const novoLivro = async (userData, upload) => {
    const response = await API.post(`/livro/novo`, upload, userData);
    const result = await confirmUser({ userId: user.userId });
    if(result) addUser(result);
    return response.data;
    
}
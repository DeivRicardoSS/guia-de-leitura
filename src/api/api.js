import axios from "axios";

export let userId = null;
export function addUserId(id) {
    userId = id;
}

export const ip = '192.168.0.103';

const API = axios.create({
baseURL: `http://${ip}:3000`
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
    const result = await confirmUser({ userId });
    return response.data;
}

export const updateLivro = async (userData) => {
    const response = await API.put(`/livro/update`, userData);
    const result = await confirmUser({ userId });
    return response.data;
}
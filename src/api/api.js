import axios from "axios";

const API = axios.create({
    baseURL: 'https://jsonplaceholder.typecode.com'
});

export const signup = async (userData) => {
    const response = await API.post('/users', userData);
    return response.data;
}

export const loginUser = async (email) => {
    const response = await API.get(`/user?email=${email}`);
    return response.data.length ? response.data[0] : null;
}
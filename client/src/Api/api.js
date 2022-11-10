import axios from 'axios';


const Axios = axios.create({
    baseURL: "https://trowey-server-production.up.railway.app/",
})

const responseBody = (response) => response.data;

const registerUser = async (data) => {
    const res = await Axios.post('/users/register', data);
    return responseBody(res);
}

const loginUser = async (data) => {
    const res = await Axios.post('/users/login', data);
    return responseBody(res);
}

const registerCollector = async (data) => {
    const res = await Axios.post('/collectors/register', data);
    return responseBody(res);
}

const loginCollector = async (data) => {
    const res = await Axios.post('/collectors/login', data);
    return responseBody(res);
}

const saveRoutes = async (data) => {
    const res = await Axios.post('/routes/save', data, {
        headers: {
            token: localStorage.getItem('token')
        }
    });
    return responseBody(res);
}

const getRoutes = async (name) => {
    const res = await Axios.get(`/routes/${name}`);
    return responseBody(res);
}


const getRequests = async () => {
    const res = await Axios.get(`/request/all`);
    return responseBody(res);
}

const sendRequests = async (data) => {
    const res = await Axios.post(`/request/new`, data, {
        headers: {
            token: localStorage.getItem('token')
        }
    });
    return responseBody(res);
}




export const Users = {
    create: registerUser,
    login: loginUser
}

export const Collectors = {
    create: registerCollector,
    login: loginCollector
}

export const Routes = {
    save: saveRoutes,
    get: getRoutes
}

export const Requests = {
    send: sendRequests,
    getAll: getRequests
}
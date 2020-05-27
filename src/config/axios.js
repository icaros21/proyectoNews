import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://api.canillitapp.com/'
})

export default clienteAxios;
import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3000'
})

api.interceptors.request.use((config) => {
        const token = window.localStorage.getItem('@token');
        if (token) {
            config.headers.authorization = `Bearer ${token}`
        }

        return config;
    }, (err) => {
        return Promise.reject(err)
    }
)
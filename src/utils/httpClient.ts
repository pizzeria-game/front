import axios from "axios"
// import { getToken } from "./token"

const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL as string
})

// setup interceptors
httpClient.interceptors.request.use((config) => {
    // const token = await getToken()

    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`
    // }
    return config
})

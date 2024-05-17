import axios from "axios"


export const LoginAPI = (values) => {
    return axios.post(`${process.env.REACT_APP_ENDPOINT}/auth/login`,values,{
        headers: { 'Content-Type': 'application/json' }
    })
}
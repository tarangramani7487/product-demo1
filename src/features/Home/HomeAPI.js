import axios from "axios"

export const getAllDataAPI = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/products`)
}

export const loginUserAPI = (values) => {
    return axios.post(`${process.env.REACT_APP_ENDPOINT}/auth/login`, values, {headers: {
        'Content-Type': 'application/json'
    }})
}
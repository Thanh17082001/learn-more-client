import axios from "axios";
const token = localStorage.getItem('token');
const commonConfig = {
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
    },
};
export default (baseURL) => {
    return axios.create({
        baseURL,
        ...commonConfig,
    });
};
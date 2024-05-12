import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://https://book-swiftly-server.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;
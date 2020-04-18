import axios from 'axios';

const instance = axios.create({
    baseURL: "http://react-burger-app-14645.firebaseio.com/",
});

export default instance;
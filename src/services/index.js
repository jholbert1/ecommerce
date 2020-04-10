import axios from "axios";

const Api = axios.create({
    baseURL: process.env.VUE_APP_ROOTAPI,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': process.env.VUE_APP_ROOTAPI,
    }
});

export default Api;

import axios from "axios";
import {
    serverHost,
    serverPort
} from "./../consts/server";

const instance = axios.create({
    baseURL: `http://${ serverHost }:${ serverPort }/`,
    timeout: 4000
});

export {
    instance
};

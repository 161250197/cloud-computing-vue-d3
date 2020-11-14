import axios from 'axios';
import {
    serverHost,
    serverPort
} from './../data/consts/server';

const instance = axios.create({
    // TODO
    baseURL: `http://${ serverHost }:${ serverPort }/`,
    timeout: 1000
});

export {
    instance
};

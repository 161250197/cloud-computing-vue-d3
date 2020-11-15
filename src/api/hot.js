import { instance } from '../util/request';
import {
    HOT_ONE_DATE_DATA,
    HOT_RANGE_DATE_DATA
} from '../data/consts/server';

async function getHotOneDateData (time) {
    const requestConfig = {
        data: time
    };
    const response = await instance.get(HOT_ONE_DATE_DATA, requestConfig);
    const result = response.data;
    return result;
}

async function getHotRangeDateData (from, to) {
    const requestConfig = {
        data: {
            from, to
        }
    };
    const response = await instance.get(HOT_RANGE_DATE_DATA, requestConfig);
    const result = response.data;
    return result;
}

export {
    getHotOneDateData,
    getHotRangeDateData,
};

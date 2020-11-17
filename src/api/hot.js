import { instance } from '../util/request';
import {
    HOT_DETAIL,
    HOT_TODAY_DATA,
    HOT_RANGE_DATE_DATA
} from '../data/consts/server';

async function getHotTodayData () {
    const response = await instance.get(HOT_TODAY_DATA);
    const result = response.data;
    return result;
}

async function getHotDetail (id) {
    const requestConfig = {
        params: {
            id
        }
    };
    const response = await instance.get(HOT_DETAIL, requestConfig);
    const result = response.data;
    return result;
}

async function getHotRangeDateData (from, to) {
    const requestConfig = {
        params: {
            from, to
        }
    };
    const response = await instance.get(HOT_RANGE_DATE_DATA, requestConfig);
    const result = response.data;
    return result;
}

export {
    getHotTodayData,
    getHotDetail,
    getHotRangeDateData,
};

import { instance } from "../util/request";
import {
    HOT_TODAY_DATA
} from "../consts/server";

async function getHotTodayData () {
    const response = await instance.get(HOT_TODAY_DATA);
    const result = response.data;
    return result;
}

export {
    getHotTodayData
};

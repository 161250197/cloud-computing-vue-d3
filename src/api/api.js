import { instance } from "../util/request";
import {
    HOT_TODAY_DATA,
    CARTOON_INFO_ARR,
    CARTOON_RANK_PATH,
    TIME_RANGE_CARTOON_RANK_PATH,
    RANDOM_USERS,
    RECOMMEND_USERS
} from "../consts/server";

async function getHotTodayData () {
    const response = await instance.get(HOT_TODAY_DATA);
    const result = response.data;
    return result;
}

async function getCartoonInfoArr () {
    const response = await instance.get(CARTOON_INFO_ARR);
    const result = response.data;
    return result;
}

async function getCartoonRankPath (id) {
    const requestConfig = {
        params: {
            id
        }
    };
    const response = await instance.get(CARTOON_RANK_PATH, requestConfig);
    const result = response.data;
    return result;
}

async function getTimeRangeCartoonRankPath (from, to) {
    const requestConfig = {
        params: {
            from,
            to
        }
    };
    const response = await instance.get(TIME_RANGE_CARTOON_RANK_PATH, requestConfig);
    const result = response.data;
    return result;
}

async function getRandomUsers (count) {
    const requestConfig = {
        params: {
            count
        }
    };
    const response = await instance.get(RANDOM_USERS, requestConfig);
    const result = response.data;
    return result;
}

async function getRecommendUsers (id) {
    const requestConfig = {
        params: {
            id
        }
    };
    const response = await instance.get(RECOMMEND_USERS, requestConfig);
    const result = response.data;
    return result;
}

export {
    getHotTodayData,
    getCartoonInfoArr,
    getCartoonRankPath,
    getTimeRangeCartoonRankPath,
    getRandomUsers,
    getRecommendUsers
};

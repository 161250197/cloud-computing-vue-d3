import { instance } from './../util/request';
import {
    TEST
} from './../data/consts/server';

/**
 * 获取测试数据
 */
async function getTestData () {
    const recognition = await instance.get(
        TEST
    );
    const result = recognition.data;
    return result;
}

export {
    getTestData
};

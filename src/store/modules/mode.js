import {
    HOT,
    RANK,
    USER,
} from './../../data/consts/mode';

const store = {
    state: {
        mode: undefined
    },
    mutations: {
        /**
         * 重置模式
         */
        resetMode (state) {
            state.mode = undefined;
        },
        /**
         * 设置 **热度** 模式
         */
        checkHot (state) {
            state.mode = HOT;
        },
        /**
         * 设置 **热度** 模式
         */
        checkRank (state) {
            state.mode = RANK;
        },
        /**
         * 设置 **热度** 模式
         */
        checkUser (state) {
            state.mode = USER;
        },
    }
};

export default store;

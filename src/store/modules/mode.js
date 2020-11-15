import {
    MODE_HOT,
    MODE_RANK,
    MODE_USER,
} from './../../data/consts/mode';

const store = {
    state: {
        // mode: undefined
        mode: MODE_HOT
    },
    mutations: {
        resetMode (state) {
            state.mode = undefined;
        },
        changeModeHot (state) {
            state.mode = MODE_HOT;
        },
        changeModeRank (state) {
            state.mode = MODE_RANK;
        },
        changeModeUser (state) {
            state.mode = MODE_USER;
        },
    }
};

export default store;

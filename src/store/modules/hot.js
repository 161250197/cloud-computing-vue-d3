import { MODE_DYNAMIC, MODE_ONE_DAY } from "../../data/consts/hot";
import { regularTimeToDay } from "./../../util/math";

/** 热度 store */
const store = {
    state: {
        mode: undefined,
        date: undefined,
        fromDate: undefined,
        toDate: undefined
    },
    mutations: {
        changeHotModeOneDay (state) {
            state.mode = MODE_ONE_DAY;

            const now = Date.now();
            this.commit('setHotDate', now);
        },
        changeHotModeDynamic (state) {
            state.mode = MODE_DYNAMIC;
        },
        setHotDate (state, time) {
            state.date = regularTimeToDay(time);
        },
        setHotFromDate (state, time) {
            state.fromDate = regularTimeToDay(time);
        },
        setHotToDate (state, time) {
            state.toDate = regularTimeToDay(time);
        },
    },
    actions: {
        initHotState ({ commit }) {
            commit('changeHotModeOneDay');
        }
    }
};

export default store;

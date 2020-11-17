import { MODE_DYNAMIC, MODE_TODAY } from "../../data/consts/hot";
import { regularTimeToDay } from "./../../util/math";

/** 热度 store */
const store = {
    state: {
        mode: undefined,
        selectedId: undefined,
        fromDate: undefined,
        toDate: undefined
    },
    mutations: {
        resetSelectedId (state) {
            state.selectedId = undefined;
        },
        setSelectedId (state, id) {
            state.selectedId = id;
        },
        changeHotModeOneDay (state) {
            state.mode = MODE_TODAY;
        },
        changeHotModeDynamic (state) {
            state.mode = MODE_DYNAMIC;
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

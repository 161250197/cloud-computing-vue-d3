import { getHotTodayData } from './../../api/api';

/** 热度 store */
const store = {
    state: {
        loaded: false,
        selectedIdArr: [],
        dataMap: undefined,
        hotRankArr: undefined
    },
    mutations: {
        setHotLoaded (state, loaded) {
            state.loaded = loaded;
        },
        resetSelectedIdArr (state) {
            state.selectedIdArr = [];
        },
        addSelectedId (state, id) {
            const index = state.selectedIdArr.indexOf(id);
            const added = index >= 0;
            if (added)
            {
                state.selectedIdArr.splice(index, 1);
                return;
            }
            state.selectedIdArr.push(id);
        },
        setDataMap (state, dataArray) {
            state.dataMap = {};
            dataArray.forEach((data) => {
                const { id } = data;
                state.dataMap[id] = data;
            });
        },
        setHotRankArr (state, dataArray) {
            state.hotRankArr = dataArray.sort((a, b) => a.hot - b.hot);
        },
    },
    actions: {
        async initHotState ({ commit }) {
            const hotTodayData = await getHotTodayData();
            commit('setHotRankArr', hotTodayData);
            commit('setDataMap', hotTodayData);
            commit('setHotLoaded', true);
        },
        async resetHotState ({ commit }) {
            commit('setHotLoaded', false);
            commit('resetSelectedIdArr');
        }
    }
};

export default store;

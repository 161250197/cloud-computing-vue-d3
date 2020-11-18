import { getHotTodayData } from './../../api/api';

/** 热度 store */
const store = {
    state: {
        loaded: false,
        selectedId: undefined,
        dataMap: undefined,
        hotRankArr: undefined
    },
    mutations: {
        setHotLoaded (state, loaded) {
            state.loaded = loaded;
        },
        setSelectedId (state, id) {
            if (state.selectedId === id)
            {
                state.selectedId = undefined;
                return;
            }
            state.selectedId = id;
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
        }
    }
};

export default store;

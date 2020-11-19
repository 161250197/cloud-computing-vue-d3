import { getCartoonInfoArr } from "../../api/api";

const store = {
    state: {
        infoArr: undefined,
        loaded: false
    },
    mutations: {
        setCartoonInfoArr(state, infoArr) {
            state.infoArr = infoArr;
        },
        setRankLoaded (state, loaded) {
            state.loaded = loaded;
        }
    },
    actions: {
        async initRankState ({ commit }) {
            const cartoonInfoArr = await getCartoonInfoArr();
            commit("setCartoonInfoArr", cartoonInfoArr);
            commit("setRankLoaded", true);
        },
        async resetRankState ({ commit }) {
            commit("setRankLoaded", false);
        }
    }
};

export default store;

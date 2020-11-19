const store = {
    state: {
        loaded: false
    },
    mutations: {
        setRankLoaded (state, loaded) {
            state.loaded = loaded;
        }
    },
    actions: {
        // TODO
        async initRankState ({ commit }) {
            commit("setRankLoaded", true);
        },
        async resetRankState ({ commit }) {
            commit("setRankLoaded", false);
        }
    }
};

export default store;

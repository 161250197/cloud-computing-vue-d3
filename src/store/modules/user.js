const store = {
    state: {
        loaded: false,
    },
    mutations: {
        setUserLoaded (state, loaded) {
            state.loaded = loaded;
        },
    },
    actions: {
        async initUserState ({ commit }) {
            commit('setUserLoaded', true);
        },
        async resetUserState ({ commit }) {
            commit('setUserLoaded', false);
        }
    }
};

export default store;

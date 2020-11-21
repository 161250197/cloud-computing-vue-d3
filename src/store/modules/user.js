const store = {
    state: {
        steps: [
            {
                title: "选择用户",
            },
            {
                title: "选择更多",
            },
            {
                title: "查看结果",
            }
        ],
        recommendUsers: [],
        activeStepIndex: 1,
        loaded: false
    },
    mutations: {
        setUserLoaded (state, loaded) {
            state.loaded = loaded;
        }
    },
    actions: {
        async initUserState ({ commit }) {
            commit("setUserLoaded", true);
        },
        async resetUserState ({ commit }) {
            commit("setUserLoaded", false);
        }
    }
};

export default store;

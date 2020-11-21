import { getRandomUsers } from "../../api/api";
import { SHOW_COUNT } from "../../consts/user";

const store = {
    state: {
        recommendUsers: [],
        loaded: false
    },
    mutations: {
        setRecommendUsers (state, recommendUsers) {
            state.recommendUsers = recommendUsers;
        },
        setUserLoaded (state, loaded) {
            state.loaded = loaded;
        }
    },
    actions: {
        async getRandomUsers ({ commit }) {
            const data = await getRandomUsers(SHOW_COUNT);
            commit("setRecommendUsers", data);
        },
        async initUserState ({ commit, dispatch }) {
            dispatch("getRandomUsers");
            commit("setUserLoaded", true);
        },
        async resetUserState ({ commit }) {
            commit("setUserLoaded", false);
        }
    }
};

export default store;

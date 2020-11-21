import { getRandomUsers, getRecommendUsers } from "../../api/api";
import { SHOW_COUNT, RECOMMEND, RANDOM } from "../../consts/user";

const store = {
    state: {
        mode: undefined,
        userIdMap: undefined,
        randomUsers: undefined,
        selectedUsers: undefined,
        recommendUsers: undefined,
        loaded: false
    },
    mutations: {
        setUserRecommendState (state) {
            state.mode = RECOMMEND;
        },
        setUserRandomState (state) {
            state.mode = RANDOM;
        },
        resetRecommend (state) {
            state.selectedUsers = [];
            state.recommendUsers = [];
            state.userIdMap = {};
        },
        addRecommendUsers (state, users) {
            const { userIdMap, recommendUsers } = state;
            for (let user of users)
            {
                const { id } = user;
                if (!userIdMap[id])
                {
                    userIdMap[id] = true;
                    recommendUsers.push(user);
                }
            }
        },
        removeRecommendUser (state, user) {
            const { recommendUsers } = state;
            const index = recommendUsers.indexOf(user);
            if (index >= 0)
            {
                recommendUsers.splice(index, 1);
            }
        },
        addSelectedUser (state, user) {
            const { selectedUsers, userIdMap } = state;
            selectedUsers.push(user);
            userIdMap[user.id] = true;
        },
        setRandomUsers (state, users) {
            state.randomUsers = [];
            const { userIdMap, randomUsers } = state;
            for (let user of users)
            {
                if (!userIdMap[user.id])
                {
                    randomUsers.push(user);
                }
            }
        },
        setUserLoaded (state, loaded) {
            state.loaded = loaded;
        }
    },
    actions: {
        async selectUser ({ commit }, user) {
            commit("addSelectedUser", user);
            commit("removeRecommendUser", user);
            const users = await getRecommendUsers(user.id);
            commit("addRecommendUsers", users);
        },
        async refreshRandomUsers ({ commit }) {
            const users = await getRandomUsers(SHOW_COUNT);
            commit("setRandomUsers", users);
        },
        async initUserState ({ commit, dispatch }) {
            dispatch("refreshRandomUsers");
            commit('setUserRandomState');
            commit('resetRecommend');
            commit("setUserLoaded", true);
        },
        async resetUserState ({ commit }) {
            commit("setUserLoaded", false);
        }
    }
};

export default store;

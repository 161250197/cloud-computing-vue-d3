import Vuex from 'vuex';
import mode from './modules/mode';
import hot from './modules/hot';
import rank from './modules/rank';
import user from './modules/user';

const store = new Vuex.Store({
    modules: {
        mode,
        hot,
        rank,
        user,
    },
});

export default store;

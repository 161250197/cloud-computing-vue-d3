import Vuex from 'vuex';
import mode from './modules/mode';
import hot from './modules/hot';
import rank from './modules/rank';
import user from './modules/user';
import { registerDynamicLabelAnimation } from '../util/g2';

const store = new Vuex.Store({
    modules: {
        mode,
        hot,
        rank,
        user,
    },
    actions: {
        initStore ({ dispatch }) {
            registerDynamicLabelAnimation();
            dispatch('initHotState');
        }
    },
});

export default store;

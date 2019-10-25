import { createStore } from 'redux';
import C from './constants';
import appReducer from './store/reducers';

// const initialState = localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : {};

const store = createStore(appReducer);

// store.subscribe(() => {
//         const state = JSON.stringify(store.getState());
//         localStorage['redux-store'] = state;
// });

const unSubscribeGoalLogger = store.subscribe(() => console.log(`goal: ${store.getState().goal}`));

setInterval(() => {
        store.dispatch({
                type: C.SET_GOAL,
                payload: Math.floor(Math.random() * 100),
        });
}, 250);

setTimeout(() => {
        unSubscribeGoalLogger();
}, 3000);

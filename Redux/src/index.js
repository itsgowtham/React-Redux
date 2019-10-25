import C from './constants';
import storeFactory from './store';

const initialState = localStorage['redux-store'] ?
    JSON.parse(localStorage['redux-store']) : {};

const saveState = () => {
        const state = JSON.stringify(store.getState());
        localStorage['redux-store'] = state;
};;

const store = storeFactory(initialState);

store.subscribe(saveState);

store.dispatch({
        type: C.ADD_DAY,
        payload: {
        'resort': 'Mt Shatsta',
                date: '2016-3-28',
                powder: true,
        'backcountry': false
        },
});;

store.dispatch({
        type: C.ADD_DAY,
        payload: {
                resort: 'Mt Shatsta',
                date: '2016-1-2',
        'powder': false,
        'backcountry': true
        },
});;

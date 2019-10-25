import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import C from '../constants';
import appReducer from './reducers';

const consoleMessages = store => next => action => {
        let result = '';

        console.groupCollapsed(`dispatching action => ${action.type}`);
        console.log('ski days', store.getState().allSkiDays.length);

        result = next(action);

        const { allSkiDays, goal, errors, resortNames } = store.getState();

        console.log(`

        ski days: ${allSkiDays.length}
        goal: ${goal}
        errors: ${errors.length}
        fetching: ${resortNames.fetching}
        suggestions: ${resortNames.suggestions}

    `);

        console.groupEnd();

        return result;
};

export default (initialState = {}) => applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState);

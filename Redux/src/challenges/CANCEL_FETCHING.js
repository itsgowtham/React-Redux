import expect from 'expect';
import C from '../constants';
import { fetching } from '../store/reducers';

const action = {
        type: C.CANCEL_FETCHING,
};

const state = true;
const expectedState = false;

const actualState = fetching(state, action);

expect(actualState).toEqual(expectedState);

console.log(`

    Challenge B: CANCEL_FETCHING PASSED!!!

`);

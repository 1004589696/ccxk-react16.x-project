import { combineReducers } from 'redux';

function createReducer(asyncReducers) {
    return combineReducers({
        ...asyncReducers
    });
}

export function injectAsyncReducer(store, name, asyncReducer) {
    store.asyncReducers[name] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
}
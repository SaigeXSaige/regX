import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import {inputChange, initialState} from '../reducers/rootReducer';

export default function configureStore() {
    return createStore(
        inputChange,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        // applyMiddleware(thunk)
    );
}
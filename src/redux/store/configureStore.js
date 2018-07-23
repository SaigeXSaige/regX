import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import {handleInput, initialState} from '../reducers/rootReducer';

export default function configureStore() {
    return createStore(
        handleInput,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        // applyMiddleware(thunk)
    );
}
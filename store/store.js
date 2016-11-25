import {createStore} from 'redux';
import RootMiddleware from '../middleware/root_middleware';
import RootReducer from '../reducer/root_reducer';


const configureStore = (preloadedState = {}) => (
    createStore(RootReducer, preloadedState, RootMiddleware)
);

export default configureStore;

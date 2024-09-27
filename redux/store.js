import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export const useStore = (initialState) => store;

export default store;

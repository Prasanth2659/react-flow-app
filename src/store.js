import { createStore, combineReducers } from 'redux';
import diagramReducer from './reducers/diagramReducer';

const rootReducer = combineReducers({
  diagram: diagramReducer
});

const store = createStore(rootReducer);

export default store;

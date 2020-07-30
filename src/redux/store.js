import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import authReducer from './reducers/authReducer';
import fetchTaskReducer from './reducers/fetchTasksReducer'
import fetchTasksReducer from './reducers/fetchTasksReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    tasks: fetchTasksReducer
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, middleware);
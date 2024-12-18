import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import Client from './Client';

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    client: Client
});

export default reducers;
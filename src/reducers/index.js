import { combineReducers} from 'redux';
import posts from './posts';

export const reducers = combineReducers({ posts});

// export default combineReducers({
//     // posts: posts,-----> same key so
//     posts,
// });
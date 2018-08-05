import { combineReducers } from 'redux';
import PostsReducer from './reducersPosts.js';

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import PostsReducer from './reducersPosts.js';

const rootReducer = combineReducers({
  post: PostsReducer
});

export default rootReducer;

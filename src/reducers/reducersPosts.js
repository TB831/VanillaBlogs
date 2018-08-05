import _ from 'lodash';
import { FETCH_POSTS } from '../actions/index.js';

export default function(state={}, action) { // Defaults state to an object
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id'); // Lodash function thats maps keys to 'id' in posts
    default:
      return state;
  }
}

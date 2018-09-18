import { combineReducers } from 'redux';
import user from './user';
import tag from './tag';
import post from './post';
import category from './category';

export default combineReducers({
  user,
  tag,
  post,
  category,
})
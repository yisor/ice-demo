import { combineReducers } from 'redux';

import user from './user';
import category from './category';
import tag from './tag';


export default combineReducers({
  user,
  tag,
  category,
})
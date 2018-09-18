import * as Types from '../actions/post'

const initialState = {
  postList: [],
}

const reducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case Types.FETCH_POSTLIST:
      return {
        ...state,
        postList: [],
      };
    case Types.FETCH_POSTLIST_SUCCESS:
      return {
        ...state,
        postList: payload,
      };
    default:
      return state;
  }
}

export default reducer

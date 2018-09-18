import * as Types from '../actions/tag'

const initialState = {
  tagList: [],
}

const reducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case Types.FETCH_TAGLIST_SUCCESS:
      return {
        ...state,
        tagList: payload,
      };
    default:
      return state;
  }
}

export default reducer

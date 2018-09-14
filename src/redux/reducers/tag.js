import * as Types from '../actions/tag'

const initialState = {
  tagList: null,
}

const reducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case Types.FETCH_TAGLIST:
      return {
        ...state,
        tagList: payload,
      };
    default:
      return state;
  }
}

export default reducer

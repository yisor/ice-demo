import * as Types from '../actions/category'

const initialState = {
  cateList: [],
}

const reducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case Types.FETCH_CATELIST:
      return {
        ...state,
        cateList: [],
      };
    case Types.FETCH_CATELIST_SUCCESS:
      return {
        ...state,
        cateList: payload,
      };
    default:
      return state;
  }
}

export default reducer

import * as Types from '../actions/user'

const initialState = {
  authInfo: null,
  userList: [],
}

const reducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case Types.LOGIN:
      return {
        ...state,
        authInfo: null
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        authInfo: payload,
      };
    case Types.FETCH_USERLIST:
      return {
        ...state,
        userList: [],
      };
    case Types.FETCH_USERLIST_SUCCESS:
      return {
        ...state,
        userList: payload,
      };
    default:
      return state;
  }
}

export default reducer;

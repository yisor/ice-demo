export const LOGIN = 'LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const FETCH_USERLIST = 'FETCH_USERLIST';
export const FETCH_USERLIST_FAIL = 'FETCH_USERLIST_FAIL';
export const FETCH_USERLIST_SUCCESS = 'FETCH_USERLIST_SUCCESS';

export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const EDIT_USER = 'EDIT_USER';

export const userLogin = payload => ({
  type: LOGIN,
  payload
})

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
})

export const fetchUserList = payload => ({
  type: FETCH_USERLIST,
  payload
})

export const fetchUserListSuccess = payload => ({
  type: FETCH_USERLIST_SUCCESS,
  payload
})

export const createUser = payload => ({
  type: CREATE_USER,
  payload
})

export const deleteUser = payload => ({
  type: DELETE_USER,
  payload
})

export const editUser = payload => ({
  type: EDIT_USER,
  payload
})



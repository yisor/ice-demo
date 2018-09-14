import createAction from '@/utils/createAction';

export const LOGIN = 'LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const FETCH_USERLIST = 'FETCH_USERLIST';
export const FETCH_USERLIST_FAIL = 'FETCH_USERLIST_FAIL';
export const FETCH_USERLIST_SUCCESS = 'FETCH_USERLIST_SUCCESS';

export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const EDIT_USER = 'EDIT_USER';

export const userLogin = createAction(LOGIN)
export const loginSuccess = createAction(LOGIN_SUCCESS)

export const fetchUserList = createAction(FETCH_USERLIST)
export const fetchUserListSuccess = createAction(FETCH_USERLIST_SUCCESS)

export const createUser = createAction(CREATE_USER)
export const deleteUser = createAction(DELETE_USER)
export const editUser = createAction(EDIT_USER)



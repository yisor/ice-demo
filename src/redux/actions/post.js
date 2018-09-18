import createAction from '@/utils/createAction';

export const FETCH_POSTLIST = 'FETCH_POSTLIST';
export const FETCH_POSTLIST_SUCCESS = 'FETCH_POSTLIST_SUCCESS';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';

export const fetchPostList = createAction(FETCH_POSTLIST)
export const fetchPostListSuccess = createAction(FETCH_POSTLIST_SUCCESS)

export const createPost = createAction(CREATE_POST)
export const deletePost = createAction(DELETE_POST)
export const editPost = createAction(EDIT_POST)
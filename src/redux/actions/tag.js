
export const FETCH_TAGLIST = 'FETCH_TAGLIST';
export const CREATE_TAG = 'CREATE_TAG';
export const DELETE_TAG = 'DELETE_TAG';
export const EDIT_TAG = 'EDIT_TAG';

/**
 * 查询标签列表
 * @param {*} payload 
 */
export const fetchTagList = payload => ({
  type: FETCH_TAGLIST,
  payload
})

/**
 * 创建标签
 * @param {*} payload 
 */
export const createTag = payload => ({
  type: CREATE_TAG,
  payload
})

/**
 * 删除标签
 * @param {*} payload 
 */
export const deleteTag = payload => ({
  type: DELETE_TAG,
  payload
})

/**
 * 编辑标签
 * @param {*} payload 
 */
export const editTag = payload => ({
  type: EDIT_TAG,
  payload
})
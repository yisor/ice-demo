import createAction from '@/utils/createAction';

export const FETCH_TAGLIST = 'FETCH_TAGLIST';
export const CREATE_TAG = 'CREATE_TAG';
export const DELETE_TAG = 'DELETE_TAG';
export const EDIT_TAG = 'EDIT_TAG';

/**
 * 查询标签列表
 * @param {*} payload 
 */
export const fetchTagList = createAction(FETCH_TAGLIST)
/**
 * 创建标签
 * @param {*} payload 
 */
export const createTag = createAction(CREATE_TAG)

/**
 * 删除标签
 * @param {*} payload 
 */
export const deleteTag = createAction(DELETE_TAG)

/**
 * 编辑标签
 * @param {*} payload 
 */
export const editTag = createAction(EDIT_TAG)
import createAction from '@/utils/createAction';

export const FETCH_CATELIST = 'FETCH_CATELIST';
export const FETCH_CATELIST_SUCCESS = 'FETCH_CATELIST_SUCCESS';
export const CREATE_CATE = 'CREATE_CATE';
export const DELETE_CATE = 'DELETE_CATE';
export const EDIT_CATE = 'EDIT_CATE';

/**
 * 查询分类列表
 * @param {*} payload 
 */
export const fetchCateList = createAction(FETCH_CATELIST)
export const fetchCateListSuccess = createAction(FETCH_CATELIST_SUCCESS)
/**
 * 创建分类
 * @param {*} payload 
 */
export const createCate = createAction(CREATE_CATE)
/**
 * 删除分类
 * @param {*} payload 
 */
export const deleteCate = createAction(DELETE_CATE)

/**
 * 编辑分类
 * @param {*} payload 
 */
export const editCate = createAction(EDIT_CATE)
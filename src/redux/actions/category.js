
export const FETCH_CATELIST = 'FETCH_CATELIST';
export const FETCH_CATELIST_SUCCESS = 'FETCH_CATELIST_SUCCESS';
export const CREATE_CATE = 'CREATE_CATE';
export const DELETE_CATE = 'DELETE_CATE';
export const EDIT_CATE = 'EDIT_CATE';

/**
 * 查询分类列表
 * @param {*} payload 
 */
export const fetchCateList = payload => ({
  type: FETCH_CATELIST,
  payload
})

export const fetchCateListSuccess = payload => ({
  type: FETCH_CATELIST_SUCCESS,
  payload
})

/**
 * 创建分类
 * @param {*} payload 
 */
export const createCate = payload => ({
  type: CREATE_CATE,
  payload
})

/**
 * 删除分类
 * @param {*} payload 
 */
export const deleteCate = payload => ({
  type: DELETE_CATE,
  payload
})

/**
 * 编辑分类
 * @param {*} payload 
 */
export const editCate = payload => ({
  type: EDIT_CATE,
  payload
})
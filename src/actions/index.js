import category from '../apis/category';
import member from '../apis/member';
import regis from '../apis/regis';
import { typeRedux } from '../config';

export const fetchMember = () => async (dispatch) => {
  const res = await member.get();
  dispatch({ type: typeRedux.FETCH_MEMBERS, payload: res.data });
};

export const fetchRegis = () => async (dispatch) => {
  const res = await regis.get();
  dispatch({ type: typeRedux.FETCH_REGIS, payload: res.data });
}

export const fetchCategories = () => async (dispatch) => {
  const res = await category.get()
  dispatch({ type: typeRedux.FETCH_CATEGORIES, payload: res.data });
}

export const fetchRegisByCategoryName = (name) => async (dispatch) => {
  const res = await regis.get('/' + name);
  dispatch({ type: typeRedux.FETCH_REGIS_CATEGORY_NAME, payload: res.data });
}

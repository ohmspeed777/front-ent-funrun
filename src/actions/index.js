import funRun from '../apis/funrun';
import { typeRedux } from '../config';

export const fetchMember = () => async (dispatch) => {
  const res = await funRun.get('/users');
  dispatch({ type: typeRedux.FETCH_MEMBERS, payload: res.data });
};

export const fetchRegis = () => async (dispatch) => {
  const res = await funRun.get('/regis');
  dispatch({ type: typeRedux.FETCH_REGIS, payload: res.data });
};

export const fetchCategories = () => async (dispatch) => {
  const res = await funRun.get('/category');
  dispatch({ type: typeRedux.FETCH_CATEGORIES, payload: res.data });
};

export const fetchRegisByCategoryName = (name) => async (dispatch) => {
  const res = await funRun.get('/regis/' + name);
  dispatch({ type: typeRedux.FETCH_REGIS_CATEGORY_NAME, payload: res.data });
};

export const createMember = (body) => async (dispatch) => {
  const res = await funRun.post('/users', body);
  dispatch({ type: typeRedux.CREATE_MEMBER, payload: res.data });
};

export const login = (body) => async (dispatch) => {
  const res = await funRun.post('/users/login', body);
  dispatch({ type: typeRedux.SIGN_IN, payload: res.data.id_card });
};

export const regisFunRun = (body) => async (dispatch) => {
  const res = await funRun.post('/regis', body);
  dispatch({ type: typeRedux.SIGN_IN, payload: res.data.id_card });
};

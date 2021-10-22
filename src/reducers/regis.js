import { typeRedux } from '../config';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case typeRedux.FETCH_REGIS:
      return {
        ...state,
        ...action.payload.reduce(
          (previous, current) => ({ ...previous, [current.regis_id]: current }),
          {}
        ),
      };
    case typeRedux.FETCH_REGIS_CATEGORY_NAME:
      return {
        ...action.payload.reduce(
          (previous, current) => ({ ...previous, [current.regis_id]: current }),
          {}
        )
      }
    case typeRedux.CREATE_REGIS:
      return { ...state, [action.payload.regis_id]: action.payload };
    default:
      return state;
  }
};

export default reducer;

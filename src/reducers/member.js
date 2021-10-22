import { typeRedux } from '../config';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case typeRedux.FETCH_MEMBERS:
      return {
        ...state,
        ...action.payload.reduce(
          (previous, current) => ({ ...previous, [current.id_card]: current }),
          {}
        ),
      };
    case typeRedux.FETCH_MEMBER:
      return { ...state, [action.payload.id_card]: action.payload };
    case typeRedux.CREATE_MEMBER:
      return { ...state, [action.payload.id_card]: action.payload };
    default:
      return state;
  }
};

export default reducer;

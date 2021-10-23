import { typeRedux } from '../config';

const init = {
  isSignedIn: null,
  userId: null,
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case typeRedux.SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case typeRedux.SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

export default reducer;

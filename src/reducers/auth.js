import { typeRedux } from '../config';

const init = {
  isSignedIn: false,
  userId: null
}

const reducer = (state = init, action) => {
  switch (action.type) {
    case typeRedux.SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    default:
      return state;
  }
};

export default reducer;

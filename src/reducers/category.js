import { typeRedux } from '../config';


const reducer = (state = [], action) => {
  switch (action.type) {
    case typeRedux.FETCH_CATEGORIES:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;

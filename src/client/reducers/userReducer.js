import {
  USERS_RECEIVED,
} from '../consts/messages';

const initialState = {
  loadingUsers: true,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_RECEIVED:
      return { ...state, loadingUsers: false };

    default:
      return state;
  }
};

export default userReducer;

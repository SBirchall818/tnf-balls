import { SET_CURRENT_USER } from '../consts/messages';

export default function setCurrentUser(json) {
  return {
    type: SET_CURRENT_USER,
    json,
  };
}

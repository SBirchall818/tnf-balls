import { GET_USERS } from '../consts/messages';

export default function getUsers() {
  return {
    type: GET_USERS,
  };
}

import { NEW_SESSION } from '../consts/messages';

export default function newSession() {
  return {
    type: NEW_SESSION,
  };
}

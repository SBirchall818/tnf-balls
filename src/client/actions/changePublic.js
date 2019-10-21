import { SET_PUBLIC_CHECKBOX } from '../consts/messages';

export default function changePublic(e) {
  return {
    type: SET_PUBLIC_CHECKBOX,
    makePublic: e.target.checked,
  };
}

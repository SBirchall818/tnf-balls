import { SAVE_BALL } from '../consts/messages';

export default function saveBall(ball) {
  return {
    type: SAVE_BALL,
    ball,
  };
}

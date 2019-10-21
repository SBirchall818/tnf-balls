import { FINISH_REPLAY } from '../consts/messages';

export default function finishReplay() {
  return {
    type: FINISH_REPLAY,
  };
}

import { SAVE_CONFIG } from '../consts/messages';

export default function saveConfig() {
  return {
    type: SAVE_CONFIG,
  };
}

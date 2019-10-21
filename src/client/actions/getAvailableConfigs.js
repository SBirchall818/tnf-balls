import { GET_AVAILABLE_CONFIGS } from '../consts/messages';

export default function getAvailableConfigs(userId) {
  return {
    type: GET_AVAILABLE_CONFIGS,
    userId,
  };
}

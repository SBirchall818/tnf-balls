import { LOAD_CONFIG } from '../consts/messages';

export default function getUsers({ configId, userId, cb }) {
  return {
    type: LOAD_CONFIG,
    configId,
    userId,
    cb,
  };
}

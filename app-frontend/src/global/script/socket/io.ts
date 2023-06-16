import io from 'socket.io-client';
import { Vars } from '../../../global/script';

export let IO: any;

export const init_Socket = async () => {
  IO = await io(Vars.api.url);
};

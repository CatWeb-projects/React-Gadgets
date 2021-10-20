import { phones } from './phones';
import { laptops } from './laptops';
import { gadgets } from './gadgets';
import { audio } from './audio';

export const devices = Array.prototype.concat(phones, laptops, gadgets, audio);

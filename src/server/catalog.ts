export { phones } from './phones';
export { tablets } from './tablets';
export { laptops } from './laptops';
export { gadgets } from './gadgets';

import { phones } from './phones';
import { laptops } from './laptops';
import { gadgets } from './gadgets';

export const devices = Array.prototype.concat(phones, laptops, gadgets);

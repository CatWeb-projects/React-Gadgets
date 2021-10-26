import { phones } from './phones';
import { laptops } from './laptops';
import { gadgets } from './gadgets';
import { audio } from './audio';
import { sportAndHealth } from './sport-and-health';

export const devices = Array.prototype.concat(
  phones,
  laptops,
  gadgets,
  audio,
  sportAndHealth
);

import { phones } from './phones';
import { laptops } from './laptops';
import { gadgets } from './gadgets';
import { audio } from './audio';
import { sportAndHealth } from './sport-and-health';
import { personalTransport } from './personal-transport';

export const devices = Array.prototype.concat(
  phones,
  laptops,
  gadgets,
  audio,
  sportAndHealth,
  personalTransport
);

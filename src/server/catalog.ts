import { phones } from './phones';
import { tablets } from './tablets';
import { laptops } from './laptops';
import { gadgets } from './gadgets';
import { audio } from './audio';
import { sportAndHealth } from './sport-and-health';
import { personalTransport } from './personal-transport';
import { Optics } from './optics';

export const devices = Array.prototype.concat(
  phones,
  tablets,
  laptops,
  gadgets,
  audio,
  sportAndHealth,
  personalTransport,
  Optics
);

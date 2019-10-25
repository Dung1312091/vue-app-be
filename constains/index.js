import message from './messages';

const STATUS_INACTIVE = 'inactive';
const STATUS_ACTIVE = 'active';

//get constaint in message
//constain STATUS
export const MESSAGE = message;

export const STATUS = {
  ACTIVE   : STATUS_ACTIVE,
  INACTIVE : STATUS_INACTIVE,
  LONG_ENUM: [STATUS_ACTIVE, STATUS_INACTIVE],
  DEFAULT  : STATUS_ACTIVE
};


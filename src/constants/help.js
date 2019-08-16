//Help Spot Locations
export const TOP_LOCATION = 'TOP_LOCATION';
export const BOTTOM_LOCATION = 'BOTTOM_LOCATION';
//Help Spot Tooltips
export const TOP_MESSAGE = 'This is the top tooltip HELLO! (static)';
export const BOTTOM_MESSAGE = 'This is the bottom tooltip HELLO! (static)';

export const TOP_MESSAGE_DYNAMIC = `This is a top tooltip that is dynamic, have some ${'test1'} and ${'test2'} in your life`;
export const BOTTOM_MESSAGE_DYNAMIC = `This is a bottom tooltip that is dynamic, have some ${'test1'} and ${'test2'} in your life`;

export const TOOLTIP_MAP = {
  [TOP_LOCATION]: TOP_MESSAGE_DYNAMIC,
  [BOTTOM_LOCATION]: BOTTOM_MESSAGE_DYNAMIC, 
};
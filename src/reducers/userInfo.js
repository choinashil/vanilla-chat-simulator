import * as types from '../actions/ActionTypes';

const userPhotos = {
  1: 'https://ca.slack-edge.com/T4XBHDFMJ-U4Y1084UW-9aa19a4132e4-72',
  2: 'https://ca.slack-edge.com/T4XBHDFMJ-U53PL1ATY-e9c2fdd0a5cd-72',
  3: 'https://ca.slack-edge.com/T4XBHDFMJ-U4XJ84KMK-59d7fac716e5-72'
};

export default function userInfo(state = {}, action) {
  switch(action.type) {
    case types.UPDATE_USER_INFO:
      return {
        ...state,
        [action.user.id]: {
          ...state[action.user.id],
          display_name: action.user.display_name,
          user_photo: userPhotos[action.user.id]
        }
      }

    case types.CONNECT:
      return {
        ...state,
        [action.user.id]: {
          display_name: action.user.display_name,
          user_photo: userPhotos[action.user.id],
          connected: true
        }
      };

    case types.DISCONNECT:
      return {
        ...state,
        [action.user.id]: {
          ...state[action.user.id],
          connected: false
        }
      };

    default:
      return state;
  }
}

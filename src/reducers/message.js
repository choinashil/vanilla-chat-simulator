import * as types from '../actions/ActionTypes';

export default function message(state = {}, action) {
  const message = {...state};
  switch(action.type) {
    case types.GET_MESSAGE:
      return {
        ...state,
        [action.message.id]: {
          userId: action.user.id,
          text: action.message.text
        }
      };

    case types.DELETE_MESSAGE:
      delete message[action.message.id];
      return message;

    case types.UPDATE_MESSAGE:
      message[action.message.id] = {
        ...message[action.message.id],
        text: action.message.text
      }
      return message;

    default: 
      return state;
  } 
}

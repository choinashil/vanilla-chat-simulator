import * as types from './ActionTypes';

export function getMessage(data) {
  return {
    type: types.GET_MESSAGE,
    user: data.user,
    message: data.message
  };
}

export function deleteMessage(message) {
  return {
    type: types.DELETE_MESSAGE,
    message
  };
}

export function updateMessage(message) {
  return {
    type: types.UPDATE_MESSAGE,
    message
  };
}

export function updateUserInfo(user) {
  return {
    type: types.UPDATE_USER_INFO,
    user
  };
}

export function connect(user) {
  return {
    type: types.CONNECT,
    user
  };
}

export function disconnect(user) {
  return {
    type: types.DISCONNECT,
    user
  };
}

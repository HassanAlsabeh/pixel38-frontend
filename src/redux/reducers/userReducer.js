import { ActionTypes } from "../contants/action-types";

const initialState = {
  users: [],
  registerusers: [],
  error: {},
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGINUSERS:
      return {
        users: payload,
      };

    case ActionTypes.REGISTERUSERS:
      return {
        registerusers: payload,
      };

    default:
      return state;
  }
};

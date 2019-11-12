import { APP_LOAD } from '../actions/actionsTypes';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD: {
      return { ...state };
    }
    default:
      return state;
  }
};

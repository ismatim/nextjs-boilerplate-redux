import { ASYNC_START, ASYNC_END } from '../actions/actionTypes';

const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type });

    action.payload.then(
      res => {
        action.payload = res;
        store.dispatch({
          type: ASYNC_END,
          promise: action.payload,
          subtype: action.type
        });
        store.dispatch(action);
      },
      error => {
        //If token has expired redirec to login page ?
        action.error = true;
        action.payload = error.response ? error.response.body : error; //TODO: If there is no server should redirect or work offline.
        if (error.message === 'Failed to fetch')
          action.errorDescription = "We're offline right now";
        else action.errorDescription = 'Something went wrong';
        store.dispatch({
          type: ASYNC_END,
          error: action.error,
          payload: action.payload,
          subtype: action.type
        });
        store.dispatch(action);
      }
    );

    return;
  }

  next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}

export { promiseMiddleware };

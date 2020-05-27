
import { reducer } from './reducers'; //import your reducer

let state = { todos: [] };

const getState = () => state;

const listeners = [];

// HELP ME! How do I implement this?
const dispatch = action => {

};

const subscribe = (listener) => {
  listeners.push(listener)
  return () => {
    listeners.filter(lis => lis !== listener)
  }
};


dispatch({});

const reducers = () => reducer;

reducers(); //getting the reducers

function Async(cb, request) {
  request(cb);
}

//helps to do async things
const thunk = function(cb, request, delay) {
  if (delay) {
    return setTimeout(() => {
      Async(cb, request);
    }, delay);
  }
  Async(cb, request);
};

export { getState, dispatch, thunk,subscribe};

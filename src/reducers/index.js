import { MOVE_OBJECTS } from '../actions/index';
import moveObjects from './moveObjects';

const intialState = {
  angle: 45
};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    default:
      return state;
  }
}
import { MOVE_OBJECTS, START_GAME } from '../actions/index';
import moveObjects from './moveObjects';
import startGame from './startGame';

const intialGameState = {
  started: false,
  kills: 0,
  lives: 3
};

const initialState = {
  angle: 45,
  gameState: intialGameState
}

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case START_GAME:
      return startGame(state, intialGameState);
    default:
      return state;
  }
}
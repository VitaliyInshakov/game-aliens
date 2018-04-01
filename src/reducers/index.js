import {
  LEADERBOARD_LOADED,
  LOGGED_IN,
  MOVE_OBJECTS,
  START_GAME,
  SHOOT
} from '../actions/index';
import moveObjects from './moveObjects';
import startGame from './startGame';
import shoot from './shoot';

const intialGameState = {
  started: false,
  kills: 0,
  lives: 3,
  flyingObjects: [],
  lastObjectCreatedAt: new Date(),
  currentPlayer: null,
  players: null,
  cannonBalls: []
};

const initialState = {
  angle: 45,
  gameState: intialGameState
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LEADERBOARD_LOADED:
      return {...state, players: action.players};
    case LOGGED_IN:
      return {...state, currentPlayer: action.player};
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case START_GAME:
      return startGame(state, intialGameState);
    case SHOOT:
      return shoot(state, action);
    default:
      return state;
  }
}
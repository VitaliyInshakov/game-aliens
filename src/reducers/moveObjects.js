import { calculateAngle } from '../utils/formula';
import createFlyingObjects from './createFlyingObjects';

export default function moveObjects(state, action) {
  const mousePosition = action.mousePosition || {
    x: 0,
    y: 0
  };
  const newState = createFlyingObjects(state);
  const { x, y } = mousePosition;
  const angle = calculateAngle(0, 0, x, y);
  return {...newState, angle};
}
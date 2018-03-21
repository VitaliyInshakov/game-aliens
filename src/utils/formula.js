export const pathFromBezierCurve = (cubicBezierCurve) => {
  const { intialAxis, initialControlPoint, endingControlPoint, endingAxis } = cubicBezierCurve;

  return `
    M${intialAxis.x} ${intialAxis.y}
    c ${initialControlPoint.x} ${initialControlPoint.y}
    ${endingControlPoint.x} ${endingControlPoint.y}
    ${endingAxis.x} ${endingAxis.y}
  `
}
function calculateellipseArea() {
  const majorRadius = getInputValueById('ellipse-major-radius');
  const minorrRadius = getInputValueById('ellipse-minor-radius');

  const area = 3.14 * majorRadius * minorrRadius;

  setInnerTextById('ellipse-area', area);
}

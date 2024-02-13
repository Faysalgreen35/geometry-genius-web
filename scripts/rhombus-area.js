function calculateRhombusArea() {
  const majorRadius = getInputValueById('rhombus-perimeter');
  const minorrRadius = getInputValueById('rhombus-apo');

  const area = 3.14 * majorRadius * minorrRadius;

  setInnerTextById('rhombus-area', area);
}

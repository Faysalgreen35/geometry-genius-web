function calculaterectangle() {
  const rectangleBaseInput = document.getElementById('rectangle-base');
  const rectangleBaseText = rectangleBaseInput.value;
  const width = parseFloat(rectangleBaseText);

  console.log(width);

  const rectangleHeightInput = document.getElementById('rectangle-height');
  const rectangleHeightText = rectangleHeightInput.value;
  const length = parseFloat(rectangleHeightText);

  console.log(length);

  //calculate area
  const area = width * length;
  console.log(area);

  //display triangle area
  const triangleAraSpan = document.getElementById('rectangle-area');
  triangleAraSpan.innerText = area;
}

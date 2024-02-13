function calculateTriangle() {
  const trangleBaseInput = document.getElementById('triangle-base');
  const trangleBaseText = trangleBaseInput.value;
  const base = parseFloat(trangleBaseText);

  console.log(base);

  const trangleHeightInput = document.getElementById('triangle-height');
  const trangleHeightText = trangleHeightInput.value;
  const height = parseFloat(trangleHeightText);

  console.log(height);

  //calculate area
  const area = 0.5 * base * height;
  console.log(area);

  //display triangle area
  const triangleAraSpan = document.getElementById('triangle-area');
  triangleAraSpan.innerText = area;
}

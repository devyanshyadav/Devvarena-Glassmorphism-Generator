

var isIncrease = true;
glassBdrRange.addEventListener("input", () => {
  var currentValue = parseFloat(glassBlurRange.value);

  if (isIncrease) {
    var shiftedValue = currentValue + 0.1;
  } else {
    var shiftedValue = currentValue - 0.1;
  }

  glassBlurRange.value = shiftedValue.toFixed(1);
  isIncrease = !isIncrease; // Toggle the flag for the next click

  glassMorphismExecute();
});

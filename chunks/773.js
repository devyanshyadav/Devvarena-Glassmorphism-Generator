
let glassTranspRange = document.querySelector("#glassTranspRange");
let glassBlurRange = document.querySelector("#glassBlurRange");
let glassBdrRange = document.querySelector("#glassBdrRange");
let glassColorSlide = document.querySelector("#glassColorSlide");
let glassOutlineRange = document.querySelector("#glassOutlineRange");

let glassBorderRadius;
let glassBorderOutline;
glassTranspRange.addEventListener("input", () => {
  glassMorphismExecute();
});

glassBlurRange.addEventListener("input", () => {
  glassMorphismExecute();
});

glassOutlineRange.addEventListener("input", () => {
  glassMorphismExecute();
});

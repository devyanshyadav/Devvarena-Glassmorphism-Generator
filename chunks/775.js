
let r;
let g;
let b;
glassColorSlide.addEventListener("input", () => {
  glassMorphismExecute(glassColorSlide.value);
});

let getPreviewglassCode = document.querySelector(".getPreviewglassCode");

function glassMorphismExecute() {
  //This is to convert hex into rgb
  const hex = glassColorSlide.value.replace("#", "");
  r = parseInt(hex.substring(0, 2), 16);
  g = parseInt(hex.substring(2, 4), 16);
  b = parseInt(hex.substring(4, 6), 16);

  glassBorderRadius = `border-radius: ${glassBdrRange.value}px;`;
  if (glassBdrRange.value == "0") {
    glassBorderRadius = "";
  }

  glassBorderOutline = `border: 1px solid rgba(${r}, ${g}, ${b}, ${glassOutlineRange.value});`;
  if (glassOutlineRange.value == "0") {
    glassBorderOutline = "";
  }

  glassPreviewFrameDoc.querySelector(".glassPreviewElement").style.cssText = `
width:500px;
max-width:80%;

height:70%;
background: rgba(${r}, ${g}, ${b}, ${glassTranspRange.value});
${glassBorderRadius}
${glassBorderOutline}
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(${glassBlurRange.value}px);
-webkit-backdrop-filter: blur(${glassBlurRange.value}px);
border: 1px solid rgba(${r}, ${g}, ${b}, ${glassOutlineRange.value});`;

  getPreviewglassCode.textContent = `background: rgba(${r}, ${g}, ${b}, ${glassTranspRange.value});
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(${glassBlurRange.value}px);
-webkit-backdrop-filter: blur(${glassBlurRange.value}px);
${glassBorderRadius}
${glassBorderOutline}
`;
  //This is to remove empty space from the text
  const pre = getPreviewglassCode;
  const lines = pre.textContent
    .split("\n")
    .filter((line) => line.trim() !== "");
  pre.textContent = lines.join("\n");
}

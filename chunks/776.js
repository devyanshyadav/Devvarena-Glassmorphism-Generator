let simpleCssglass = document.querySelector(".SimpleCssglass");

simpleCssglass.addEventListener("click", () => {
  getPreviewglassCode.textContent = `background: rgba(${r}, ${g}, ${b}, ${glassTranspRange.value});
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(${glassBlurRange.value}px);
-webkit-backdrop-filter: blur(${glassBlurRange.value}px);
border: 1px solid rgba(${r}, ${g}, ${b}, ${glassOutlineRange.value});
${glassBorderRadius}`;
});

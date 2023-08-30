
//This is for iframe
let glassPreviewFrame = document.querySelector(".glassPreviewFrame");
let glassPreviewFrameDoc =
  glassPreviewFrame.contentDocument || glassPreviewFrame.contentWindow.document;
let glassPreviewFrameBody = glassPreviewFrameDoc.querySelector("body");
glassPreviewFrameBody.style.cssText = `
    width:100%;
    background-color:#18122B;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
    overflow:hidden;
background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 900 600" opacity="1"><defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="10" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(%3bbblurry-filter)"><ellipse rx="144.5" ry="150" cx="80%" cy="169.73227067427206" fill="%232219ccff"></ellipse><ellipse rx="144.5" ry="150" cx="180.3192707408558" cy="400.1722883744673" fill="	hsl(245, 100%, 60%)"></ellipse></g></svg>');
        background-position: center;
background-repeat: no-repeat;
`;

let glassPreviewElement = glassPreviewFrameDoc.createElement("div");
glassPreviewElement.classList.add("glassPreviewElement");
glassPreviewFrameBody.appendChild(glassPreviewElement);
//This is for px indicator
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".bubble");

    range.addEventListener("input", () => {
        setBubble(range, bubble);
    });
    setBubble(range, bubble);
});

function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = `${val}px`;

    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

//This is for iframe
let glassPreviewFrame = document.querySelector('.glassPreviewFrame');
let glassPreviewFrameDoc = glassPreviewFrame.contentDocument || glassPreviewFrame.contentWindow.document;
let glassPreviewFrameBody = glassPreviewFrameDoc.querySelector('body');
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
`

let glassPreviewElement = glassPreviewFrameDoc.createElement('div');
glassPreviewElement.classList.add('glassPreviewElement');
glassPreviewFrameBody.appendChild(glassPreviewElement);



let glassTranspRange = document.querySelector('#glassTranspRange');
let glassBlurRange = document.querySelector('#glassBlurRange');
let glassBdrRange = document.querySelector('#glassBdrRange');
let glassColorSlide = document.querySelector('#glassColorSlide');
let glassOutlineRange = document.querySelector('#glassOutlineRange');




let glassBorderRadius;
let glassBorderOutline;
glassTranspRange.addEventListener('input', () => {
    glassMorphismExecute()
});

glassBlurRange.addEventListener('input', () => {
    glassMorphismExecute()
});


glassOutlineRange.addEventListener('input', () => {
    glassMorphismExecute()
});

var isIncrease = true;
glassBdrRange.addEventListener('input', () => {

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

let r;
let g;
let b;
glassColorSlide.addEventListener('input', () => {
    glassMorphismExecute(glassColorSlide.value);

});


let getPreviewglassCode = document.querySelector('.getPreviewglassCode')

function glassMorphismExecute() {
    //This is to convert hex into rgb
    const hex = glassColorSlide.value.replace('#', '');
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);

    glassBorderRadius = `border-radius: ${glassBdrRange.value}px;`
    if (glassBdrRange.value == '0') {
        glassBorderRadius = "";

    }

    glassBorderOutline = `border: 1px solid rgba(${r}, ${g}, ${b}, ${glassOutlineRange.value});`
    if (glassOutlineRange.value == '0') {
        glassBorderOutline = "";
    }


    glassPreviewFrameDoc.querySelector('.glassPreviewElement').style.cssText = `
width:500px;
max-width:80%;

height:70%;
background: rgba(${r}, ${g}, ${b}, ${glassTranspRange.value});
${glassBorderRadius}
${glassBorderOutline}
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(${glassBlurRange.value}px);
-webkit-backdrop-filter: blur(${glassBlurRange.value}px);
border: 1px solid rgba(${r}, ${g}, ${b}, ${glassOutlineRange.value});`

    getPreviewglassCode.textContent =
        `background: rgba(${r}, ${g}, ${b}, ${glassTranspRange.value});
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(${glassBlurRange.value}px);
-webkit-backdrop-filter: blur(${glassBlurRange.value}px);
${glassBorderRadius}
${glassBorderOutline}
`
    //This is to remove empty space from the text
    const pre = getPreviewglassCode;
    const lines = pre.textContent.split('\n').filter(line => line.trim() !== '');
    pre.textContent = lines.join('\n');
}


let simpleCssglass = document.querySelector('.SimpleCssglass')


simpleCssglass.addEventListener('click', () => {
    getPreviewglassCode.textContent =
        `background: rgba(${r}, ${g}, ${b}, ${glassTranspRange.value});
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(${glassBlurRange.value}px);
-webkit-backdrop-filter: blur(${glassBlurRange.value}px);
border: 1px solid rgba(${r}, ${g}, ${b}, ${glassOutlineRange.value});
${glassBorderRadius}`
})


//Copy code algorithm;
let copyglassCode = document.querySelector('.copyglassCode');
let whenCodeEcopied = document.querySelector('.whenCodeEcopied')
copyglassCode.addEventListener('click', () => {

    let copyglassText = getPreviewglassCode;
    let range = document.createRange();
    range.selectNode(copyglassText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    // Alert the copied text
    if (document.execCommand("copy")) {
        whenCodeEcopied.classList.toggle('active');
        setTimeout(() => {
            whenCodeEcopied.classList.toggle('active');
        }, 1000)
    }



})

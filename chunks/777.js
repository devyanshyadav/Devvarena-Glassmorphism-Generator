

//Copy code algorithm;
let copyglassCode = document.querySelector(".copyglassCode");
let whenCodeEcopied = document.querySelector(".whenCodeEcopied");
copyglassCode.addEventListener("click", () => {
  let copyglassText = getPreviewglassCode;
  let range = document.createRange();
  range.selectNode(copyglassText);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  // Alert the copied text
  if (document.execCommand("copy")) {
    whenCodeEcopied.classList.toggle("active");
    setTimeout(() => {
      whenCodeEcopied.classList.toggle("active");
    }, 1000);
  }
});

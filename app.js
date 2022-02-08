let colorPickerBg,
colorPicker;
const defaultColorBg = "#ffffff";
const defaultColor = "#838383";

window.addEventListener("load", initPickers, false);

function initPickers() {
    colorPickerBg = document.querySelector("#colorPickerBg");
    colorPickerBg.value = defaultColorBg;
    colorPickerBg.addEventListener("input", updateBg, false);
    colorPickerBg.select();

    colorPicker = document.querySelector("#colorPicker");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", updateText, false);
    colorPicker.select();
}
  
function updateBg(event) {
    const textWrapper = document.querySelector(".contrasts .text-wrapper");
    textWrapper.style.backgroundColor = event.target.value;
}

function updateText(event) {
    const textf = document.querySelector(".contrasts .text");
    textf.style.color = event.target.value;
}
  
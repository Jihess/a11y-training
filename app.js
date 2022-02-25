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

const form = document.getElementById('trainingForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const lastname = document.getElementById('lastname');
  if(lastname.value === '') {
    lastname.nextElementSibling.removeAttribute('hidden');
    lastname.focus();
  } else {
    form.querySelector('.message').textContent = 'message sent successfully!';
    form.querySelector('.message').removeAttribute('hidden');
  }
});

const openPanelsButtons = document.querySelectorAll('.accordion-section .open-panel');
openPanelsButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.accordion-section .panel').forEach(panel => {
      if (panel.previousElementSibling !== btn) {
        panel.setAttribute('hidden', '');
      }
    });
    btn.nextElementSibling.toggleAttribute('hidden');
  });
});
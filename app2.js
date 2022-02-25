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


const FOCUS_CANDIDATES = `
  a, button, input, select, textarea, svg, area, details, summary,
  iframe, object, embed, 
  [tabindex], [contenteditable]
`;

const trapFocus = (focusNode, rootNode = document) => {
  const nodes = [...rootNode.querySelectorAll(FOCUS_CANDIDATES)]
    .filter(node => !focusNode.contains(node) && node.getAttribute('tabindex') !== '-1');
  nodes.forEach(node => node.setAttribute('tabindex', '-1'));
  return {
    release() {
      nodes.forEach(node => node.removeAttribute('tabindex'));
    },
  };
};

const modal = document.querySelector('.modal'),
openModalBtn = document.getElementById('openModal'),
closeModalBtn = document.getElementById('closeModal'),
modalBackdrop = document.querySelector('.modal-backdrop');
let focusTrap;

openModalBtn.addEventListener('click', () => {
    modalBackdrop.removeAttribute('hidden');
    modal.removeAttribute('hidden');
    closeModalBtn.focus();
    focusTrap = trapFocus(modal);
});

closeModalBtn.addEventListener('click', () => {
    modalBackdrop.setAttribute('hidden', '');
    modal.setAttribute('hidden', '');
    focusTrap.release();
    openModalBtn.focus();
});

const openPanelsButtons = document.querySelectorAll('.accordion-section .open-panel');
openPanelsButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.accordion-section .panel').forEach(panel => {
      // hide all panels except the one right after the clicked button
      if (panel.previousElementSibling !== btn) {
        panel.setAttribute('hidden', '');
        panel.previousElementSibling.setAttribute('aria-expanded', false);
      }
    });
    btn.nextElementSibling.toggleAttribute('hidden');

    // toggle aria-expanded value
    if (btn.getAttribute('aria-expanded') === 'true') {
      btn.setAttribute('aria-expanded', false);
    } else {
      btn.setAttribute('aria-expanded', true);
    }
  });
});

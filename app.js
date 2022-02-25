let colorPickerBg,
colorPicker;
const defaultColorBg = "#ffffff";
const defaultColor = "#838383";

window.addEventListener("load", initPickers, false);
window.addEventListener("load", initMap, false);

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

const modal = document.querySelector('.modal'),
openModalBtn = document.getElementById('openModal'),
closeModalBtn = document.getElementById('closeModal'),
modalBackdrop = document.querySelector('.modal-backdrop');

openModalBtn.addEventListener('click', () => {
    modalBackdrop.removeAttribute('hidden');
    modal.removeAttribute('hidden');
});

closeModalBtn.addEventListener('click', () => {
    modalBackdrop.setAttribute('hidden', '');
    modal.setAttribute('hidden', '');
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

function initMap() {
  const myLatLng = { lat: 48.858370, lng: 2.294481 };
  const map = new google.maps.Map(document.getElementById("gMap"), {
    zoom: 12,
    center: myLatLng,
  });
  const contentString = 
    `<div class="gmap-content">
      <p>Eiffel Tower: Champ de Mars, 5 Av. Anatole France, 75007 Paris</p>
    </div>`;
  const infoWindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: myLatLng,
    map,
  });
  infoWindow.open(map,marker);
}
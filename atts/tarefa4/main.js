/*
Se counterClick for par, a lâmpada será apagada. Caso contrário, acesa. A cada click, counterClick é incrementado em 1.
*/

var counterClick = 0;

function changeLamp() {
  counterClick++;
  if (counterClick % 2 == 0) {
    document.getElementById('lampRegion').src = 'imgs/lampOff.png';
  } else {
    document.getElementById('lampRegion').src = 'imgs/lampOn.png';
  }
}
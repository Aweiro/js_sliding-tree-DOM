'use strict';

const tree = document.querySelectorAll('.tree li');

for (const key of tree) {
  const span = document.createElement('span');

  span.textContent = key.firstChild.textContent;
  key.firstChild.textContent = '';
  key.insertAdjacentElement('afterbegin', span);

  let isOn = false;

  span.addEventListener('click', () => {
    isOn = !isOn;

    const keys = key.querySelectorAll('ul');

    if (isOn) {
      keys.forEach((element) => (element.style.display = 'none'));
    } else {
      keys.forEach((element) => (element.style.display = 'block'));
    }
  });
}

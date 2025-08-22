'use strict';

const container = document.querySelector('.container');

for (let i = 1; i <= 256; i++) {
  const unitDiv = document.createElement('div');

  unitDiv.setAttribute(
    'style',
    'background-color: #0f4dde; height: 80px; width: 80px; border: 1px rgba(255, 255, 255, 0.58) solid'
  );

  unitDiv.addEventListener('mouseover', () => {
    unitDiv.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;
  });

  container.append(unitDiv);
}

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const gridSize = prompt('How many squares do you want per side?');

  if (gridSize > 100) {
    alert('Too many squares! Please enter 100 or less.');
    return;
  } else if (isNaN(gridSize)) {
    alert('Invalid input! Please enter a number.');
    return;
  } else if (gridSize < 0) {
    alert('Too less squares! Please enter a number from 1-100');
    return;
  }

  container.innerHTML = '';

  for (let i = 1; i <= gridSize * gridSize; i++) {
    const unitDiv = document.createElement('div');

    unitDiv.setAttribute(
      'style',
      'background-color: #0f4dde; height: 80px; width: 80px; border: 1px rgba(255, 255, 255, 0.58) solid'
    );

    unitDiv.addEventListener('mouseover', () => {
      unitDiv.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )})`;
    });

    container.appendChild(unitDiv);
  }
});

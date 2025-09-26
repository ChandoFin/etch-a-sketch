
// etch-a-sketch.js

const container = document.querySelector('.container');

const sizeBtn = document.createElement('button');

sizeBtn.textContent = 'Choose grid size';
Object.assign(sizeBtn.style, {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
    padding: '10px 14px',
    fontSize: '14px',
    cursor: 'pointer'
});
document.body.appendChild(sizeBtn);


function createGrid(size) {

    const width = container.clientWidth || parseInt(getComputedStyle(container).width) || 1600;
    const squareSize = Math.floor(width / size);

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.className = 'grid-square';
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.background = '#fff';
        square.addEventListener('mouseover', () => 
        square.style.background = 'black');


        container.appendChild(square);
    }
}

sizeBtn.addEventListener('click', () => {
    const text = prompt('Enter grid size (between 1 and 100).');
    if (text === null) return; 
    const n = parseInt(text, 10);
    if (Number.isNaN(n) || n < 1 || n > 100) {
        alert('Please enter a whole number between 1 and 100.');
        return;
    }
    createGrid(n);
});


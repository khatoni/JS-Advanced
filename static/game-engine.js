const board = document.getElementsByClassName('game-board');
const boardSize = 20;
const gameSpeed = 500;

const snake = [];
let gameInterval;

let direction = { x: 1, y: 0 };

function initialize() {
    snakePositions.push({ x: 10, y: 10 });

    handleUserInput();

    gameInterval = setInterval(() => {
        moveSnake();
        renderSnake();
    }, 500);
}

function handleUserInput() {
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                direction = { x: 0, y: -1 };
                break;
            case 'ArrowDown':
                direction = { x: 0, y: 1 };
                break;
            case 'ArrowLeft':
                direction = { x: -1, y: 0 }
                break;
            case 'ArrowRight':
                direction = { x: 1, y: 0 }
                break;
        }
    });
}

function moveSnake() {
    const head = snakePositions[0];
    const newHead = { x: head.x + direction.x, y: head.y + direction.y };

    snakePositions.unshift(newHead);
    snakePositions.pop();
}

function renderSnake() {
    
}
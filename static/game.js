const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const gridSize = 50;
const gameWidth = 700;
const gameHeight = 700;
let snake = [{ x: 150, y: 150 }, { x: 100, y: 150 }, { x: 50, y: 150 }];
let food = generateFood();
let direction = 'RIGHT';
let score = 0;

function generateFood() {
    const x = Math.floor(Math.random() * (gameWidth / gridSize)) * gridSize;
    const y = Math.floor(Math.random() * (gameHeight / gridSize)) * gridSize;
    return { x, y };
}

function drawGame() {
    ctx.clearRect(0, 0, gameWidth, gameHeight);
    drawSnake();
    drawFood();
    moveSnake();
    checkCollisions();
    updateScore();
}

function drawSnake() {
    snake.forEach(segment => {
        ctx.fillStyle = 'green';
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
    });
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

function moveSnake() {
    let head = Object.assign({}, snake[0]);
    if (direction === 'UP') head.y -= gridSize;
    if (direction === 'DOWN') head.y += gridSize;
    if (direction === 'LEFT') head.x -= gridSize;
    if (direction === 'RIGHT') head.x += gridSize;
    snake.unshift(head);

    // Check if snake eats food
    if (head.x === food.x && head.y === food.y) {
        score++;
        food = generateFood();
    } else {
        snake.pop();
    }
}

function checkCollisions() {
    const head = snake[0];
    // Wall collision
    if (head.x < 0 || head.x >= gameWidth || head.y < 0 || head.y >= gameHeight) {
        gameOver();
    }
    // Self-collision
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver();
        }
    }
}

function gameOver() {
    alert("Game Over!");
    snake = [{ x: 150, y: 150 }, { x: 100, y: 150 }, { x: 50, y: 150 }];
    score = 0;
    food = generateFood();
}

function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}`;
}

function changeDirection(event) {
    if (event.keyCode === 37 && direction !== 'RIGHT') direction = 'LEFT';
    if (event.keyCode === 38 && direction !== 'DOWN') direction = 'UP';
    if (event.keyCode === 39 && direction !== 'LEFT') direction = 'RIGHT';
    if (event.keyCode === 40 && direction !== 'UP') direction = 'DOWN';
}

// Game loop
setInterval(drawGame, 100);
window.addEventListener('keydown', changeDirection);

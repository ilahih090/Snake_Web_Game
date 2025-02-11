# Flask Snake Game

A simple and interactive Snake game built using Flask for the backend and HTML5, CSS, and JavaScript for the frontend. Control the snake, eat food to grow, and avoid collisions with the walls or yourself. The game tracks your score in real-time.

## Features
- **Snake Movement**: Control the snake using arrow keys (Up, Down, Left, Right).
- **Food Consumption**: Eating food increases the snake's length and score.
- **Collision Detection**: The game ends if the snake collides with the walls or itself.
- **Real-Time Score Display**: The score updates dynamically as you play.
- **Responsive Design**: Compatible with all modern web browsers.

## Installation
Follow these steps to run the game on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/ilahih090/Snake_Web_Game.git
cd my_flask_snake_game
```

### 2. Set Up a Virtual Environment (Recommended)
It is recommended to use a virtual environment to manage dependencies:
```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

### 3. Run the Flask Application
Start the Flask development server:
```bash
python app.py
```
Once running, you should see:
```
Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

### 4. Play the Game
Open a web browser and go to [http://127.0.0.1:5000/](http://127.0.0.1:5000/) to start playing.

## How to Play
- **Arrow Keys**: Control the snake's movement.
- **Eat Food**: Grow in length and increase your score.
- **Avoid Collisions**: The game ends if the snake crashes into walls or itself.
- **Restart**: Refresh the page to play again.

## Scoring
- Every time the snake eats food, the score increases by **1 point**.
- The score is displayed at the top of the screen in real-time.
- The game ends upon collision with the walls or itself.

## Project Files
### Backend
- **`app.py`**: The main Flask application that serves the game.

### Frontend
- **`templates/index.html`**: The main HTML structure of the game.
- **`static/css/style.css`**: Handles the styling and responsiveness.
- **`static/js/game.js`**: Implements game logic, including:
  - Snake movement
  - Food generation
  - Collision detection
  - Score updates
  - Key event handling

Enjoy playing the Flask Snake Game!

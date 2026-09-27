# 🎮 Tic-Tac-Toe
A simple **Tic-Tac-Toe game built with HTML, CSS, and JavaScript**.

I built this project to practice JavaScript concepts and understand how HTML, CSS, and JavaScript work together to create an interactive web application.

## 🚀 About the Project

This is a browser-based Tic-Tac-Toe game where:
* The player plays as **X**
* The computer plays as **O**
* The player can click on any empty cell to make a move
* The computer automatically makes its move
* The game checks for a winner after every move
* A winning line is displayed when someone wins
* The game also detects a draw
* The **Restart** button resets the game

## 🛠️ Technologies Used
* **HTML** – Created the structure of the game
* **CSS** – Designed the game board, cells, buttons, and layout
* **JavaScript** – Added the game logic and computer moves

## 🧠 JavaScript Concepts Practiced
While building this project, I practiced several JavaScript concepts:
* DOM selection using `querySelector()` and `querySelectorAll()`
* Event listeners
* Functions
* Arrays
* `for...of` loops
* `forEach()`
* Conditional statements
* Variables and constants
* `classList`
* `textContent`
* `setTimeout()`
* `Math.random()`
* Basic game logic

## 🤖 Computer Logic
The computer doesn't make completely random moves.

It follows a simple priority:
1. **Try to win** if it has two `O`s and an empty cell
2. **Block the player** if the player has two `X`s and an empty cell
3. **Choose the center** if it is available
4. **Choose a corner** if possible
5. **Choose any remaining empty cell**

This helped me understand how simple decision-making logic can be implemented using JavaScript.

## 📂 Project Structure
```text
tic-tac-toe/
│
├── index.html
├── style.css
└── script.js
```

## 🎯 What I Learned
This project helped me understand that JavaScript is not just about writing syntax. It can be used to:

* Read and modify HTML elements
* Respond to user actions
* Change styles dynamically
* Store and check data
* Create logic for interactive applications

Building the game also gave me more practice with **arrays, loops, conditions, functions, and DOM manipulation**.

## 🔮 Future Improvements
Some things I could add in the future:
* Two-player mode
* Difficulty levels
* Score tracking
* Better computer AI
* Sound effects
* Improved animations
* Game history

## 📌 Note

This project was built as part of my **JavaScript practice and learning journey**. The main goal was to strengthen my understanding of JavaScript logic and DOM manipulation by building something interactive.

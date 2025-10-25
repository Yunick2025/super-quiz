* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 100%;
    max-width: 600px;
    padding: 20px;
}

.quiz-box {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: slideIn 0.5s ease;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

h1 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
    font-size: 2.5em;
}

h2 {
    color: #333;
    margin-bottom: 20px;
}

.input-name {
    width: 100%;
    padding: 15px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 10px;
    margin: 20px 0;
    transition: border-color 0.3s;
}

.input-name:focus {
    outline: none;
    border-color: #667eea;
}

.btn-start, .btn-next, .btn-restart, .btn-share {
    width: 100%;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.2s;
}

.btn-start:hover, .btn-next:hover, .btn-restart:hover {
    transform: scale(1.05);
}

.btn-share {
    background: linear-gradient(135deg, #00b4d8 0%, #0077b6 100%);
    margin-top: 10px;
}

.quiz-header {
    margin-bottom: 30px;
}

.quiz-progress {
    text-align: center;
    color: #666;
    margin-top: 10px;
}

.btn-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin: 30px 0;
}

.btn-answer {
    padding: 20px;
    font-size: 16px;
    background: #f0f0f0;
    border: 2px solid transparent;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-answer:hover {
    background: #e0e0e0;
    transform: translateY(-2px);
}

.btn-answer.correct {
    background: #4caf50;
    color: white;
    border-color: #45a049;
}

.btn-answer.incorrect {
    background: #f44336;
    color: white;
    border-color: #da190b;
}

.score-display {
    text-align: center;
    margin: 30px 0;
}

.score {
    font-size: 24px;
    color: #666;
}

.score-number {
    font-size: 48px;
    font-weight: bold;
    color: #667eea;
    margin: 10px 0;
}

.score-percent {
    font-size: 36px;
    color: #764ba2;
}

.message {
    text-align: center;
    font-size: 20px;
    margin: 20px 0;
    padding: 15px;
    border-radius: 10px;
}

.player-name {
    text-align: center;
    font-size: 20px;
    color: #666;
    margin-bottom: 20px;
}

/* Responsive */
@media (max-width: 600px) {
    .quiz-box {
        padding: 20px;
    }
    
    h1 {
        font-size: 2em;
    }
    
    .btn-grid {
        grid-template-columns: 1fr;
    }
}
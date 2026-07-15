"use strict";

function createGame() {
  // Замыкание: переменная secretNumber видна только внутри этой функции
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  function askGuess() {
    // Запрос ввода у пользователя
    const input = prompt("Угадай число от 1 до 100");

    // Обработка нажатия "Отмена" (возвращает null)
    if (input === null) {
      alert("Игра окончена");
      return;
    }

    const guess = Number(input);

    // Проверка: ввел ли пользователь именно число
    if (isNaN(guess)) {
      alert("Введи число!");
      // Рекурсивный вызов для повторного запроса
      askGuess();
      return;
    }

    // Логика сравнения
    if (guess > secretNumber) {
      alert("Загаданное число меньше");
      askGuess(); // Рекурсия
    } else if (guess < secretNumber) {
      alert("Загаданное число больше");
      askGuess(); // Рекурсия
    } else {
      // Угадал
      alert("Поздравляю, Вы угадали!!!");
    }
  }

  return askGuess;
}

// Запуск игры
const startGame = createGame();
startGame();

"use strict";

const startGame = () => {
  const createGame = () => {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    const maxItems = 10;
    console.log(`[Отладка] Загадано число: ${secretNumber}`); // Для разработчика

    function askGuess() {
      if (maxItems <= 0) {
        const playAgain = confirm("Попытки закончились! Хотите сыграть еще?");
        if (playAgain) {
          location.reload(); // Перезагрузка страницы для полного сброса состояния
        } else {
          alert("До свидания!");
        }
        return;
      }

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
  };
};

// Запуск игры
createGame();
startGame();

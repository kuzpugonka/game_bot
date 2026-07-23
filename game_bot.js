"use strict";

const startGame = () => {
  const createGame = () => {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let maxItems = 10;
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

      const input = prompt(
        `Угадай число от 1 до 100. Осталось попыток: ${maxItems}`,
      );

      // Обработка нажатия "Отмена" (возвращает null)
      if (input === null) {
        alert("Игра окончена");
        location.reload(); // Перезагрузка страницы для полного сброса состояния
        return;
      }
      // проверка ввода на пустое значение
      if (input === "") {
        alert("Пожалуйста, введите значение перед продолжением!");
        askGuess();
        return;
      }

      const guess = Number(input);
      console.log("guess: ", guess);
      console.log("guess: ", typeof guess);

      if (isNaN(guess)) {
        // Проверка: ввел ли пользователь именно число
        alert("Введи число!");
        // Рекурсивный вызов для повторного запроса
        askGuess();
        return;
      }

      // Логика сравнения
      if (guess > secretNumber) {
        maxItems--;
        alert(`Загаданное число меньше. Осталось попыток: ${maxItems}`);
        askGuess(); // Рекурсия
      } else if (guess < secretNumber) {
        maxItems--;
        alert(`Загаданное число больше. Осталось попыток: ${maxItems}`);
        askGuess(); // Рекурсия
      } else {
        // Угадал
        const playAgain = confirm(
          "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?",
        );
        if (playAgain) {
          location.reload(); // Перезагрузка страницы для полного сброса состояния
        } else {
          alert("Спасибо за игру!");
        }
        return;
      }
    }

    return askGuess;
  };
  // Запуск игры
  const game = createGame();
  game();
};

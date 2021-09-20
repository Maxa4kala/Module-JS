//Получаю инпут
let timerInput = document.querySelector(".time");
//Получаю кнопку старт
let buttonRun = document.querySelector(".start");
//Получаю блок, в который будет выводиться время после нажатия "Старт"
let timerShow = document.querySelector(".timer");
//Получаю кнопку пауза
let buttonPause = document.querySelector(".pause");
//Состояние таймера (для определения идти таймеру или нет)
let pause = false;
//счё
let counter = 0;
//обратботчик и логика клика по кнопке пауза
buttonPause.addEventListener('click', () => {
    //изменение состояния при клике на паузу
    pause = !pause;
    //если пауза, то текст кнопки "стоп"
    if (pause) buttonPause.innerHTML = 'Стоп';
    counter += 1; //это чтоб подтормаживания не было
    if (!pause) counter -= 1; //это чтоб подтормаживания не было
    buttonPause.innerHTML = 'Продолжить'; //тоже изменения текста кнопки
});
//обработчик и логика клика по кнопке старт
buttonRun.addEventListener('click', function () {
    let time = parseInt(timerInput.value); //получаю значение инпута
    counter = time; //актуализация счётчика, чтоб не подтормаживал
    //логика счётчика
    let timer = setInterval(function () {
        let seconds = counter; //получаю секунды
        //если время вышло
        if (counter <= 0) {
            let sound = new Howl({
                src: ['alarm.mp3']
            });
            sound.play();
            clearInterval(timer); //остановка сэтинтервала
            timerShow.innerHTML = ''; //отчистка блока с временем
        }
        //если время ещё не вышло
        else {
            let strTimer = `${seconds}`; //получаю значение секунд
            timerShow.innerHTML = strTimer; //вывожу секунды
        }
        //если режим паузы выключен, то -секунда
        if (!pause) --counter;
    }, 1000)
});

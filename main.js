'use strict'


// ? Запитай у користувача 2 числа і знайди найбільший спільний дільник.

let divisorStart = true;

while (divisorStart) {
    let userNum1 = prompt('Введи число 1 \n Числа тільки додатні', '');
    let userNum2 = prompt('Введи число 2 \n Числа тільки додатні', '');

    if (userNum1 === null || userNum2 === null) {
        divisorStart = false;
    } else if (userNum1.trim().length === 0 || userNum2.trim().length === 0 || +userNum1 !== +userNum1 || +userNum2 !== +userNum2) {
        alert('Введи в форматі число');
    } else {
        if (+userNum1 === 0) {
            alert(`Найбільший спільний дільник ${userNum2}`);
        } else {
            while (+userNum2 !== 0) {
                if (+userNum1 > +userNum2) {
                    userNum1 = +userNum1 - +userNum2;
                } else {
                    userNum2 = +userNum2 - +userNum1;
                }
            }
            alert(`Найбільший спільний дільник ${userNum1}`);
        }
        divisorStart = false;
    }
}

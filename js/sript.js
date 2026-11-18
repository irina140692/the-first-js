
let age = 25;

if (age < 18) {
    console.log("Несовершеннолетний");
} else if (age >= 18 && age <= 59) {
    console.log("Взрослый");
} else {
    console.log("Пенсионный возраст");
}


console.log(" ... ")


// let score = 87;


// if (score >= 90 && score <= 100) {
//     grade = 5;
//     console.log = "Отлично (5)";
// } else if (score >= 75 && score < 89) {
//     grade = 4;
//     console.log = "Хорошо (4)";
// } else if (score >= 60 && score < 74) {
//     grade = 3;
//     console.log = "Удовлетворительно (3)";
// } else if (score >= 0 && score < 59) {
//     grade = 2;
//     {
//    else {
//             console.log("Неудовлетворительно (2)");
//         }
//     }

let score = 85;

if (score < 0 && score > 100) {
    console.log("Некорректное количество баллов");
} else if (score >= 90) {
    console.log("Отлично (5)");
} else if (score >= 75) {
    console.log("Хорошо (4)");
} else if (score >= 60) {
    console.log("Удовлетворительно (3)");
} else {
    console.log("Неудовлетворительно (2)");
}


console.log(" ... ")


// Данные для авторизации
const Login = "admin";
const Password = "12345";

// Запрашиваем логин у пользователя
const innerLogin = prompt("Enter your login");

// Проверяем правильность логина
if (innerLogin === Login) {

    // Если логин правильный, запрашиваем пароль
    const innerPassword = prompt("Enter your password");

    // Проверяем правильность пароля
    if (innerPassword === Password) {

        alert("Welcome!");
        // console.log("Welcome!");

    } else {

        alert("Wrong Password");
        // console.log("Wrong Password");

    }

} else {

    alert("Wrong Login");
    // console.log("Wrong Login");

}

console.log(" ... ")

let number1 = 20;
let number2 = 5;
let operation = "+";

switch (operation) {
    case "+":
        console.log(number1 + number2);
        break;
    case "-":
        console.log(number1 - number2);
        break;

    case "*":
        console.log(number1 * number2);
        break;

    case "/":
        if (number2 === 0) {
            console.log("На ноль делить нельзя");
        } else {
            console.log(number1 / number2);
        }
        break;
    default:
        console.log("Неизвестная операция");
}



console.log(" ... ")


let Age = 20;
let isRegistered = true;
let isBlocked = false;

if (Age >= 18 && isRegistered && !isBlocked) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}


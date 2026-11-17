
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



const Login = "admin";
const Password = "12345";

let login = "user";
let password = "12345";

if (login !== Login) {
    console.log("Пользователь не найден");
} else if (password === Password) {
    console.log("Добро пожаловать!");
} else {
    console.log("Неверный пароль");
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


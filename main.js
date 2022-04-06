const title = prompt("Как называется ваш проект?");;
const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const adaptive = confirm("Нужен ли адаптив на сайте?");
const rollback = Math.floor(Math.random() * 100) + 1;

let service1 = 0;
let service2 = 0;
let servicePrice1 = 0;
let servicePrice2 = 0;
let fullPrice = 0;
let servicePercentPrice = 0;


function showTypeOf(objArray) {

    for (let i = 0; i < objArray.length; i++) {

        console.log(typeof(objArray[i]));
    }
}

function getTitle() {

    const titleTrimmed = title.trim().split("");

    return titleTrimmed[0].toUpperCase().concat(...titleTrimmed.splice(1, titleTrimmed.length - 1)).toString();
}

function getFullPrice(nextFunc) {

    fullPrice = screenPrice + allServicePrices();

    nextFunc();
}

function getRollbackMessage() {

    if (fullPrice > 30000) {

        console.log("Даем скидку в 10%");
    }
    else if (fullPrice >= 15000 && fullPrice <= 30000) {
    
        console.log("Даем скидку в 5%");
    }
    else if (fullPrice < 15000 && fullPrice > 0 ) {
    
        console.log("Скидка не предусмотрена");
    }
    else if (fullPrice < 0) {
        
        console.log("Что-то пошло не так");
    }
}

let allServicePrices = function getAllServicePrices() {

    return servicePrice1 + servicePrice2;
}

function serviceQuestion() {

    for (let i = 0; i < 2; i++) {

        if (i === 0) {

            service1 = prompt('Какой дополнительный тип услуги нужен?');
            servicePrice1 = +prompt('Сколько это будет стоить?'); 
        }
        if (i === 1) {

            service2 = prompt('Какой дополнительный тип услуги нужен?');
            servicePrice2 = +prompt('Сколько это будет стоить?'); 
        }
    }
}

servicePercentPrice = function getServicePercentPrice() {

    return Math.floor(fullPrice - rollback);
}

showTypeOf([title, fullPrice, adaptive]);
serviceQuestion();
getFullPrice(servicePercentPrice);
getRollbackMessage();

console.log('Стоимость за вычетом посреднеческих услуг: ', servicePercentPrice());
console.log(...screens.split(', '));
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани” и “Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
console.log(screens.toLowerCase().split());
console.log(fullPrice * (rollback / 100));



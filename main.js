const isNumber = function (num) {

    return !isNaN(parseFloat(num)) && isFinite(num);
}

let title = prompt("Как называется ваш проект?");

while (typeof(title) !== 'string' || title.trim() === "") {

    title = prompt("Как называется ваш проект?");
}

let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

while (typeof(screens) !== 'string' || screens.trim() === "") {

    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
}

let screenPrice = prompt("Сколько будет стоить данная работа?");

while (!isNumber(screenPrice)) {

    screenPrice = prompt("Сколько будет стоить данная работа?");
}

let adaptive = confirm("Нужен ли адаптив на сайте?");
let rollback = Math.floor(Math.random() * 100) + 1;

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

    fullPrice = +screenPrice + getAllServicePrices();

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

const getAllServicePrices = function () {

    const allServicePrices = parseFloat(servicePrice1) + parseFloat(servicePrice2);
    return allServicePrices;
}

function serviceQuestion() {

    for (let i = 0; i < 2; i++) {

        if (i === 0) {

            service1 = prompt('Какой дополнительный тип услуги нужен?');

            while (typeof(service1) !== 'string' || service1.trim() === "") {

                service1 = prompt('Какой дополнительный тип услуги нужен?');
            }

            servicePrice1 = prompt('Сколько это будет стоить?'); 
            
            while (!isNumber(servicePrice1)) {

                servicePrice1 = prompt('Сколько это будет стоить?');
            }
        }
        if (i === 1) {

            service2 = prompt('Какой дополнительный тип услуги нужен?');

            while (typeof(service2) !== 'string' || service2.trim() === "") {

                service2 = prompt('Какой дополнительный тип услуги нужен?');
            }

            servicePrice2 = prompt('Сколько это будет стоить?'); 

            while (!isNumber(servicePrice2)) {

                servicePrice2 = prompt('Сколько это будет стоить?');
            }
        }
    }
}

const getServicePercentPrice = function () {

    servicePercentPrice = Math.floor(fullPrice - rollback);
    return servicePercentPrice;
}

showTypeOf([title, fullPrice, adaptive]);
serviceQuestion();
getFullPrice(getServicePercentPrice);
getRollbackMessage();

console.log('Стоимость за вычетом посреднеческих услуг: ', getServicePercentPrice());
console.log(...screens.split(', '));
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани” и “Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
console.log(screens.toLowerCase().split());
console.log(fullPrice * (rollback / 100));



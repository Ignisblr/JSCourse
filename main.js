const title = prompt("Как называется ваш проект?");;
const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
const adaptive = (Boolean)(prompt("Нужен ли адаптив на сайте?"));
const screenPrice = (Number)(prompt("Сколько будет стоить данная работа?"));;


let service1 = 0;
let service2 = 0;
let servicePrice1 = 0;
let servicePrice2 = 0;

let fullPrice = 0;
const rollback = Math.floor(Math.random() * 100) + 1;
const servicePercentPrice = Math.floor(fullPrice - rollback);

function getType(objArray) {

    for (let i = 0; i < objArray.length; i++) {

        console.log(typeof(objArray[i]));
    }
}

function getFullPrice() {

    fullPrice = parseInt(screenPrice) + parseInt(servicePrice1) + parseInt(servicePrice2);

    if (fullPrice > 30000) {

        console.log("Даем скидку в 10%");
    }
    else if (fullPrice > 15000 && fullPrice < 30000) {

        console.log("Даем скидку в 5%");
    }
    else if (fullPrice < 15000 && fullPrice > 0 ) {

        console.log("Скидка не предусмотрена");
    }
    else {
        
        console.log("Что-то пошло не так");
    }
}

function serviceQuestion() {

    for (let i = 0; i < 2; i++) {

        if ( i === 0) {

            service1 = prompt('Какой дополнительный тип услуги нужен?');
            servicePrice1 = prompt ('Сколько это будет стоить?'); 
        }
        if ( i === 1) {

            service2 = prompt('Какой дополнительный тип услуги нужен?');
            servicePrice2 = prompt ('Сколько это будет стоить?'); 
        }
    }
}

getType([title, fullPrice, adaptive]);
serviceQuestion();
getFullPrice();

console.log('Стоимость за вычетом посреднеческих услуг: ', servicePercentPrice);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани” и “Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
console.log(screens.toLowerCase().split());
console.log(fullPrice * (rollback / 100));



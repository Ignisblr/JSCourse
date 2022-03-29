const title = 'Lesson 2';
const screens = "Простые, Сложные, Интерактивные";
const fullPrice = 1000;
const adaptive = false;

let screenPrice = 26;
let rollback = Math.floor(Math.random() * 100) + 1;

console.log(title, fullPrice, adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани” и “Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
console.log(screens.toLowerCase().split());
console.log(fullPrice * (rollback / 100));



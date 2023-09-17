let button = document.querySelector(".button");
let advice = document.querySelector(".advice");
let phrase = document.querySelector(".phrase");
let image = document.querySelector(".image");

let phrases = [
    "пойти в баню",
    "пойти спать",
    "подумать почему массивы начинаются с 0",
    "заказать рандомную хрень с алиекспресс",
    "болтать с преподом",
    "сделай ты домашку наконец то",
    'прочитать новости и ужаснуться в комментариях',
    'попасть в поток грустных песен и вспомнить все ошибки молодости',
    'посмотреть трейлер сериала и заодно первый сезон',
    'проверить непрочитанное в Telegram-каналах', 
];

function getRandElement(arr) {
    let randIndex = Math.random() * arr.length;
    let randNomber = Math.floor(randIndex);
    return arr[randNomber];
}
let randomElement = getRandElement(phrases);
console.log(randomElement);


button.addEventListener('click', function (){
    phrase.textContent = getRandElement(phrases)
});
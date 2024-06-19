// 1. функция, которая проверяет, содержит ли строка только цифры
const regExp = /Регулярные выражения/

const containsOnlyDigits = (str) => {
    return /^\d+$/.test(str);
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false 

// 2. Функция "Прошла секунда"
const oneSecond = () => {
    setInterval(() => {  
    console.log("Прошла секунда");
    }, 1000);
};

oneSecond();

// 3. Вывести числа от 1 до 10 с интервалом в 1 секунду, затем остановить.

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;
        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000);
};

count();


// 4. 
const block = document.querySelector('.block');

block.addEventListener('click', () => {
    block.classList.toggle('background');
});



// 5. Отправить GET запрос на JSON 
const request = new XMLHttpRequest () // 1. Создание запроса
request.open('GET', 'data.json') // 2. Указание метода запроса и пути
request.setRequestHeader('Content-type', 'application/json') // 3. Указание заголовка запроса
request.send() // 4. Отправка запроса

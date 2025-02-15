# Strings-Methods

## Строки

В JavaScript любые текстовые данные являются строками. Не существует отдельного типа «символ», который есть в ряде других языков.


## Кавычки

В JavaScript есть разные типы кавычек.

Строку можно создать с помощью одинарных, двойных либо обратных кавычек:

```javascript
let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;
```
Одинарные и двойные кавычки работают, по сути, одинаково, а если использовать обратные кавычки, то в такую строку мы сможем вставлять произвольные выражения, обернув их в `${…}`:

```javascript
function sum(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
```

Ещё одно преимущество обратных кавычек — они могут занимать более одной строки, вот так:
```javascript
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList); // список гостей, состоящий из нескольких строк
```
Выглядит вполне естественно, не правда ли? Что тут такого? Но если попытаться использовать точно так же одинарные или двойные кавычки, то будет ошибка:
```javascript
let guestList = "Guests: // Error: Unexpected token ILLEGAL
  * John";
  ```
  Одинарные и двойные кавычки в языке с незапамятных времён: тогда потребность в многострочных строках не учитывалась. Что касается обратных кавычек, они появились существенно позже, и поэтому они гибче.

## Длина строки
Свойство `length` содержит длину строки:
```javascript
console.log( `My\n`.length ); // 3
```
Обратите внимание, `\n` — это один спецсимвол, поэтому тут всё правильно: длина строки `3`.

```
length — это свойство
Бывает так, что люди с практикой в других языках случайно пытаются вызвать его, добавляя круглые скобки: они пишут str.length() вместо str.length. Это не работает.

Так как str.length — это числовое свойство, а не функция, добавлять скобки не нужно.
```

## Method charAt() and At()

Методы `charAt()` и `at()` в `JavaScript` используются для получения одного символа из строки. Давайте их сравним!

### Метод `charAt()`

Метод `charAt(index)` возвращает символ из строки по заданному индексу.

### Синтаксис:
```
string.charAt(index);
```

```javascript
let text = "Hello";
console.log(text.charAt(1)); // "e"
console.log(text.charAt(4)); // "o"
console.log(text.charAt(10)); // "" (пустая строка, так как индекс отсутствует)

```

### Особенности:

- Если индекс выходит за пределы строки, метод возвращает пустую строку ("").
- Не поддерживает отрицательные индексы


###  Метод `at()`

Метод `at(index)` также возвращает символ по индексу, но при этом поддерживает `отрицательные индексы!`

### Синтаксис:

`string.at(index);`

### ✅ Пример:
```javascript
let text = "Hello";
console.log(text.at(1));   // "e"
console.log(text.at(-1));  // "o" (это последний символ!)
console.log(text.at(-2));  // "l"
console.log(text.at(10));  // undefined (индекс отсутствует)
```

### Особенности:

- Поддерживает отрицательные индексы (считает с конца).
- Если индекс выходит за пределы строки, возвращает undefined.


## 📌 Основные различия между `charAt()` и `at()`

Особенность | 	`charAt(index)` | `at(index)`
------------|-------------------|--------------
Отрицательные индексы| 	❌ Нет | ✅ Да
Если индекс отсутствует | `""` (пустая строка) | `undefined`
Новый или старый метод | ⏳ Старый (ES3) | 🚀 Новый (ES2022)


## 🎯 Какой метод лучше использовать?
- Если вам нужны отрицательные индексы, используйте `at()`.
- Если вам нужна поддержка старых браузеров, используйте `charAt()`.
> Совет: Метод `at()` также работает с массивами (arrays)!



## Method `toString()`

Метод `toString()` используется для преобразования различных типов данных в строку. Он доступен у всех объектов JavaScript.

## ✅ 1. Использование с числами `(Number)`
Метод `toString()` преобразует число в строку.

```javascript
let num = 123;
console.log(num.toString());   // "123"
console.log((123).toString()); // "123"
console.log((10).toString(2)); // "1010" (двоичная система)
console.log((255).toString(16)); // "ff" (шестнадцатеричная система)
```

Особенность:

- Можно передавать основание системы счисления (2 — двоичная, 16 — шестнадцатеричная и т. д.).

## ✅ 2. Использование с массивами `(Array)`
Метод `toString()` превращает массив в строку, разделяя элементы запятыми.

```javascript
let arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
```

### Особенность:

- Работает аналогично join(","), но всегда использует запятую.

### 🔹 Метод `concat()`

Метод `concat()` используется для объединения строк или массивов. Он не изменяет оригинальные данные, а создаёт новую строку или массив.

### ✅ 1. `concat()` для строк `(String)`
Этот метод объединяет несколько строк в одну.

### 📌 Синтаксис:

`string1.concat(string2, string3, ...);`

### ✅ Пример:

```javascript
let str1 = "Hello";
let str2 = "World";
let result = str1.concat(" ", str2, "!");
console.log(result); // "Hello World!"
```

### ✅ 2. `concat()` для массивов `(Array)`
Этот метод объединяет массивы в один.

#### 📌 Синтаксис:

`array1.concat(array2, array3, ...);`

### ✅ Пример:

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let newArr = arr1.concat(arr2, arr3);
console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

##### Особенности:

- Можно объединять несколько массивов.
- Можно добавлять отдельные элементы:


## Method `trim()`

### 1️⃣ `trim()` – удаляет пробелы с начала и конца строки

### ✅ Пример:
```javascript
let text = "   Hello World!   ";
console.log(text.trim()); // "Hello World!"
```
📌 _Особенность_: Удаляет только пробелы в начале и конце, но не внутри строки.

## Method `includes`

### 2️⃣ `includes()` – проверяет, содержится ли подстрока в строке

### ✅ Пример:
```javascript
let sentence = "JavaScript is awesome!";
console.log(sentence.includes("JavaScript")); // true
console.log(sentence.includes("Python")); // false
```
📌 *Особенность*: Можно передать второй аргумент – с какого индекса начинать поиск.

`console.log(sentence.includes("is", 10)); // false (ищем после 10-го индекса)`

## Methdo `indexOf()`

### 3️⃣ `indexOf()` – возвращает первый индекс найденного значения

### ✅ Пример:
```javascript
let text = "Hello, world!";
console.log(text.indexOf("o")); // 4
console.log(text.indexOf("world")); // 7
console.log(text.indexOf("Python")); // -1 (если не найдено)
```
📌 _Особенность_: Если символ или подстрока не найдены, возвращает -1.

### 4️⃣ `lastIndexOf()` – находит последний индекс подстроки
#### ✅ Пример:

```javascript
let text = "Hello, world! Hello again!";
console.log(text.lastIndexOf("Hello")); // 14 (ищет с конца)
console.log(text.lastIndexOf("o")); // 20
```
📌 Разница с `indexOf()` – ищет с конца, но индексы считаются спереди.

### 5️⃣ `replace()` – заменяет первое вхождение подстроки
#### ✅ Пример:
```javascript
let text = "Hello, world!";
console.log(text.replace("world", "JavaScript")); // "Hello, JavaScript!"
```
#### 📌 Особенность: Только первое совпадение меняется!
```javascript
let text = "apple apple apple";
console.log(text.replace("apple", "banana")); // "banana apple apple"
```

### 6️⃣ `replaceAll()` – заменяет все вхождения подстроки
#### ✅ Пример:
```javascript
let text = "apple apple apple";
console.log(text.replaceAll("apple", "banana")); // "banana banana banana"
```
📌 _Альтернатива с регулярным выражением:_

```javascript 
console.log(text.replace(/apple/g, "banana")); // "banana banana banana"
```

### 7️⃣ `substring()` – извлекает часть строки (без отрицательных индексов)
#### ✅ Пример:

```JavaScript
let text = "JavaScript";
console.log(text.substring(0, 4)); // "Java"
console.log(text.substring(4)); // "Script" (до конца)
```
📌 _Особенность_: Индекс конца не включается!

### 8️⃣ `slice()` – извлекает часть строки (поддерживает отрицательные индексы)
#### ✅ Пример:

```JavaScript
let text = "JavaScript";
console.log(text.slice(0, 4)); // "Java"
console.log(text.slice(-6)); // "Script" (отрицательный индекс)
```

📌 Разница с substring() – поддерживает отрицательные индексы

### 9️⃣ `split()` – разбивает строку в массив
#### ✅ Пример:

```JavaScript
let text = "apple,banana,orange";
let fruits = text.split(",");
console.log(fruits); // ["apple", "banana", "orange"]
```
📌 Если передать `""` – разбьёт на символы:

```JavaScript
console.log("Hello".split("")); // ["H", "e", "l", "l", "o"]
```

### 🔟 `toLowerCase()` – делает строку в нижний регистр
#### ✅ Пример:

```JavaScript
let text = "Hello WORLD";
console.log(text.toLowerCase()); // "hello world"

```

### 1️⃣1️⃣ `toUpperCase()` – делает строку в верхний регистр
#### ✅ Пример:

```JavaScript
let text = "Hello world";
console.log(text.toUpperCase()); // "HELLO WORLD"
```
## 🎯 Вывод:

Метод | 	Что делает?
------|--------------
trim() | Удаляет пробелы в начале и конце
includes() | 	Проверяет, содержит ли строка подстроку
indexOf() | 	Возвращает индекс первого вхождения подстроки
lastIndexOf() | 	Возвращает индекс последнего вхождения
replace() | 	Заменяет только первое совпадение
replaceAll() | 	Заменяет все совпадения
substring() | 	Извлекает часть строки (без - индексов)
slice() | 	Извлекает часть строки (поддерживает - индексы)
split() | 	Разделяет строку в массив
toLowerCase() | 	Приводит к нижнему регистру
toUpperCase() | Приводит к верхнему регистру
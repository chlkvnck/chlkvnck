//// 1. Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4

const rle = (value) => value.replace(/(.)\1+/g, (m, c) => c + m.length);

console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));


//// 2.Получения двумерный массив анаграмм из произвольного массива слов

function getAnagrams(list) {
  let words = {};
  
  for (let i in list) {
    let srt = list[i].toLowerCase().split('').sort().join('');
    words[srt] ? words[srt].push(list[i]) : words[srt] = [list[i]];
  }

  let res = [];
  for (let i in words) {
    if (words[i].length > 1) res.push(words[i]);
  }
  
  return res;
}

const inputList = [
'кот', 'пила', 'барокко',
'стоп', 'ток', 'кошка',
'липа', 'коробка', 'пост',
];

console.log(getAnagrams(inputList));


//// 3. Получения массива уникальных значений

const uniq = (values) => [...new Set(values)];
// values.filter((x, i, a) => a.indexOf(x) === i)

console.log(uniq([2, 3, 1, 2, 1, 5, 6, 3, 1, 8, 5]));


//// 4. Найти пересечение двух массивов

const intersection = (left, right) => left.filter(i => right.includes(i));

const inter = (s1, s2) => { return new Set([...s1].filter(i => s2.has(i))) };

console.log(intersection([1, 2, 3, 4, 5], [2, 8, 3]));


//// 5. Изоморфные строки
function isIsomorphic(firstString, secondString) {

 if (firstString.length !== secondString.length) return false
 let letterMap = {};

 for (let i = 0; i < firstString.length; i++) {
   let letterA = firstString[i];
   let letterB = secondString[i];

   if (letterMap[letterA] === undefined) letterMap[letterA] = letterB;
   else if (letterMap[letterA] !== letterB) return false;
 }
 return true;
}

console.log('egg -> add:', isIsomorphic('egg', 'add')); // true
console.log('paper -> title:', isIsomorphic('paper', 'title')); // true

//// 6 Проверка на сбалансированность фигурных скобкок
function isBalanced(input) {
  let sum = 0;
  input.split('').forEach(elem => {
    elem === '{' ? sum++ : sum--;
  })
  return (sum ? true : false);
}

console.log('balanced:', isBalanced('{{}{}}{}')); // true
console.log('not balanced:', isBalanced('{}{{}')); // false

//// 7 Является ли строка палиндромом
function isPalindrome(value) {
  const reversed = value.toLowerCase().split('').reverse().join('').replaceAll(/\s/g,'');
  return value.toLowerCase().replaceAll(/\s/g,'') === reversed;
}

console.log(isPalindrome('abcd')); // false
console.log(isPalindrome('A man a plan a canal Panama')); // true

//// 8 Cортировка массива
function sort(arr) {
  if (arr.length < 2) return arr;
  let min = 1;
  let max = arr.length - 1;
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  let pivot = arr[rand];
  const left = [];
  const right = [];

  arr.splice(arr.indexOf(pivot), 1);
  arr = [pivot].concat(arr);

  for (let i = 1; i < arr.length; i++) {
    pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]);
  }
  
  return sort(left).concat(pivot, sort(right));
}

console.log(sort([7, 2, 99, 5, 1, 3, 4, -1])); // [-1, 1, 2, 3, 4, 5, 7, 99]

//// 10 Содержит ли массив дубликат

const containsDuplicate = (nums) => ([...new Set(nums)].length < nums.length) ? true : false;

const distinct = (a) => a.filter((value, index) => a.indexOf(value) === index);

//// 11 Вставить конец массива в его начало 

const rotate = (nums, k) => nums.unshift(...nums.splice(- (k % nums.length)));

//// 12 Найти единственную одинокую цифру в массиве XOR

const singleNumber = (nums) => nums.reduce((prev, curr) => prev ^ curr);

//// 13 Покупаем акции (на пиках и падениях)

const maxProfit = (prices) => {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    let prev = prices[i - 1];
    let current = prices[i];

    if (prev < current) profit += current - prev;
  }
  return profit;
};

//// 14 Самый короткий FizzBuzz

const fizzbuzz = (n) => { for (let i = 0; i < n; i++) console.log((++i % 3 ? '' : 'fizz' ) + (i % 5 ? '' : 'buzz') || i) }

//// 15 Каррирование (Умножить все элементы массива на число)

const multiplyAll = arr => num => arr.map(number => number * num);

//// 16 Сумма своих чисел

const digital_root = n => (n === 0) ? 0 : (n % 9 || 9);

//// 17 Передвинуть все нули в конец

const moveZeros = (arr) => {
  let copy = arr.filter(item => item !== 0)
  return copy.concat(new Array(arr.length - copy.length).fill(0))
}

//// 18 Валидность скобок

const validParentheses = parens => {
  let num = 0;
  const left = (parens.match(/\(/g) || []).length; //
  const right = (parens.match(/\)/g) || []).length; // 
  
  for (let i = 0; i < parens.length; i++) {
    parens[i] == '(' ? ++num : --num;
    if (num < 0 || left !== right) return false; //
  }
  
  return true; // num == 0 
}

//// 19 Максимальная длина подмассива

function maxSequence(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { 
    partialSum += item; 
    maxSum = Math.max(maxSum, partialSum); 
    if (partialSum < 0) partialSum = 0; 
  }

  return maxSum;
}

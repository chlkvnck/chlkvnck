// Массивы
// const names = ['Nick', 'Rick', 'Kick']
// for (let name of names) { console.log(name) }
// names.push('Slick')      // В конец
// names.unshift('Pick')    // В начало
// names.shift()            // 'Pick' и удаляет
// names.pop()              // 'Slick' и удаляет

/* Переворот строки */
// const text = 'Привет, как дела'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

/* Поиск в массиве с объектами */
// const people = 
//  [ {name: 'A', budget: 100}, {name: 'B', budget: 200} ]
// const person = people.find(person => person.budget === 100)
// console.log(person)

/* Map, filter, reduce - новый массив */
// const upperCaseNames = names.map(name => name.toUpperCase())
// const filteredNames.filter(name => name.length > 3)
// const allBudg = people.filter(person => person.budget > 100)
//                       .reduce((acc, person) => 
// { acc += person.budget; return acc; }, 0)


// Функции
/* Function Expression - объявлять ДО вызова функции*/
// let name = 'suck'; let num = 5;
// const greet = function(name) { console.log(`You ${name}!`) }
// greet(name); console.dir(greet); 

/* Анонимная функция */
// let counter = 0
// const interval = setInterval(function() 
// { console.log(++counter) }, 1000)

/* Стрелочная функция */
// const arrow = name => console.log(`You ${name}!`)
// const power = num => num**2 // return не нужен
// arrow(name)

// function sumAll(...all) {
//     let result = 0
//     for (let num of all) { result += num}
//     return result 
// }
// const res = sumAll(1,2,3,4,5); console.log(res);


// Замыкания (клево для приватных переменных)
// function createMember(name) { return function(lastName) {
//     console.log(name + lastName) } 
// }
// const logWithLastName = createMember('Nick ')
// console.log(logWithLastName('Chalkov'))


// Объекты
// const person = {
//     name: 'Nick',
//     age: '18',
//     'complex key': 'Conplex Value',
//     greet() { console.log('Yo!') },
//     info()  { console.info('Name: ', this.name)} 
// }
// console.log(person)
// delete person['complex key']
// const {name, age: personAge} = person
// console.log(name, personAge)

/* Обход элементов */
// for (let key in person) { 
//     if (person.hasOwnProperty(key)) { // Прототип
//         console.log(key)
//         console.log(person[key]) }
// }
//
// Object.keys.forEach(key => { console.log(person[key]) })

/* Контекст */
// person.info()
//
// const logger = { // Стрелочные функции не создают свой контекст
//     keys() { console.log('Obj. keys: ', Object.keys(this)) },
//     keysAndValues() { Object.keys(this).forEach(key => { 
//         console.log(`"${key}": ${this[key]}`)} /*.bind(this) 
//                                                */)},
//     withParams(top = false, between = false, bottom = false) {
//         if (top) { console.log ('START') }
//         Object.keys(this).forEach((key, index, array) => { 
//             console.log(`"${key}": ${this[key]}`)
//             if (between && index !== array.length - 1) 
//                 { console.log("———") } })
//         if (bottom) { console.log("END") } }
// }
// const bound = logger.keys.bind(logger /* person*/ )
// bound() // 'keys' или ключи person
//
// logger.keys.call(person)
// logger.keysAndValues.call(person /* {a: 1, c: 2} */)
// logger.withParams.call(person, true, true, true)
// logger.withParams.apply(person, [true, true, true])


// Асинхронность, Event Loop
// const timeout = setTimeout(() => 
//     { console.log('After Timeout!') }, 1000)
// const interval = setInterval(() => 
//     { console.log('After Interval!') }, 1000)
// clearTimeout(timeout)
// clearInterval(interval)

/* Промисы */
// const delay = (wait = 1000) => {
//     const promise = new Promise((resolve /* reject */) => {
//         setTimeout(() => { resolve() /* reject('wrong!') */ 
//         }, wait) })
//     return promise
// }
// delay(2000) 
//     .then(() => { console.log('After 2 secs') })
//     .catch(err => console.error('Error:', err))
//     .finally(() => console.log("Finally"))
//
// const getData = () => new Promise(resolve => resolve(
//     [ 1, 1, 2, 3, 5, 8, 13 ]))
// getData().then(data => console.log(data))
//
// async function asyncExample() {
//     try {
//         await delay(3000)
//         const data = await getData()
//         console.log('Data:', data) 
//     }
//     catch (e) { console.log(e) }
//     finally { console.log('Finally') }
// }
// asyncExample()

//// Прототипы
// const person = new Object({ name: 'Nick', age: 18 })
// Object.prototype.sayHello = () => { console.log('Hello!') }
// const man = Object.create(person); man.age = 17;
// const str = new String('I am string') // Смотреть в консоли


//// Контекст
// function hello() { console.log('Hello', this)}
// const person = {
//   name: 'Nick',
//   sayHello: hello,
//   sayHelloWindow: hello.bind(window /* this */),
//   logInfo: function(job, phone) { 
//     console.group(`${this.name} info: `)
//     console.log(`Name is ${this.name}`)
//     console.log(`Job is ${job}`)
//     console.log(`Phone is ${phone}`)
//     console.groupEnd() }
// }
// const smth = { name: 'Kto-to', age: 17 }

// person.logInfo.bind(smth, 'Svarshik', '8-999-123-12-23')()
// person.logInfo.call(smth,'Svarshik', '8-999-123-12-23')
// person.logInfo.apply(smth,['Svarshik', '8-999-123-12-23'])
// bind привязывает, call сразу вызывает, apply вызов и массив

// const array = [1, 2, 3, 4, 5]
// Array.prototype.multBy = function(n) { 
//   return this.map(function(i) { return i*n }) }
// console.log(array.multBy(2))
// console.log([5, 8, 12].multBy(5))


//// Замыкания
// function createInc(n) { return function(num) 
//                { return n + num} 
// }
// const addOne = createInc(1); console.log(addOne(10));


//// Промисы 
// console.log('Request data...')

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Preparing data...')
//     const backendData = { server: 'aws', port: 2000 }
//     resolve(backendData) }, 2000) 
// })

// p.then(data => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => { 
//       data.modified = true; resolve(data) }, 2000) }) 
//   })
//  .then(clientData => { 
//   clientData.fromPromise = true; return clientData })
//  .then(data => { console.log('Modified', data) })
//  .catch(err => console.error('Error:', err))
//  .finally(() => console.log('End!'))

 
// const sleep = ms => { return new Promise(resolve => {
//   setTimeout(() => resolve(), ms) }) 
// }
// sleep(2000).then(() => console.log('After 2 secs!'))

// Promise.all([sleep(2000), sleep(3000)]).then(() => { 
//   console.log('All promises!') })
// Promise.race([sleep(2000), sleep(3000)]).then(() => { 
//   console.log('Race promises!') })


//// Геттеры и сеттеры
// const person = Object.create(
//   { calculateAge() {
//       console.log('Age:', new Date().getFullYear() 
//                 = this.birthYear) }},
//   { name: { 
//     value: 'Nick', enumerable: true, 
//     writable: true, configurable: true },
//   birthYear: { 
//     value: 2001, enumerable: true, 
//     writable: false, configurable: false },
//   age: { 
//     get() { 
//       return new Date().getFullYear() 
//          = this.birthYear }, 
//     set(value) { 
//       document.body.style.background = 'red'
//       console.log('Set age', value) }}
// })

// person.name = 'Maxim'; person.birthYear = 2000;
// for (let key in person) { 
//   if (person.hasOwnProperty(key)) {
//     console.log('Key', key, person[key]) } }


//// Классы
// class Animal {
//   static type = 'ANIMAL'

//   constructor(options) {
//     this.name = options.name
//     this.age = options.age
//     this.hasTail = options.hasTail
//   }

//   voice() { console.log('ARGH!') }
// }

// const animal = new Animal({
//   name: 'Animal', age: 5, hasTail: true 
// })

// class Cat extends Animal{
//   static type = 'CAT'

//   constructor(options) { 
//     super(options) // Вызов родительского конструктора
//     this.color = options.color
//   }

//   voice() { 
//     super.voice() // 'I am animal'
//     console.log('I am cat!') // override
//   } 

//   get ageInfo() { return this.age * 7 }
//   set ageInfo(newAge) { this.age = newAge}
// }

// const cat = new Cat({
//   name: 'Cat', age: 7, hasTail: true, color: 'black'
// })

// /* Наследование */
// class Component {
//   constructor(selector) {
//     this.$el = document.querySelector(selector)
//   }

//   hide() { this.$el.style.display = 'none' }
//   show() { this.$el.style.display = 'block' }
// }

// class Box extends Component {
//   constructor(options) {
//     super(options.selector)
//     this.$el.style.width = this.$el.style.height = 
//                   options.size + 'px'
//     this.$el.style.background = options.color
//   }
// }    

// const box1 = new Box(
//   { selector: '#box1', size: 100, color: 'red' }
// ) 
// box1.hide(); box1.show();

// class Circle extends Box {
//   constructor(options) {
//     super(options)
//     this.$el.style.borderRadius = '50%'
//   }
// }

// const c = new Circle(
//   { selector: '#circle', size: 90, color: 'green' }
// )

//// Spread и Rest
// const cities = ['Spb', 'Msc', 'Ekb']
// console.log(...cities) // string
// const allCities = [...cities]
// console.log(allCities) // array
//
// const citiesPop     = { Msc: 20, Spb: 5, Ekb: 3 }
// const citiesMorePop = { Brl: 10, Prh: 3, Prs: 2 } 
// console.log({...citiesPop, ...citiesMorePop})
//
// const numbers = [5, 37, 42, 14]
// console.log(Math.max(...numbers))

// function sum(a, b, ...rest) { return a + b + 
//    rest.reduce((a, u) => { a + i }
// )}
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(sum(...numbers))
//
// const [a, b, ...other] = numbers
// console.log(a, b, other)
//
// const person = { name: 'Nick', age: 18, city: 'Spb' }
// const {name, age, ...PaymentAddress} = person
// console.log(name, age, address)

/* Деструктуризация */
// function logPerson({name, age}) { console.log(name + ' ' + age)}
// logPerson(person)

//// Async/await, fetch
// const delay = ms => { 
//   return new Promise(r => setTimeout(() => r(), ms)) 
// } 

// const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
// 	console.log('Fetch todo started...')
// 	return delay(2000).then(() => fetch(url))
// 										.then(response => response.json()) 
// }
// fetchTodos().then(data => console.log('Data:', data))
// 						 .catch(e => console.error(e))
/* Вместо того, что выше*/

// async function fetchAsyncTodos() {
// 	console.log('Fetch')
// 	try {
// 		await delay(2000)
// 		const response = await fetch(url)
// 		const data = response.json()
// 		console.log('Data:', data)
// 	} catch (e) { console.error(e) 
// 	} finally   { console.log('End!')}
// }

// fetchAsyncTodos()


//// Higher-order functions
// const people = [
//   { name: 'Nick', age: 18, budget: 10000 },
//   { name: 'Rick', age: 14, budget: 4000 }
// ]

// people.forEach(person /*(... , index, pArr) */ => 
//     console.log(person))
// const newPeople = people.map(person => `${person.name}!!!`)
// const adults = people.filter(person => person.age >= 18)
// const amount = people.reduce((total, person) =>
//     total += person.budget, 0)
// const rick = people.find(person => person.name === 'Rick')
// const rickIndex = people.findIndex(person => person.name === 'Rick')


//// Map, Set
// const obj = {
//   name: 'Nick',
//   age: 18,
//   job: 'None'
// }
// const entries = [ ['name', 'Nick'], ['age', 18], ['job', 'None'] ]
//
// // console.log(Object.entries(obj))
// // console.log(Object.fromEntries(entries))
//
// const map = new Map(entries)
// map
//   .set('newField', 42)
//   .set(obj, 'Value of object')
//
// console.log(map /* .get('job')*/ )
// map.delete('job')
// console.log(map.has('job')) // False
// console.log(map.size); map.clear();

// for(let entry /* [key, value] */ of map) { console.log(entry) }
// Цикл по map.keys или map.values
// map.forEach((val, key, m) => console.log(val, key))
//
// const array = Array.from(map)
// const mapObj = Object.fromEntries(map.entries())

// const users = [ { name: 'Nick' }, { name: 'Rick' } ]
// const visits = new Map()
//
// visits 
//   .set(users[0], new Date())
//   .set(users[1], new Date(new Date().getTime() + 1000 * 60))
//
// function lastVisit(user) { return visits.get(user)}
// console.log(lastVisit(users[1]))

// const set = new Set([1, 2, 3, 4, 4, 5, 5, 5, 6])
// set.add(10).add(20).add(20); console.log(set.has(30));
// // Цикл по set.values === set.keys; entries дублируется
// function uniqValues(array) { return Array.from(new Set(array)) } 


//// WeakMap, WeakSet; ключи - это только объекты
// let obj = { name: 'weakmap'}
// const arr = [obj]; obj = null; console.log(arr[0]);
//
// const map = new WeakMap([[obj, 'obj data']]) // get set delete has
// obj = null; console.log(map.has(obj)); // false

// const cache = new WeakMap()
// function cacheUser(user) {
//   if (!cache.has(user)) { cache.set(user, Date.now()) } 
//   return cache.get(user)
// }
// let nick = { name: 'Nick'}; let rick = { name: 'Rick' };
// rick = null
// console.log(cache.get(nick)); console.log(cache.has(rick)); // false

// WeakSet - только has, проверка на наличие объекта 


//// XHR (XML Http Request)
// const requestURL = 'https://jsonplaceholder.typicode.com/users'

// function sendRequest(method, url, body = null) {
//   return new Promise( (resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open(method, url)

//     xhr.responseType = 'json'
//     xhr.setRequestHeader('Content-Type', 'application/json')

//     xhr.onload  = () => { 
//       if (xhr.status >= 400) { console.error(xhr.response) }
//       else { console.log(xhr.response) } }
//     xhr.onerror = () => { console.log(xhr.response)}

//     xhr.send(JSON.stringify(body)) })
// } 

// sendRequest('GET', requestURL)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// const body = { name: 'Nick', age: 26 }
// sendRequest('POST', requestURL, body)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))


//// Fetch API
// const requestURL = 'https://jsonplaceholder.typicode.com/users'

// function sendRequest(method, url, body = null) {
//   const headers = { 'Content-Type': 'application/json'}
//   return fetch(url, {
//     method: method, body: JSON.stringify(body), headers: headers })
//       .then(response => { 
//         if (response.ok) { return response.json() } 
//         return response.json().then(error => {
//           const e = new Error('Smth Wrng!')
//           e.data = error; throw e;
//         })
//       })
// } 

// sendRequest('GET', requestURL)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// const body = { name: 'Nick', age: 26 }
// sendRequest('POST', requestURL, body)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

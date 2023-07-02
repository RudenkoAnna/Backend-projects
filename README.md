# Backend-projects

Розв'яжіть завдання на дослідження та прогнозування з використанням setTimer, setInterval, setImmediate, process.nextTick: у дужках ( ) розставте порядок виконання коду.

Додаткові вимоги:

    Використовуйте матеріал із заняття – малюнок EventLoop. (
      Promise.resolve().then(() => console.log('promise1 resolved'));

Promise.resolve().then(() => console.log('promise2 resolved'));
Promise.resolve().then(() => {
console.log('promise3 resolved');
process.nextTick(() => console.log('next tick inside promise resolve handler'));
});
Promise.resolve().then(() => console.log('promise4 resolved'));
Promise.resolve().then(() => console.log('promise5 resolved'));
setImmediate(() => console.log('set immediate1'));
setImmediate(() => console.log('set immediate2'));

process.nextTick(() => console.log('next tick1'));
process.nextTick(() => console.log('next tick2'));
process.nextTick(() => console.log('next tick3'));

setTimeout(() => console.log('set timeout'), 0);
setImmediate(() => console.log('set immediate3'));
setImmediate(() => console.log('set immediate4'));
)

Задача:

let interval = setInterval(() => { console.log('( )'); clearInterval(interval)});

setImmediate(() => console.log('( )'));

setTimeout(() => console.log('( )'));

process.nextTick(() => console.log('( )'));

console.log('( )');

let myPromise = () => new Promise((resolve) => setTimeout(() => { console.log('( )'); resolve()}));

let myPromise2 = () => new Promise((resolve) => { console.log('( )'); resolve()} );

myPromise().then(console.log('( )'));

myPromise2().then(console.log('( )'));

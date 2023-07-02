//first will be
Promise.resolve().then(() => console.log("promise1 resolved"));
//second will be
Promise.resolve().then(() => console.log("promise2 resolved"));
//third will be
Promise.resolve().then(() => {
  console.log("promise3 resolved");
  process.nextTick(() =>
    console.log("next tick inside promise resolve handler")
  );
});
//4th will be
Promise.resolve().then(() => console.log("promise4 resolved"));
//5th will be
Promise.resolve().then(() => console.log("promise5 resolved"));
//6th will be
setImmediate(() => console.log("set immediate1"));
//7th will be
setImmediate(() => console.log("set immediate2"));
//8th will be
process.nextTick(() => console.log("next tick1"));
//9th will be
process.nextTick(() => console.log("next tick2"));
//10th will be
process.nextTick(() => console.log("next tick3"));
//11th will be
setTimeout(() => console.log("set timeout"), 0);
//12th will be
setImmediate(() => console.log("set immediate3"));
//13th will be
setImmediate(() => console.log("set immediate4"));
//14th will be
let myPromise = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log("( )");
      resolve();
    })
  );

myPromise().then(console.log("( )"));
//15th will be
let myPromise2 = () =>
  new Promise((resolve) => {
    console.log("( )");
    resolve();
  });

myPromise2().then(console.log("( )"));

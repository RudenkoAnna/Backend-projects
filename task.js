console.log("(1)");

process.nextTick(() => console.log("(2)"));

setImmediate(() => console.log("(3)"));

let interval = setInterval(() => {
  console.log("(4)");
  clearInterval(interval);
});

let myPromise2 = () =>
  new Promise((resolve) => {
    console.log("(5)");
    resolve();
  });

setTimeout(() => console.log("(6)"));

let myPromise = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log("(7)");
      resolve();
    })
  );

myPromise().then(() => console.log("(8)"));

myPromise2().then(() => console.log("(9)"));

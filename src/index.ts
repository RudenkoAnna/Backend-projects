import { App } from "./app";
import { Cat } from "./cat";

function main() {
  const app = App.getInstance();
  app.run();

  const myCat = new Cat("Daniel");
  myCat.feed();
}

main();

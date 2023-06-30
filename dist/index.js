"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const cat_1 = require("./cat");
function main() {
    const app = app_1.App.getInstance();
    app.run();
    const myCat = new cat_1.Cat("Daniel");
    myCat.feed();
}
main();
//# sourceMappingURL=index.js.map
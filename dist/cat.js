"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const index_1 = require("./logger/index");
class Cat {
    constructor(name) {
        this.name = name;
        this.eated = false;
        this.alive = true;
        this.interval = setInterval(() => {
            if (this.eated == false) {
                this.alive = false;
                clearInterval(this.interval);
                index_1.logger.error(`${this.name} is not alive`);
            }
        }, 6000);
    }
    feed() {
        index_1.logger.log(`${this.name} is eating...`);
        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.eated = false;
            index_1.logger.warn(`${this.name} wants to eat`);
        }, 5000);
    }
}
exports.Cat = Cat;
//# sourceMappingURL=cat.js.map
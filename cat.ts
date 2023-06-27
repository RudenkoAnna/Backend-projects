import { logger } from './logger/index'

export class Cat {
    private eated = false;
    private alive = true;
    private timer: NodeJS.Timeout | undefined;
    private interval: NodeJS.Timeout | undefined;

    constructor(private name: string) {
        this.interval = setInterval(
            () => {
                if (this.eated == false) {
                    this.alive = false;
                    clearInterval(this.interval!);
                    logger.error(`${this.name} is not alive`);
                }
            },
            6000
        );
    }

    feed() {
        logger.log(`${this.name} is eating...`);
        this.timer && clearTimeout(this.timer!);
        this.timer = setTimeout(
            () => {
                this.eated = false;
                logger.warn(`${this.name} wants to eat`);
            },
            5000
        );
    }
} 
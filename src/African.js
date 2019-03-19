class African extends Parrot{
    constructor(numberOfCoconuts) {
        super();
        const LOAD_FACTOR = 9;
        this.numberOfCoconuts = numberOfCoconuts;
    }

    getSpeed() {
        return Math.max(0, this.BASE_SPEED - this.LOAD_FACTOR * this.numberOfCoconuts);
    }
}

module.exports = African;

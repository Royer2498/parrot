import Parrot from './Parrot.js'

class NorwegianBlue extends Parrot{
    constructor(voltage, isNailed) {
        super();
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    getSpeed() {
        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }

    getBaseSpeedWithVoltage(voltage) {
        return Math.min(24, voltage * this.BASE_SPEED);
    }
}

module.exports = NorwegianBlue;

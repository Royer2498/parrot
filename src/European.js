import Parrot from './Parrot';

class European extends Parrot{
    
    constructor() {
        super()
    }

    getSpeed() {
        return this.BASE_SPEED;
    }
}

module.exports = European;
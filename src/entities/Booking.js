export class Booking {
    constructor(initObj) {
        this.activity = initObj.activity;
        this.percentage = initObj.percentage;
        this.status = initObj.status;
        this.from = initObj.from;
        this.to = initObj.to;
    }
}
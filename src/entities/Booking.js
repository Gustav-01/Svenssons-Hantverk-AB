export class Booking {
    constructor(initObj) {
        this.activity = initObj.activity;
        this.percentage = initObj.percentage;
        this.status = initObj.status;
        this.from = new Date(initObj.from);
        this.to = new Date(initObj.to);
    }
}
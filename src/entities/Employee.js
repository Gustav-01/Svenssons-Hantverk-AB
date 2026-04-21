export class Employee {
    constructor(initObj) {
        this.name = initObj.name;
        this.professions = initObj.professions;
        this.bookings = initObj.bookings.map(booking => new Booking(booking));
    }
}
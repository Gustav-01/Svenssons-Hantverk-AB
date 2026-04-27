import { Booking } from "./Booking";
/**
 * Data model for an employee at Svenssons Hantverk. Maps an object fetched from the API to the model with the same properties. 
 */
export class Employee {
    constructor(initObj) {
        this.name = initObj.name;
        this.professions = initObj.professions;
        this.bookings = initObj.bookings.map(booking => new Booking(booking));
    }
}
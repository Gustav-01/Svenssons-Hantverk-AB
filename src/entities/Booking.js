/**
 * Data model for a booking of a job for an employee at Svenssons Hantverk. 
 * Maps a single booking of an employee to the model with the same properties.
 */

export class Booking {
    constructor(initObj) {
        this.activity = initObj.activity;
        this.percentage = initObj.percentage;
        this.status = initObj.status;
        this.from = new Date(initObj.from);
        this.to = new Date(initObj.to);
    }
}
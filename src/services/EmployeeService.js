import ApiService from "./ApiService.js"

class EmployeeService {

    constructor() {
        this.api = new ApiService();
        this._allEmployees = [];
    }

    async initEmployeeList() {
        const data = await this.api.getAllData();
        const sortedList = data.sort((a, b) => a.name.localeCompare(b.name));
        this._allEmployees = sortedList.map(e => new Employee(e));
    }

    async getAllEmployees() {
        if (this._allEmployees.length < 1) {
            await this.initEmployeeList();
        }
        return this._allEmployees;
    }

    async getEmployee(index) {
        if (this._allEmployees.length < 1) {
            await this.initEmployeeList();
        }
        return this._allEmployees[index];
    }

    async getProfession(index) {
        if (this._allEmployees.length < 1) {
            await this.initEmployeeList();
        }
        return this._allEmployees[index].professions;
    }

    async getEmployeesByProfession(profession) {
        if (this._allEmployees.length < 1) {
            await this.initEmployeeList();
        }
        return this._allEmployees.filter(e => e.professions.includes(profession));
    }

    async getBookingByDate(index, date) {
        if (this._allEmployees.length < 1) {
            await this.initEmployeeList();
        }
        
        const booking = this._allEmployees[index].bookings.find(b => b.from <= date && b.to >= date);

        if (!booking) {
            return { status: "Available", percentage: 0 };
        }

        return booking;
    }

    async getBookingStatus(index, date) {
        const booking = this.getBookingByDate(index, date);
        return booking.status;
    }

    async getBookingPercentage(index, date) {
        const booking = this.getBookingByDate(index, date);
        return booking.percentage;
    }

}

export default EmployeeService;
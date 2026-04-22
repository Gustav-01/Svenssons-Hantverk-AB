import ApiService from "./ApiService.js"

class EmployeeService {

    constructor() {
        this.api = new ApiService();
    }

    async getAllEmployees() {
        const data = await this.api.getAllData();
        const sortedList = data.sort((a, b) => a.name.localeCompare(b.name));
        return sortedList;
    }

    async getEmployee(index) {
        const employees = await this.getAllEmployees();
        return employees[index];
    }

    async getProfession(index) {
        const employee = await this.getEmployee(index);
        return employee.professions;
    }

    async getEmployeesByProfession(profession) {
        const employees = await this.getAllEmployees();
        return employees.filter(e => e.professions.includes(profession));
    }

    async getBookingByDate(index, date) {
        const employee = await this.getEmployee(index);

        const booking = employee.bookings.find(b => b.from <= date && b.to >= date);

        if (!booking) {
            return { status: "Available", percentage: 0 };
        }

        return booking;
    }

    async getBookingStatus(index, date) {
        const booking = await this.getBookingByDate(index, date);
        return booking.status;
    }

    async getBookingPercentage(index, date) {
        const booking = await this.getBookingByDate(index, date);
        return booking.percentage;
    }

}

export default EmployeeService;
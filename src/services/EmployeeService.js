import ApiService from "./ApiService.js"
import { Employee } from "@/entities/Employee.js";

class EmployeeService {

    constructor() {
        this.api = new ApiService();
        this._allEmployees = [];
    }

    async initEmployeeList() {
        try {
            const data = await this.api.getAllData();
            const sortedList = data.sort((a, b) => a.name.localeCompare(b.name));
            this._allEmployees = sortedList.map(e => new Employee(e));
        } catch (error) {
            console.error("Fetch failed: " + error.message);
            alert('Vi har problem med att hämta datan. Kontakta supporten.');
            return;
        }

    }

    async getAllEmployees() {
        if (this._allEmployees.length < 1) {
            await this.initEmployeeList();
        }
        return this._allEmployees;
    }

}

export default EmployeeService;
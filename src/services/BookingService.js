import ApiService from './ApiService.js';
import { Employee } from '@/entities/Employee.js';
import { Booking } from '@/entities/Booking.js';

export class BookingService {


    async getAllEmployees() {

        const apiService = new ApiService();

        const jsonData = await apiService.getAllData();        
        const allEmployees = jsonData.map(e => new Employee(e));
        
    }

    
}
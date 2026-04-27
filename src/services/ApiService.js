class ApiService {

    async getAllData() {
        
            const response = await fetch("https://yrgo-web-services.netlify.app/bookings");

            if (!response.ok) {
                throw new Error(`Problem fetching: ${response.status}`);
            }

            return await response.json();
    }
}

export default ApiService;
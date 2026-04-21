class ApiService {

    async getAllData() {
        try {
            const response = await fetch("https://yrgo-web-services.netlify.app/bookings");

            if (!response.ok) {
                throw new Error(`Problem fetching: ${response.status}`);
            }

            return await response.json();

        } catch (error) {
            console.error("Fetch failed: ", error);
        }
    }
}

export default ApiService;
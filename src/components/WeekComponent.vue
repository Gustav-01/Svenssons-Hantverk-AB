<script setup>
import { Employee } from '@/entities/Employee';
import { ref } from 'vue';
import { addDays, areIntervalsOverlapping, eachDayOfInterval, isWithinInterval } from "date-fns";


const props = defineProps({
    'employee': Employee,
    'firstDateOfWeek': Date,
});

const bookingStatusPerDay = ref([]);

const weekDates = eachDayOfInterval({
    start: props.firstDateOfWeek,
    end: addDays(props.firstDateOfWeek, 4),
});

for (let booking of props.employee.bookings) {
    if (areIntervalsOverlapping(
        { start: weekDates[0], end: weekDates[4] },
        { start: booking.from, end: booking.to },
    )) {
        updateBookingStatusPerDay(weekDates, booking);
    }
}

function updateBookingStatusPerDay(weekDates, booking) {
    let dayIndex = 0;
    for (let day of weekDates) {
        let status = 'available';

        if (isWithinInterval(day, { start: booking.from, end: booking.to })) {
            status = booking.status.toLowerCase();
            if (status === 'booked') {
                const percentage = booking.percentage;
                status = status + percentage;                
            }

        }
        bookingStatusPerDay.value.push(status);        
        dayIndex++;
    }
}
</script>

<template>
    <div class="week">
        <div v-for="status in bookingStatusPerDay" :class="status">HEEEJ</div>
    </div>
</template>

<style scoped>

.booked100 {
    background-color: pink;
}

.booked50 {
    background-color: var(--color-booked50);
}

.available {
    background-color: green;
}

.absent {
    background-color: var(--color-absent);
}

.preliminary {
    background: var(--color-preliminary)
}

</style>
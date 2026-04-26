<script setup>
import { Employee } from '@/entities/Employee';
import { ref, computed } from 'vue';
import { addDays, areIntervalsOverlapping, eachDayOfInterval, isWithinInterval } from "date-fns";

const props = defineProps({
    'employee': Employee,
    'firstDateOfWeek': Date,
});


const bookingStatusPerDay = computed(() => {
    let statuses = [];

    const weekDates = eachDayOfInterval({
        start: props.firstDateOfWeek,
        end: addDays(props.firstDateOfWeek, 4),
    });

    for (let i = 0; i < weekDates.length; i++) {
        statuses.push({ index: i, status: 'available' });
    }


    for (let booking of props.employee.bookings) {

        if (areIntervalsOverlapping(
            { start: weekDates[0], end: weekDates[4] },
            { start: booking.from, end: booking.to },
        )) {

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
                statuses.filter(s => s.index === dayIndex).map(b => b.status = status);
                dayIndex++;
            }

        }
    }

    return statuses;

});

function getBookingStatus(booking) {

}

// const weekDates = computed(() => {
//     return eachDayOfInterval({
//         start: props.firstDateOfWeek,
//         end: addDays(props.firstDateOfWeek, 4),
//     });
// })


// for (let i = 0; i < weekDates.value.length; i++) {
//     bookingStatusPerDay.value.push({ index: i, status: 'available' });
// }


// for (let booking of props.employee.bookings) {

//     if (areIntervalsOverlapping(
//         { start: weekDates.value[0], end: weekDates.value[4] },
//         { start: booking.from, end: booking.to },
//     )) {
//         getBookingStatus(booking);

//     }
// }

</script>

<template>
    <div class="week">
        <div v-for="bookingStatus in bookingStatusPerDay" :class="bookingStatus.status"></div>
    </div>
</template>

<style scoped>
.week {
    display: flex;
    box-sizing: border-box;
    margin: 0.1rem;
    flex: 1;

    div {
        margin: 0.05rem;
        flex: 1;
    }
}

.booked100 {
    background-color: var(--color-booked100);
}

.booked50 {
    background-color: var(--color-booked50);
}

.available {
    background-color: var(--color-available);
}

.absent {
    background-color: var(--color-absent);
}

.preliminary {
    background: var(--color-preliminary)
}
</style>
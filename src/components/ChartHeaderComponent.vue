<script setup>
import { computed } from 'vue'
import { addDays, eachDayOfInterval, format } from 'date-fns'
import { sv } from 'date-fns/locale'

const props = defineProps({
    'firstDateOfWeek': {
        type: Date,
        required: true,
    }
});

const dates = computed(() => {
    return eachDayOfInterval({
        start: props.firstDateOfWeek,
        end: addDays(props.firstDateOfWeek, 27)
    }).filter(d => d.getDay() !== 0 && d.getDay() !== 6)
});

function formatDate(date) {
    return format(date, 'd/M');
}

function formatDay(date) {
    return format(date, 'EEE', { locale: sv });
}

</script>

<template>
    <div class="container">
        <h2 class="staff">Personal</h2>
        <div v-for="date in dates" :key="date" class="date">
            <span class="day">{{ formatDay(date) }}</span>
            <span class="date">{{ formatDate(date) }}</span>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    margin-bottom: 5px;
}

.staff {
    font-size: 2em;
    width: 235px;
    font-weight: 600;
}

.date {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1em;
}
</style>
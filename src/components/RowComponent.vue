<script setup>
import { Employee } from '@/entities/Employee';
import NameColumnComponent from './NameColumnComponent.vue';
import WeekComponent from './WeekComponent.vue';
import { addDays } from 'date-fns';


defineProps({
    'employee': {
        type: Employee,
        required: true,
    },
    'firstDateOfWeek': {
        type: Date,
        required: true,
    }
})

</script>

<template>
    <div class="row">
        <NameColumnComponent :name="employee.name" :professions="employee.professions" />
        <WeekComponent :employee="employee" :firstDateOfWeek="firstDateOfWeek"></WeekComponent>
        <WeekComponent :employee="employee" :firstDateOfWeek="addDays(firstDateOfWeek, 7)"></WeekComponent>
        <WeekComponent :employee="employee" :firstDateOfWeek="addDays(firstDateOfWeek, 14)"></WeekComponent>
        <WeekComponent :employee="employee" :firstDateOfWeek="addDays(firstDateOfWeek, 21)"></WeekComponent>
    </div>
</template>

<style scoped>
.row {
    display: flex;
    width: 100%
}
</style>
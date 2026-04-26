<script setup>
import { Employee } from '@/entities/Employee';
import NameColumnComponent from './NameColumnComponent.vue';
import WeekComponent from './WeekComponent.vue';
import { addDays } from 'date-fns';
import { computed } from 'vue';

defineProps({
    employee: Employee,
    startDate: Date,
})

const test = computed(() => console.log(props.startDate)
)
console.log('in row component');


</script>

<template>
    <div class="row">
        <NameColumnComponent :name="employee.name" :professions="employee.professions" />
        <WeekComponent :employee="employee" :firstDateOfWeek="startDate"></WeekComponent>
        <WeekComponent :employee="employee" :firstDateOfWeek="addDays(startDate, 6)"></WeekComponent>
        <WeekComponent :employee="employee" :firstDateOfWeek="new Date('2026-05-17')"></WeekComponent>
        <WeekComponent :employee="employee" :firstDateOfWeek="new Date('2026-05-17')"></WeekComponent>
    </div>
</template>

<style scoped>
.row {
    display: flex;
    width: 100%
}
</style>
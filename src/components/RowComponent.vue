<script setup>
import { Employee } from '@/entities/Employee';
import NameColumnComponent from './NameColumnComponent.vue';
import WeekComponent from './WeekComponent.vue';

defineProps({
    employee: Employee
})
</script>

<template>
    <div class="row">
        <NameColumnComponent :name="employee.name" :professions="employee.professions" />
        <WeekComponent :employee="employee" :firstDateOfWeek="new Date('2026-05-17')"></WeekComponent>
        <WeekComponent :employee="employee" :firstDateOfWeek="new Date('2026-05-17')"></WeekComponent>
        <WeekComponent :employee="employee" :firstDateOfWeek="new Date('2026-05-17')"></WeekComponent>
        <WeekComponent :employee="employee" :firstDateOfWeek="new Date('2026-05-17')"></WeekComponent>
    </div>
</template>

<style scoped>
.row {
    display: flex;
}
</style>
<script setup>
import { Employee } from '@/entities/Employee';
import ProfessionComponent from './ProfessionComponent.vue';
import WeekSpanComponent from './WeekSpanComponent.vue';
import EmployeeService from '@/services/EmployeeService';

const employeeService = new EmployeeService();

const emit = defineEmits(['filterByProfession', 'dateChanged'])

</script>

<template>
    <div>
        <WeekSpanComponent @dateChanged="emit('dateChanged', $event)"/>
        <ProfessionComponent @filterByProfession="emit('filterByProfession', $event)"/>
    </div>
</template>

<style scoped>
    div {
        display: flex;
        gap: 20em;
        margin-top: 2em;
    }
</style>
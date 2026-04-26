<script setup>
import RowComponent from './RowComponent.vue';

const props = defineProps({
    employees: Array,
    firstDateOfWeek: Date
})

console.log(props.firstDateOfWeek);

</script>

<template>
        <div class="chart">
            <RowComponent 
                        v-for="(employee, index) in employees" 
                        :key="index" 
                        :employee="employee"
                        :firstDateOfWeek="firstDateOfWeek"/>
        </div>
    </template>

    <style scoped>
        .chart {
            padding-left: 2em;
            width: 90%;
        }
    </style>

<script setup>
import RowComponent from './RowComponent.vue';

defineProps({
    employees: Array
})

</script>

<template>
        <div class="chart">
            <RowComponent v-for="(employee, index) in employees" :key="index" :employee="employee"/>
        </div>
    </template>

    <style scoped>

        .chart {
            display: flex;
            padding-left: 2em;
        }
    </style>

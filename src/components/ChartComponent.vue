<script setup>
import RowComponent from './RowComponent.vue';

defineProps({
    employees: Array,
    firstDateOfWeek: Date
})

</script>

<template>
    <div class="chart">
        <RowComponent v-for="(employee, index) in employees" :key="index" :employee="employee"
            :firstDateOfWeek="firstDateOfWeek" />
    </div>
</template>

<style scoped>
.chart {
    margin-left: 2em;
    width: 80%;
    margin-top: 2em;
    border: 1px solid #ddd;
}
</style>

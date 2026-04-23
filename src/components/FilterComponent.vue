<script setup>
import ProfessionComponent from './ProfessionComponent.vue';
import WeekSpanComponent from './WeekSpanComponent.vue';


</script>

<template>
    <div>
        <WeekSpanComponent/>
        <ProfessionComponent/>
    </div>
</template>

<style scoped>
    div {
        display: flex;
        gap: 14em;
        margin-top: 2em;
    }
</style>
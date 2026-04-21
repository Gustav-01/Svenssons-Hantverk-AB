<script setup>
import { BookingService } from './services/BookingService';
import  StatusComponent from './components/StatusComponent.vue'

const bookingService = new BookingService();
bookingService.getAllEmployees();
</script>

<template>
    <StatusComponent></StatusComponent>
</template>

<style scoped>

</style>

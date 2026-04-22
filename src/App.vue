<script setup>
import { BookingService } from './services/BookingService';
import StatusComponent from './components/StatusComponent.vue'
import { onMounted, ref } from 'vue';

const employees = ref([]);
const bookingService = new BookingService();

onMounted(async function () {
  const data = await bookingService.getAllEmployees();
  console.log(data);
  employees.value = data;
});
</script>

<template>
  <StatusComponent></StatusComponent>
  <ul>
    <li v-for="employee in employees" :key="employee.name">Name: {{ employee.name }}</li>
  </ul>
</template>

<style scoped></style>

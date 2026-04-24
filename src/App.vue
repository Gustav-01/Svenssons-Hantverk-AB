<script setup>
import { onMounted, ref } from 'vue';
import NameColumnComponent from './components/NameColumnComponent.vue';
import StatusComponent from './components/StatusComponent.vue'
import EmployeeService from './services/EmployeeService';
import ChartComponent from './components/ChartComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FilterComponent from './components/FilterComponent.vue';
import { Employee } from './entities/Employee';
import WeekComponent from './components/WeekComponent.vue';

const employees = ref([]);
const employeeService = new EmployeeService();
const testEmp = ref(undefined);

async function getData() {
  const data = await employeeService.getAllEmployees();
  employees.value = data;
}

getData();

testEmp.value = new Employee({
  name: 'Bosse',
  professions: ['Carpenter'],
  bookings: [{
    activity: 'Carpenter',
    percentage: 50,
    status: 'Booked',
    from: '2026-05-18',
    to: '2026-05-20',
  }]
})

</script>

<template>
  <HeaderComponent />
  <FilterComponent />
  <ChartComponent :employees="employees" />
  <StatusComponent></StatusComponent>
  <!-- <ul>
    <li v-for="employee in employees" :key="employee.name">Name: {{ employee.name }}</li>
  </ul> -->
  <!-- <WeekComponent :employee="testEmp" :firstDateOfWeek="new Date('2026-05-17')"></WeekComponent> -->

</template>

<style scoped></style>

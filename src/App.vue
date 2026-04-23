<script setup>
import NameColumnComponent from './components/NameColumnComponent.vue';
import StatusComponent from './components/StatusComponent.vue'
import { onMounted, ref } from 'vue';
import EmployeeService from './services/EmployeeService';
import WeekComponent from './components/WeekComponent.vue';
import { Employee } from './entities/Employee';

const employees = ref([]);
const employeeService = new EmployeeService();
const testEmp = ref(undefined);

onMounted(async function () {
  const data = await employeeService.getAllEmployees();
  employees.value = data;
  
  // testEmp.value = employees.value[0];
  // console.log(testEmp.value.name);
});

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
    <StatusComponent></StatusComponent>
    <NameColumnComponent></NameColumnComponent>
  <ul>
    <li v-for="employee in employees" :key="employee.name">Name: {{ employee.name }}</li>
  </ul>

<WeekComponent :employee="testEmp" :firstDateOfWeek="new Date('2026-05-17')"></WeekComponent>
</template>

<style scoped></style>

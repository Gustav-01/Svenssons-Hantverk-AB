<script setup>
import NameColumnComponent from './components/NameColumnComponent.vue';
import StatusComponent from './components/StatusComponent.vue'
import { onMounted, ref } from 'vue';
import EmployeeService from './services/EmployeeService';
import ChartComponent from './components/ChartComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import WeekSpanComponent from './components/WeekSpanComponent.vue';

const employees = ref([]);
const employeeService = new EmployeeService();

onMounted(async function () {
  const data = await employeeService.getAllEmployees();
  console.log(data);
  employees.value = data;
});

</script>

<template>
  <HeaderComponent/>
  <WeekSpanComponent/>
    <ChartComponent
    :employees="employees"/>
    <StatusComponent></StatusComponent>
  <!-- <ul>
    <li v-for="employee in employees" :key="employee.name">Name: {{ employee.name }}</li>
  </ul> -->
</template>

<style scoped></style>

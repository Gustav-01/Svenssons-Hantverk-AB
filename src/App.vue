<script setup>
import { ref, computed } from 'vue';
import StatusComponent from './components/StatusComponent.vue'
import EmployeeService from './services/EmployeeService';
import ChartComponent from './components/ChartComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FilterComponent from './components/FilterComponent.vue';

const employees = ref([]);
const selectedProfession = ref('All');
const employeeService = new EmployeeService();

const selectedFirstDateOfWeek = ref();

const firstDateOfWeek = computed(() => {
  if (selectedFirstDateOfWeek.value) {
    return selectedFirstDateOfWeek.value;
  }
  else {
    return new Date('2026-04-13')
  }
});

async function loadData() {
  const data = await employeeService.getAllEmployees();
  if (!data) {
    alert('Vi har problem med att hämta datan. Kontakta supporten.');
  }

  employees.value = data;
}

const filteredEmployees = computed(() => {
  if (selectedProfession.value == 'All') {
    return employees.value;
  }
  return employees.value.filter(e => e.professions.includes(selectedProfession.value))
})

loadData();

</script>

<template>
  <HeaderComponent />
  <FilterComponent @filterByProfession="selectedProfession = $event" @dateChanged="selectedFirstDateOfWeek = $event" />
  <div class="container">
    <ChartComponent :employees="filteredEmployees" :firstDateOfWeek="firstDateOfWeek" />
    <StatusComponent></StatusComponent>
  </div>

</template>

<style scoped>
.container {
  display: flex;
}
</style>

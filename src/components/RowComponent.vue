<script setup>
import NameColumnComponent from './NameColumnComponent.vue';

defineProps({
    employee: Object
})
</script>

<template>
    <div class="row">
        <NameColumnComponent
            :name ="employee.name"
            :professions="employee.professions"/>
    </div>
</template>

<style scoped>

</style>
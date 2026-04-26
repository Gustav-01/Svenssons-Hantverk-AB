<script setup>

const emit = defineEmits(['dateChanged']);

</script>

<template>
    <div class="container">
        <label>Visa: </label>
        <select @change="emit('dateChanged', new Date($event.target.value))">
            <option value="2026-04-13" selected>13/4 - 8/5</option>
            <option value="2026-05-11">11/5 - 5/6</option>
        </select>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 2em;
}

select {
    padding: 4px 8px;
    border: 1px solid #000000;
    border-radius: 10px;
    font-family: Inter;
    font-size: 0.8em;
}
</style>
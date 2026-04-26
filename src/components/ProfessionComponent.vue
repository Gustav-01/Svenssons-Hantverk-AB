<script setup>
const emit = defineEmits(['filterByProfession'])

function filter(profession) {
    emit('filterByProfession', profession)
}

</script>

<template>
    <div class="professions">
        <span>Yrke:</span>
        <button @click="filter('All')" id="all">Alla</button>
        <button @click="filter('Carpenter')" id="carpenter">Snickare</button>
        <button @click="filter('Electrician')" id="electrician">Elektriker</button>
        <button @click="filter('Painter')" id="painter">Målare</button>
        <button @click="filter('Plumber')" id="plumber">Rörmockare</button>
        <button @click="filter('Mason')" id="mason">Murare</button>
    </div>
</template>

<style scoped>
.professions {
    display: flex;
    gap: 9px;
    align-items: center;
}

span {
    font-size: 1.2em;
}

button {
    padding: 6px 12px;
    font-size: 1.2em;
    border-radius: 12px;
    border: 1px solid grey;
    background-color: #fff;
    cursor: pointer;
}

button:hover {
    background-color: #D9D7D7;
}

button:focus {
    background-color: #D9D7D7;

}

#all {
    padding: 4px 12px 4px 12px;
}
</style>
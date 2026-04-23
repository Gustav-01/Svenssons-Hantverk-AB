<script setup>

</script>

<template>
    <div class="professions">
        <span>Yrke:</span>
        <button id="all">Alla</button>
        <button id="carpenter">Snickare</button>
        <button id="electrician">Elektriker</button>
        <button id="painter">Målare</button>
        <button id="plumber">Rörmockare</button>
        <button id="mason">Murare</button>
    </div>
</template>

<style scoped>
    .professions {
        display: flex;
        gap: 7px;
        align-items: center;
    }

    button {
        padding: 5px 10px;
        font-size: 1em;
        border-radius: 8px;
        border: 1px solid grey;
        background-color: #fff;
        cursor: pointer;
    }

    button:hover {
        background-color: #D9D7D7;
    }
    #all {
        padding: 4px 12px 4px 12px;
    }
</style>
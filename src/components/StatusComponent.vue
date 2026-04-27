<script setup>

</script>

<template>
    <div class="container">
        <div class="item">
            <div class="booked100"></div>
            <span>100% Bokad</span>
        </div>
        <div class="item">
            <div class="booked50"></div>
            <span>50% Bokad</span>
        </div>
        <div class="item">
            <div class="available"></div>
            <span>Tillgänglig</span>
        </div>
        <div class="item">
            <div class="preliminary"></div>
            <span>Preliminärt bokad</span>
        </div>
        <div class="item">
            <div class="absent"></div>
            <span>Frånvaro</span>
        </div>
    </div>
</template>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
    gap: 3em;
    padding: 26px 16px;
    border: 1px solid black;
    width: 200px;
    margin-top: 5em;
    height: 50%;
    margin-left: 2em;
    border-radius: 5px;
}

.item {
    display: flex;
    align-items: center;
    gap: 1em;
}

.item div {
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
}

.booked100 {
    background-color: var(--color-booked100);
}

.booked50 {
    background-color: var(--color-booked50);
}

.available {
    background-color: var(--color-available);
}

.absent {
    background-color: var(--color-absent);
}

.preliminary {
    background: var(--color-preliminary);
}

</style>
<script setup>

</script>

<template>
    <div class="container">
        <div class="item">
            <div class="red"></div>
            <span>100% Bokad</span>
        </div>
        <div class="item">
            <div class="orange"></div>
            <span>50% Bokad</span>
        </div>
        <div class="item">
            <div class="white"></div>
            <span>Tillgänglig</span>
        </div>
        <div class="item">
            <div class="shade"></div>
            <span>Preliminärt bokad</span>
        </div>
        <div class="item">
            <div class="blue"></div>
            <span>Frånvaro</span>
        </div>
    </div>
</template>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    border: 1px solid #ccc;
}

.item {
    display: flex;
    align-items: center;
    gap: 10px;
}

.item div {
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
}

.red {
    background-color: #F26D63;
}

.orange {
    background-color: #FFBA26;
}

.white {
    background-color: #ffffff;
}

.blue {
    background-color: #00A1AC;
}

.shade {
    background: repeating-linear-gradient(45deg,
            #ccc,
            #ccc 2px,
            #fff 2px,
            #fff 8px);
}
</style>
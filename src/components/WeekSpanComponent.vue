<scrip setup>

</scrip>

<template>
    <div class="container">
        <label>Visa: </label>
        <select>
            <option>2 veckor</option>
            <option selected>4 veckor (april-maj)</option>
            <option>6 veckor</option>
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
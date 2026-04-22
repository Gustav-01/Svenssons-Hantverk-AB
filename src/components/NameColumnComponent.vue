<script setup>
import painter from '../assets/painter.png'
</script>

<template>
    <div class="employee-container">
        <span>Aisha Abdi</span>
        <img :src="painter" alt="profession image">
    </div>
</template> 

<style scope>
    .employee-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ddd;
    padding: 4px 8px;

}

span {
    font-size: 13px;
}

img {
    width: 26px;
    height: 26px;
    object-fit: contain;
}

</style>
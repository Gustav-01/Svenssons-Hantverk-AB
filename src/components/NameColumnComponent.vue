<script setup>
import painter from '../assets/painter.png'
import carpenter from '../assets/carpenter.png'
import electrician from '../assets/electrician.png'
import plumber from '../assets/plumber.png'
import mason from '../assets/mason.png' 

const props = defineProps({
    name: String,
    professions: Array
})

const professionImages = {
    Painter: painter,
    Carpenter: carpenter,
    Electrician: electrician,
    Plumber: plumber,
    Mason: mason
}
</script>

<template>
    <div class="employee-container">
        <span>{{ name }}</span>
        <div class="icons">
            <img v-for="profession in professions" :key="profession" :src="professionImages[profession]"
                alt="profession image">
        </div>
    </div>
</template>

<style scoped> 

.employee-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px 4px;
    border: 1px solid #ddd;
    background-color: #fff;
    /* width: 160px; */
    /* width: 20%; */
    flex: 1;

    height: 32px;
}

span {
    font-size: 13px;
}

img {
    width: 20px;
    height: 20px;
    object-fit: contain;
}
</style>

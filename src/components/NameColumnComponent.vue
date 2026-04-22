<script setup>
import painter from '../assets/painter.png'
import carpenter from '../assets/carpenter.png'
import electrician from '../assets/electrician.png'
import plumber from '../assets/plumber.png'

const props = defineProps({
    name: String,
    professions: Array
})

const professionImages = {
    Painter: painter,
    Carpenter: carpenter,
    Electrician: electrician,
    Plumber: plumber
}
</script>

<template>
    <div class="employee-container">
        <span>{{ name }}</span>
        <div class="icons">
            <img 
                v-for="profession in professions" 
                :key="profession"
                :src="professionImages[profession]" 
                alt="profession image"
            >
        </div>
    </div>
</template>
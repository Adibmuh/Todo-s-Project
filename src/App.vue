<script setup>
import Navbar from "../src/Layouts/Navbar.vue";
</script>

<template>
    <Navbar />
    <main class="p-5">
        <router-view />
    </main>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>

<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav
        class="container mx-auto flex justify-between px-5 border-b border-gray-400 py-3"
    >
        <h1 class="text-2xl font-semibold">Todo's</h1>
        <div class="flex gap-10">
            <router-link
                to="/"
                class="hover:bg-orange-500 py-2.5 px-5 rounded-xl text-black"
                :class="{ 'bg-orange-500 font-semibold': $route.path === '/' }"
                >Home</router-link
            >
            <router-link
                to="/todo"
                class="hover:bg-orange-500 py-2.5 px-5 rounded-xl text-black"
                :class="{
                    'bg-orange-500 font-semibold': $route.path === '/todo',
                }"
                >Todo</router-link
            >
        </div>
    </nav>
</template>

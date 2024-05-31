<template>
    <form @submit.prevent="handleSubmit" class="mb-5 flex justify-center gap-5">
        <input
            v-model="title"
            type="text"
            class="border rounded p-2 mr-2"
            placeholder="Add a new task"
        />
        <button type="submit" class="bg-sky-400 text-white py-2 px-6 rounded font-semibold">
            Add
        </button>
    </form>
</template>

<script>
import { ref } from "vue";

export default {
    setup(props, { emit }) {
        const title = ref("");

        const handleSubmit = () => {
            if (title.value.trim()) {
                emit("add-todo", title.value);
                title.value = "";
            }
        };

        return { title, handleSubmit };
    },
};
</script>

<template>
    <div class="flex justify-between border-b border-gray-400 items-center pb-4">
        <span>{{ todo.title }}</span>
        <div class="space-x-5">
            <button
                @click="handleUpdate"
                class="bg-yellow-500 text-white py-2 px-5 rounded mr-2 font-semibold"
            >
                Edit
            </button>
            <button
                @click="handleDelete"
                class="bg-red-500 text-white py-2 px-5 rounded font-semibold"
            >
                Delete
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        todo: Object,
    },
    emits: ["update-todo", "delete-todo"],
    setup(props, { emit }) {
        const handleUpdate = () => {
            const newTitle = prompt("Update the task", props.todo.title);
            if (newTitle !== null && newTitle.trim()) {
                emit("update-todo", { id: props.todo.id, title: newTitle });
            }
        };

        const handleDelete = () => {
            emit("delete-todo", props.todo.id);
        };

        return { handleUpdate, handleDelete };
    },
};
</script>

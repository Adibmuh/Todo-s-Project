<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex flex-col justify-center items-center container mx-auto">
        <div class="mt-12 flex flex-col items-center justify-center">
            <table class="table-auto w-[1200px]">
                <thead class="border-b border-t bg-sky-400">
                    <tr>
                        <th class="w-[10%] px-4 py-4 text-white">No</th>
                        <th class="w-full px-4 py-4 text-white">Title</th>
                        <th class="w-1/4 px-4 py-4 text-white">Status</th>
                    </tr>
                </thead>
                <tbody class="border-b border-gray-400">
                    <tr
                        class="text-center"
                        v-for="(todo, index) in paginateTodos"
                        :key="todo.id"
                    >
                        <td class="px-4 py-4">
                            {{ index + 1 + (page - 1) * limit }}
                        </td>
                        <td class="px-4 py-4">{{ todo.title }}</td>
                        <td class="px-4 py-4">
                            <span
                                :class="{
                                    'bg-green-500 text-white': todo.completed,
                                    'bg-red-500 text-white': !todo.completed,
                                }"
                                class="py-2 px-3 rounded-lg"
                            >
                                {{ todo.completed ? "active" : "pending" }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div id="pagination" class="mt-5 flex justify-between gap-20">
                <div class="flex flex-col items-center justify-center mt-4">
                    <div class="flex gap-4">
                        <button
                            @click="onClickPreviousPage"
                            :disabled="firstPage"
                            class="bg-sky-400 text-white p-2 rounded"
                            :class="{ 'bg-gray-500 text-gray-200': firstPage }"
                        >
                            Previous
                        </button>
                        <template v-for="pageNum in pages" :key="pageNum">
                            <button
                                @click="onClickPage(pageNum)"
                                :class="{
                                    'bg-sky-400 text-white': pageNum === page,
                                }"
                                class="p-2 px-4 rounded border"
                            >
                                {{ pageNum }}
                            </button>
                        </template>
                        <button
                            @click="onClickNextPage"
                            :disabled="lastPage"
                            class="bg-sky-400 text-white p-2 rounded"
                            :class="{ 'bg-gray-500 text-gray-200': lastPage }"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TodoService from "@/service/TodoService";
import { computed, ref } from "vue";

const todoService = TodoService();
const todos = ref([]);
const page = ref(1);
const limit = ref(10);

const getAllTodos = async () => {
    try {
        const datas = await todoService.getAll();
        const datasFromStrage = localStorage.getItem("todos");
        todos.value = [...JSON.parse(datasFromStrage), ...datas];
        console.log("todos: ", todos.value);
    } catch (error) {
        console.log("Error fetching todos: ", error);
    }
};

const paginateTodos = computed(() => {
    const start = (page.value - 1) * limit.value;
    const end = start + limit.value;

    return todos.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(todos.value.length / limit.value));

const firstPage = computed(() => page.value === 1);

const lastPage = computed(() => page.value === totalPages.value);

const pages = computed(() => {
    const count = totalPages.value;
    const start = Math.max(1, page.value - 2);
    const end = Math.min(count, start + 4);
    const result = [];

    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
});

const onClickPage = (pageNum) => {
    page.value = pageNum;
};

const onClickPreviousPage = () => {
    if (!firstPage.value) {
        page.value--;
    }
};

const onClickNextPage = () => {
    if (!lastPage.value) {
        page.value++;
    }
};

getAllTodos();
</script>

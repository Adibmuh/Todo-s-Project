<template>
    <div class="container mx-auto py-5 px-20">
        <h1 class="text-2xl font-bold mb-4">Todo App</h1>
        <TodoCreate @add-todo="addTodo" />
        <TodoList
            :todos="todos"
            @update-todo="updateTodo"
            @delete-todo="deleteTodo"
        />
    </div>
</template>

<script>
import { ref, onMounted } from "vue"
import TodoCreate from "../components/TodoComponent/TodoCreate.vue"
import TodoList from "../components/TodoComponent/TodoList.vue"

export default {
    components: { TodoCreate, TodoList },
    setup() {
        const todos = ref(JSON.parse(localStorage.getItem("todos")) || [])

        const addTodo = (title) => {
            if (title.trim()) {
                const newTodo = { id: Date.now(), title }
                todos.value.push(newTodo)
                localStorage.setItem("todos", JSON.stringify(todos.value))
            }
        }

        const updateTodo = ({ id, title }) => {
            const todo = todos.value.find((todo) => todo.id === id)
            if (todo && title.trim()) {
                todo.title = title
                localStorage.setItem("todos", JSON.stringify(todos.value))
            }
        }

        const deleteTodo = (id) => {
            todos.value = todos.value.filter((todo) => todo.id !== id)
            localStorage.setItem("todos", JSON.stringify(todos.value))
        }

        const addTodoToList = (newTodo) => {
            todos.value.push(newTodo)
            localStorage.setItem("todos", JSON.stringify(todos.value))
        }

        onMounted(() => {
            todos.value = JSON.parse(localStorage.getItem("todos")) || []
        })

        return { todos, addTodoToList, updateTodo, deleteTodo, addTodo }
    },
}
</script>

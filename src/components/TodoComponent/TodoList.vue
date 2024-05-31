<template>
     <div class="py-5">
       <p v-if="todos.length === 0" class="text-gray-500">Data belum ada</p>
       <div class="space-y-5" v-else>
         <TodoItem
           v-for="todo in todos"
           :key="todo.id"
           :todo="todo"
           @update-todo="updateTodo"
           @delete-todo="deleteTodo"
         />
       </div>
     </div>
   </template>

   <script>
   import TodoItem from './TodoItem.vue';

   export default {
     components: { TodoItem },
     props: {
       todos: Array,
     },
     emits: ['update-todo', 'delete-todo'],
     setup(props, { emit }) {
       const updateTodo = (id) => {
         emit('update-todo', id);
       };

       const deleteTodo = (id) => {
         emit('delete-todo', id);
       };

       return { updateTodo, deleteTodo };
     },
   };
   </script>
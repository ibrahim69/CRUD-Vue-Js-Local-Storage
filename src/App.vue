<template>
    <div class="container">
        <div class="row">
            <app-todo-list></app-todo-list>
        </div>
    </div>
</template>

<script>
import List from './components/TodoList'
export default {
    components: {
        appTodoList: List
    }
}
</script>
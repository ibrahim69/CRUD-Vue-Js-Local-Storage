<template>
    <div class="col-sm-8 col-offset-sm-3 col-md-12">
        <h1>Isi Data Barang</h1>
        <br>
        <app-form @submit="addTodo"></app-form>

        <hr>

        <h2>List Barang</h2>

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Keterangan</th>
                    <th>Actions</th>
                </tr>
            </thead>

                <app-list-item
                    v-for="(todo, i) in sortedTodos" 
                    :key="i"
                    :todo="todo"
                    @delete="deleteTodo(i)"
                    @edit="saveTodos"
                />
            
        </table>
    </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import ls from '../api/localStorageService'

import Form from './Form'
import Table from './Table'

export default {
    name: 'TodoList',
    components: {
        appForm: Form,
        appListItem: Table
    },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState([
            'todos'
        ]),
        sortedTodos() {
            return this.todos
        }
    },
    mounted() {
        this.checkStorage()
    },
    methods: {
        ...mapActions([
            'addTodo',
            'deleteTodo',
            'completeTodo',
            'checkStorage',
            'saveTodos'
        ])
    }
}
</script>
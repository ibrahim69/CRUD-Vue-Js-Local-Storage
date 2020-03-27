<template>
    <tbody>
        <tr v-bind:id="todo.tableId" v-if="!editing">
            <td> 
                {{ todo.tableId }} 
                <!--
                    data.name 
                    data di ambil dari looping data
                    name diambil dari listTable
                -->
            </td>
            <td> {{ todo.tableNama }} </td>
            <td> {{ todo.tableHarga }} </td>
            <td> {{ todo.tableKet }} </td>
            <td>
                <button
                    type="button"
                    class="btn btn-danger" 
                    @click="deleteTodo">
                    Hapus
                </button>

                <button 
                    class="btn btn-success" 
                    @click="editTodo"
                    type="button">

                    Edit
                </button>
            </td>
        </tr>
        <tr v-bind:id="todo.tableId"
            v-else
            @close="editTodo"
            :populateWith="todo">
            <td> 
                <p> {{ todo.tableId }} </p>
            </td>
            <td> <input type="text" class="form-control" v-model="todo.tableNama"> </td>
            <td> <input type="number" class="form-control" v-model="todo.tableHarga"> </td>
            <td> <input type="text" class="form-control" v-model="todo.tableKet"> </td>
            <td>
                <button 
                    @click="closeTodo"
                    type="button" 
                    class="btn btn-danger">
                    Cancel
                </button>

                <button 
                    class="btn btn-success" 
                    @click="editTodo"
                    type="button">
                    Save
                </button>
            </td>
        </tr>
    </tbody>
</template>


<script>

import {mapState} from 'vuex'

import Form from '../components/Form'

export default {
    name: 'Table',
    props: {
        todo: {
            type: Object,
            required: true
        },
        populateWith: {
            type: Object,
            default: () => ({ empty: true })
        },
    },
    components: {
        appEditForm : Form
    },
    data() {
        return {
            editing: false
        }
    },
    mounted() {
    },
    methods: {
        deleteTodo() {
            // for use in TodoList
            this.$emit('delete')
        },
        editTodo() {
            // for use in TodoList
            this.$emit('edit')
            this.editing = !this.editing
        },
        closeTodo() {
            this.editing = !this.editing
        }
    },
}
</script>
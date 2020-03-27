<template>
    <form 
        @submit.prevent="submit">

        <div class="form-group">
            <label for="namaBarang"> Nama Barang</label>
            <input type="text" class="form-control" v-model="todo.tableNama">
        </div>

        <div class="form-group">
            <label for="hargaBarang"> Harga Barang</label>
            <input type="number" class="form-control" v-model="todo.tableHarga">
        </div>

        <div class="form-group">
            <label for="ketBarang"> Keterangan Barang</label>
            <input type="text" class="form-control" v-model="todo.tableKet">
        </div>

        <button 
            type="submit" 
            class="btn btn-primary">
            Tambah Data
        </button>
    </form>
</template>

<script>
import {mapMutations, mapState, mapActions} from 'vuex'
import ls from '../api/localStorageService'

export default {
    props: {
        lastTableId: 'lastTableNumber'
    },
    data() {
        return {
            todo : {
                tableId: null,
                tableNama: 'Ayam Bakar',
                tableHarga: 150000,
                tableKet: 'Tidak Ada'
            },
            // lastId: 1
        }
    },
    computed: {
        ...mapState([
            'todos',
            'dataFields'
        ]),
        lastId() {
            return this.todos.length
        },
    },
    mounted() {
    },
    methods: {
        ...mapMutations([
            'getLastId'
        ]),
        clearForm() {
            this.todo = {
                tableId: this.todo.tableId,
                tableNama: '',
                tableHarga: '',
                tableKet: ''
            }
            // console.log(this.todo.tableId + ' tableId clear form')
            // this.todo.tableId++
            // console.log(this.todo.tableId + ' tableId ++  clear form')
        },
        submit() {
            this.todo.tableId = this.lastId + 1
            console.log(this.todo.tableId + ' tableId submit')
            if(this.todo.tableNama !== '' && this.todo.tableHarga !== '' && this.todo.tableKet !== '') 
            {
                this.$emit('submit', this.todo)
                this.clearForm()
                this.close()
            } else {
                alert ('Silahkan isi Form terlebih dahulu')
            }
        },
        close() {
            this.$emit('close')
        }
    },
    created() {
        if(!this.populateWith.empty) {
            this.todo = this.populateWith
        }
    }
}
</script>
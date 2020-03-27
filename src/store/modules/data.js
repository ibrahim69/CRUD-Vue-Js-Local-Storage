import ls from '../../api/localStorageService'
import Vue from 'vue'

const state = {
    todos: [],
    dataFields: ['todos'],
    namespaced: true
}

const mutations = {

    setState (state, {field, data}) {
        Vue.set(state, field, data)
    },
    
    addTodo (state, newTodo) {
        state.todos.push(newTodo)
    },

    deleteTodo (state, todoIndex) {
        state.todos.splice(todoIndex, 1)
    }
}

const actions = {
    addTodo ({commit, dispatch}, newTodo) {
        commit('addTodo', newTodo)
        dispatch('saveTodos')
    },

    deleteTodo ({commit, dispatch}, todoInfo) {
        commit('deleteTodo', todoInfo)
        dispatch('saveTodos')
    },

    checkStorage ({state, commit}) {
        state.dataFields.forEach(async field => {
            try {
                let data = ls.checkStorage(field)
      
                // IndexedDB did not find the data, try localStorage
                // if (data === undefined) data = ls.checkStorage(field)
      
                // LocalStorage did not find the data, reset it
                if (data === null) data = []
                
                commit('setState', { field, data })
            } catch (e) {
                // The value in storage was invalid or corrupt so just set it to blank
                commit('setState', { field, data: [] })
            }
        });
    },

    async saveTodos ({state}) {
        try {
            // await Promise.all(state.dataFields.map(field => ls.saveToStorage(field, state[field])))
            state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
        } catch (e) {
            // state.dataFields.forEach(field => ls.saveToStorage(field, state[field]))
            alert('Data was Corrupted')
        }
    }
}

export default {
    state,
    // getters,
    mutations,
    actions,
}
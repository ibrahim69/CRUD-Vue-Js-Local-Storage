webpackJsonp([1],{NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("7+uW"),n=o("Dd8w"),s=o.n(n),r=o("NYxO"),d=o("mvHQ"),i=o.n(d),l=function(t){if(!window.localStorage.getItem(t))return null;try{return JSON.parse(window.localStorage.getItem(t))}catch(e){throw window.localStorage.removeItem(t),e}},c=function(t,e){return window.localStorage.setItem(t,i()(e))},u={props:{lastTableId:"lastTableNumber"},data:function(){return{todo:{tableId:null,tableNama:"Ayam Bakar",tableHarga:15e4,tableKet:"Tidak Ada"}}},computed:s()({},Object(r.d)(["todos","dataFields"]),{lastId:function(){return this.todos.length}}),mounted:function(){},methods:s()({},Object(r.c)(["getLastId"]),{clearForm:function(){this.todo={tableId:this.todo.tableId,tableNama:"",tableHarga:"",tableKet:""}},submit:function(){this.todo.tableId=this.lastId+1,console.log(this.todo.tableId+" tableId submit"),""!==this.todo.tableNama&&""!==this.todo.tableHarga&&""!==this.todo.tableKet?(this.$emit("submit",this.todo),this.clearForm(),this.close()):alert("Silahkan isi Form terlebih dahulu")},close:function(){this.$emit("close")}}),created:function(){this.populateWith.empty||(this.todo=this.populateWith)}},m={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"namaBarang"}},[t._v(" Nama Barang")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.tableNama,expression:"todo.tableNama"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.todo.tableNama},on:{input:function(e){e.target.composing||t.$set(t.todo,"tableNama",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"hargaBarang"}},[t._v(" Harga Barang")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.tableHarga,expression:"todo.tableHarga"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.todo.tableHarga},on:{input:function(e){e.target.composing||t.$set(t.todo,"tableHarga",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ketBarang"}},[t._v(" Keterangan Barang")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.tableKet,expression:"todo.tableKet"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.todo.tableKet},on:{input:function(e){e.target.composing||t.$set(t.todo,"tableKet",e.target.value)}}})]),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n        Tambah Data\n    ")])])},staticRenderFns:[]},p=o("VU/8")(u,m,!1,null,null,null).exports,v={name:"Table",props:{todo:{type:Object,required:!0},populateWith:{type:Object,default:function(){return{empty:!0}}}},components:{appEditForm:p},data:function(){return{editing:!1}},mounted:function(){},methods:{deleteTodo:function(){this.$emit("delete")},editTodo:function(){this.$emit("edit"),this.editing=!this.editing},closeTodo:function(){this.editing=!this.editing}}},b={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tbody",[t.editing?o("tr",{attrs:{id:t.todo.tableId,populateWith:t.todo},on:{close:t.editTodo}},[o("td",[o("p",[t._v(" "+t._s(t.todo.tableId)+" ")])]),t._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.tableNama,expression:"todo.tableNama"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.todo.tableNama},on:{input:function(e){e.target.composing||t.$set(t.todo,"tableNama",e.target.value)}}})]),t._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.tableHarga,expression:"todo.tableHarga"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.todo.tableHarga},on:{input:function(e){e.target.composing||t.$set(t.todo,"tableHarga",e.target.value)}}})]),t._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.tableKet,expression:"todo.tableKet"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.todo.tableKet},on:{input:function(e){e.target.composing||t.$set(t.todo,"tableKet",e.target.value)}}})]),t._v(" "),o("td",[o("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.closeTodo}},[t._v("\n                Cancel\n            ")]),t._v(" "),o("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.editTodo}},[t._v("\n                Save\n            ")])])]):o("tr",{attrs:{id:t.todo.tableId}},[o("td",[t._v(" \n            "+t._s(t.todo.tableId)+" \n            ")]),t._v(" "),o("td",[t._v(" "+t._s(t.todo.tableNama)+" ")]),t._v(" "),o("td",[t._v(" "+t._s(t.todo.tableHarga)+" ")]),t._v(" "),o("td",[t._v(" "+t._s(t.todo.tableKet)+" ")]),t._v(" "),o("td",[o("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteTodo}},[t._v("\n                Hapus\n            ")]),t._v(" "),o("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.editTodo}},[t._v("\n\n                Edit\n            ")])])])])},staticRenderFns:[]},f={name:"TodoList",components:{appForm:p,appListItem:o("VU/8")(v,b,!1,null,null,null).exports},data:function(){return{}},computed:s()({},Object(r.d)(["todos"]),{sortedTodos:function(){return this.todos}}),mounted:function(){this.checkStorage()},methods:s()({},Object(r.b)(["addTodo","deleteTodo","completeTodo","checkStorage","saveTodos"]))},h={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-sm-8 col-offset-sm-3 col-md-12"},[o("h1",[t._v("Isi Data Barang")]),t._v(" "),o("br"),t._v(" "),o("app-form",{on:{submit:t.addTodo}}),t._v(" "),o("hr"),t._v(" "),o("h2",[t._v("List Barang")]),t._v(" "),o("table",{staticClass:"table table-bordered"},[t._m(0),t._v(" "),t._l(t.sortedTodos,function(e,a){return o("app-list-item",{key:a,attrs:{todo:e},on:{delete:function(e){return t.deleteTodo(a)},edit:t.saveTodos}})})],2)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("ID")]),t._v(" "),o("th",[t._v("Nama")]),t._v(" "),o("th",[t._v("Harga")]),t._v(" "),o("th",[t._v("Keterangan")]),t._v(" "),o("th",[t._v("Actions")])])])}]},g={components:{appTodoList:o("VU/8")(f,h,!1,null,null,null).exports}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("app-todo-list")],1)])},staticRenderFns:[]},T=o("VU/8")(g,_,!1,null,null,null).exports,w=o("Xxa5"),y=o.n(w),N=o("exGp"),I=o.n(N);a.a.use(r.a);var C=new r.a.Store({state:{todos:[],dataFields:["todos"]},mutations:{setState:function(t,e){var o=e.field,n=e.data;a.a.set(t,o,n)},addTodo:function(t,e){t.todos.push(e)},deleteTodo:function(t,e){t.todos.splice(e,1)}},actions:{addTodo:function(t,e){var o=t.commit,a=t.dispatch;o("addTodo",e),a("saveTodos")},deleteTodo:function(t,e){var o=t.commit,a=t.dispatch;o("deleteTodo",e),a("saveTodos")},checkStorage:function(t){var e,o=this,a=t.state,n=t.commit;a.dataFields.forEach((e=I()(y.a.mark(function t(e){var a;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{null===(a=l(e))&&(a=[]),n("setState",{field:e,data:a})}catch(t){n("setState",{field:e,data:[]})}case 1:case"end":return t.stop()}},t,o)})),function(t){return e.apply(this,arguments)}))},saveTodos:function(t){var e=this,o=t.state;return I()(y.a.mark(function t(){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{o.dataFields.forEach(function(t){return c(t,o[t])})}catch(t){alert("Data was Corrupted")}case 1:case"end":return t.stop()}},t,e)}))()},syncTodos:function(t){t.state}}});a.a.config.productionTip=!1,new a.a({el:"#app",render:function(t){return t(T)},store:C})}},["NHnr"]);
//# sourceMappingURL=app.c65985619a47b15553b3.js.map
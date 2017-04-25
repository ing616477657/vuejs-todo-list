var STORE_KEY = 'todo-vue'
function fetch () {
  return JSON.parse(window.localStorage.getItem(STORE_KEY) || '[]')
}
function save (items){
  window.localStorage.setItem(STORE_KEY,JSON.stringify(items));
}
new Vue({
  el: '#hello',
  data:{
    msg: 'this is a todo list',
    newDo: '',
    items: fetch()
  },
  methods: {
    toggle: function (item) {
      item.isFin = !item.isFin
    },
    addDo: function () {
      this.items.push({
        label: this.newDo,
        isFin: false
      })
      this.newDo = ''
    }
  },
  watch:{
      items: {
      handler: function (items) { save(items) },
      deep: true
    }
  }
})
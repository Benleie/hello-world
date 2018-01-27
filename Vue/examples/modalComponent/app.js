// register modal component
Vue.component('modal', {
  template: '#modal-template'
})

// start app
var app = new Vue({
  el: '#app',
  data: {
    showModal: false
  }
})

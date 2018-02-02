// register the grid component
Vue.component('demo-grid', {
  template: '#grid-template',
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },
  data: function () {
    // console.log("filterKey" + filterKey);
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })

    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData: function () {
      // console.log(this.filterKey)
      var sortKey = this.sortKey
      console.log("sortKey: --" + sortKey)
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    },
    cl:function() {
      console.log("undated!");
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      console.log(key)
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
})


var demo = new Vue({
  el: '#demo',
  data: {
    searchQuery: '',
    gridColumns: ['name', 'power'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 }
    ]
  }
})

// bootstrap the demo
var demo2 = new Vue({
  el: '#demo2',
  data: {
    searchQuery: '',
    gridColumns: ['name', 'power', 'age', 'penis'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity,  age: 45, penis:10 },
      { name: 'Bruce Lee', power: 9000, age: 30, penis:13 },
      { name: 'Jackie Chan', power: 7000, age:37, penis:17},
      { name: 'Jet Li', power: 8000, age:51, penis:14 }
    ]
  }
})

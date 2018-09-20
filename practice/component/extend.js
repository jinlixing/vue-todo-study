import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
    <div>
      <input type="text" v-model="text">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handleChange () {

    }
  },
  mounted () {
    console.log('comp mounted')
  }
}

const parent = new Vue({
  name: 'parent'
})

const component2 = {
  extends: component,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    this.$parent.text = 1111
    console.log(this.$parent.$options.name)
  }
}

// const CompVue = Vue.extend(component)

// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: 'xxx'
//   },
//   data: {
//     text: '12221'
//   },
//   mounted () {
//     console.log('instance mounted')
//   }
// })

new Vue({
  parent: parent,
  name: 'Root',
  el: '#root',
  components: {
    Comp: component2
  },
  data: {
    text: 222222
  },
  template: `
    <div>
    <span>{{text}}</span>
    <comp></comp>
    </div>
  `,
  mounted () {
    console.log(this.$parent.$options.name)
    console.log('instance mounted')
  }
})

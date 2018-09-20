import Vue from 'vue'

const ChildComponent = {
  template: `
    <div>child component {{data.value}}</div>
  `,
  mounted () {
    // console.log(this.yeye)
  },
  inject: ['data']
}

const component = {
  name: 'comp',
  components: {
    ChildComponent
  },
  template: `
    <div :style="style">
    <slot value="456" aaa="1111"></slot>
    <child-component />
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #ccc'
      }
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  provide () {
    const data = {}

    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })

    return data
  },
  mounted () {
    console.log(this.$refs.comp, this.$refs.span)
  },
  template: `
    <div>
    <comp-one ref="comp">
      <span slot-scope="props" ref="span">{{props.value}} {{props.aaa}} {{value}}</span>
    </comp-one>
    <input type="text" v-model="value" />
    </div>
  `
})

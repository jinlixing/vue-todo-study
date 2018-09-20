import Vue from 'vue'

const component = {
  props: ['prop1'],
  // template: `
  //   <div :style="style">
  //   <slot></slot>
  //   </div>
  // `,
  render () {
    return this.$createElement('div', {
      style: this.style
      // on: {
      //   click: () => { this.$emit('click') }
      // }
    }, [
      this.$slots.header,
      this.prop1
    ])
  },
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
  el: '#root',
  components: {
    CompOne: component
  },
  data () {
    return {
      value: '123'
    }
  },
  methods: {
    handleClick () {
      console.log('click')
    },
    spanClick () {
      console.log('spanClick')
    }
  },
  // template: `
  //   <comp-one ref="comp">
  //     <span ref="span">{{value}}</span>
  //   </comp-one>
  //   `,
  render () {
    return this.$createElement('comp-one', {
      ref: 'comp',
      props: {
        prop1: this.value
      },
      // on: {
      //   click: this.handleClick
      // },
      nativeOn: {
        click: this.handleClick
      }
    }, [
      this.$createElement('span', {
        ref: 'span',
        slot: 'header',
        domProps: {
          innerHTML: '<span>456</span>'
        },
        attrs: {
          id: 'testId'
        }
      }, this.value)
    ])
  }
})

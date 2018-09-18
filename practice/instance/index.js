import Vue from 'vue'

const app = new Vue({
  template: '<div>this is content {{text}}</div>',
  data: {
    text: 0
  },
  watch: {
    text (newText, oldText) {
      console.log(`${newText} -- ${oldText}`)
    }
  }
})

app.$mount('#root')

// setInterval(() => {
//   app.text += 1
//   // app.$data.text += 1
// }, 1000)

// console.log(app.$data)
// console.log(app.$el)
// console.log(app.$props)
// console.log(app.$options)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// console.log(app.$root === app)
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)

// app.$watch('text', (newText, oldText) => {
//   console.log(`${newText} -- ${oldText}`)
// })

// app.$on('test', (a, b) => {
//   console.log(`test emited ${a} ${b}`)
// })
// app.$emit('test', 1, 2)

// app.$once('once', () => {
//   console.log('once')
// })
// setInterval(() => {
//   app.$emit('once')
// }, 1000)
// app.$set(app.obj, 'a', 1)
// app.$forceUpdate()

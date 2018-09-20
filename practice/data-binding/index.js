import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div :class="[{ active: isActive }, 'aaa']">
    {{isActive ? 'active' : 'not active'}}
    </div>
  `,
  data: {
    isActive: true
  }
})

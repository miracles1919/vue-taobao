<template>
  <div :style="wrapStyle || ''">
    <input type="checkbox" :checked="checked" @click="onClick"/>
  </div>
</template>

<script>

export default {
  name: 'Checkbox',
  props: ['wrapStyle'],
  data () {
    return {
      checked: false
    }
  },
  methods: {
    onClick () {
      this.checked = !this.checked
      this.$emit('onChange', this.checked)
    }
  },
  components: {
  }
}
</script>

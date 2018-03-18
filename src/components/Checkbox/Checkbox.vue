<template>
  <div :style="wrapStyle || ''">
    <input type="checkbox" :checked="isCheck || checked" @click="onClick"/>
  </div>
</template>

<script>

export default {
  name: 'Checkbox',
  props: ['wrapStyle', 'ckey', 'isCheck'],
  data () {
    return {
      checked: false
    }
  },
  methods: {
    onClick () {
      this.checked = !this.checked
      this.$emit('onChange', this.checked, this.ckey)
    }
  },
  components: {
  }
}
</script>

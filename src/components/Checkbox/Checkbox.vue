<template>
  <div :style="wrapStyle || ''">
    <input type="checkbox" :checked="isCheck" @click="onClick"/>
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
      this.$emit('onChange', !this.isCheck, this.ckey)
    }
  },
  components: {
  }
}
</script>

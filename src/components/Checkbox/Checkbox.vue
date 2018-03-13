<template>
  <div>
    <input type="checkbox" v-bind:checked="isCheck"/>
  </div>
</template>

<script>

export default {
  name: 'Checkbox',
  data () {
    return {
      isCheck: false
    }
  },
  components: {
  }
}
</script>

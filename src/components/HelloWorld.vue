<template>
  <div class="hello">
    <Header></Header>
  </div>
</template>

<script>
import Header from './Layout/Header'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello world'
    }
  },
  components: {
    Header
  }
}
</script>

<template>
  <footer>
    <p>Copyright &copy; {{ year }} </p>
  </footer>
</template>

<script>
import { computed } from 'vue'

export default {
  setup () {
    const year = computed(() => new Date().getFullYear()) // deconstruct the computed function from the vue library.
    return { year }
    //  provide access to the computed property you created for
    // the <template> to consume and render. Return an object with the year property and value in your setup() function:
  }
}
</script>

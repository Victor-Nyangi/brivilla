<template>
    <app-main />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppMain from '../components/AppMain.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    AppMain
  }
})
</script>

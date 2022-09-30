<template>
<div>
    <app-garden />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppGarden from '../components/Garden/AppMain.vue'

export default defineComponent({
  name: 'GardenView',
  components: {
    AppGarden
  }
})
</script>

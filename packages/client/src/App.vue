<template>
  <div class="">
    <RouterView />
  </div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'App',
  components: { RouterView },
  setup() {
    return {}
  },
}
</script>

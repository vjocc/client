<template>
  <main class="font-poppins">
    <div id="nav" class="text-indigo-600">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{ name: 'User', params: { name: appName } }">User</router-link> |
    </div>
    <router-view/>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

</script>
<script>
export default {
  data() {
    return {
      appName: 'FullStack'
    }
  },
}

</script>

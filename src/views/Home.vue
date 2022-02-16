<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <TextEditor />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TextEditor from '@/components/TextEditor.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    TextEditor
  }
}
</script>

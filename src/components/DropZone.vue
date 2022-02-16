<template lang="html">
  <div
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    :class="{ 'bg-indigo-600 text-white': active }"
  class="dropzone flex p-32 border-2 border-dashed border-indigo-600 flex-col justify-center text-center space-y-4"
  >
    <span>Drag or Drop File</span>
    <span>or</span>
    <label for="dropzoneFile" class="small-button cursor-pointer">Select File</label>
    <input class="hidden dropzoneFile" type="file" id="dropzoneFile" multiple="multiple" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "DropZone",
  setup() {
    const active = ref(false)
    const toggleActive = () => {
      active.value = !active.value
    }

    return { active, toggleActive }
  }
}

</script>

<style lang="css" scoped>
</style>

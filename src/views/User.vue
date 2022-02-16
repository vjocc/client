<template>
  <div>
    <h1>The user is {{ $route.params.name }}</h1>
  </div>
</template>

<script>

export default {
  props: ['name'],
}

</script>

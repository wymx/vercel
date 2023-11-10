<template>
  <div>
    <router-view v-slot="{ Component, route }" :key="$route.fullPath">
    </router-view>
  </div>
</template>
<script setup>

</script>
<style lang="scss">
</style>

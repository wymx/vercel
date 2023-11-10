<template>
  <router-view v-slot="{ Component }" :key="$route.fullPath">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
    <!--回到顶部-->
    <!-- <to-top></to-top> -->
  </router-view>
</template>

<script setup>
</script>

<style scoped>
</style>

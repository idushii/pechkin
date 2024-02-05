<script setup lang="ts">

</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
body {
  background-color: var(--background);
  color: var(--foreground);

  a {
    color: var(--link-foreground);
    text-decoration: none;
    
    &:active {
      color: var(--link-active-foreground);

    }
  }
}

</style>

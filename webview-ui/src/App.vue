<script setup lang="ts">

</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
body {
  background-color: var(--background);
  color: var(--foreground);
  margin-top: 1rem;

  a {
    color: var(--link-foreground);
    text-decoration: none;
    
    &:active, &.router-link-active {
      color: var(--link-active-foreground);
      font-weight: bold;
    }
  }
}

</style>

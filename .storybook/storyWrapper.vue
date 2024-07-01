<template>
  <v-app :theme="themeName">
    <slot name="story"></slot>
  </v-app>
</template>

<script>
export default {
  props: {
    themeName: String
  }
};
</script>

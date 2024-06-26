<template>
    <v-btn @click="onClick">{{ text }}</v-btn>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'MyComponent',
    props: {
      text: {
        type: String,
        required: true
      }
    },
    methods: {
      onClick() {
        this.$emit('click');
      }
    }
  });
  </script>
  
  <style lang="scss">
  .v-btn {
    background-color: #1976d2;
    color: #fff;
  }
  </style>
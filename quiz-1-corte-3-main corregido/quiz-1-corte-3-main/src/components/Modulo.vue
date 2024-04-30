<template>
        <ComponentRepetido/>
        <InputComponent id="ruta" label="Ruta: " />
  </template>
  
  <script lang="ts">
  import ComponentRepetido from '../components/ComponentRepetido.vue';
  import InputComponent from '../components/InputComponent.vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      ComponentRepetido, InputComponent
    }
  });
  </script>
    <style scoped>
    ion-card {
      margin-bottom: 10px;
    }
    </style>
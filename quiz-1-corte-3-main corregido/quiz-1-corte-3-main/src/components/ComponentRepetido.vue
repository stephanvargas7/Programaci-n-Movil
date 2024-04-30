<template>
    <InputComponent type="number" id="codigo" label="Codigo: " />
    <InputComponent id="nombre" label="Nombre: " />
    <InputComponent id="descripcion" label="Descripción: " />
    <InputComponent type="Boolean" id="estado" label="Estado: " />            
  </template>
  <script lang="ts">
    import { defineComponent } from 'vue';
    import InputComponent from '../components/InputComponent.vue';
  export default defineComponent({
    components: { InputComponent },
  });
  </script>
  
  <style scoped>
  ion-card {
    margin-bottom: 10px;
  }
  </style>
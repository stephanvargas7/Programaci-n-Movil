<template>
    <ion-button v-bind="$attrs" :id="id" :expand="expand" :color="color" :size="size" :fill="fill" :shape="shape" :disabled="disabled" :type="type" :href="href">{{ value }}</ion-button>
  </template>
  
  <script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    components: { IonButton },
    props: {
      id: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
  
    }
  });
  </script>
  
  <style scoped>
    /* Estilo global */
  </style>
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Almacén Y Taller Moto Norte</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="small">Login</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="login-container">
        <ImagenComponent id="miImagen" imageUrl="/public\Icon.jpg" altText="imagen"  />
        <div id="description">
          <p>Bienvenidos al Almacén Moto Norte.</p>
          <p>Regístrate para iniciar sesión.</p>
        </div>
      
       
          <div>
          <InputComponent id="user" name="Nombre" label="Nombre: " />
          <InputComponent type="email" id="email" name="correo" label="Correo: " />
          <InputComponent type="number" id="tel" name="Celular" label="Celular: " />
          <InputComponent type="date" id="date" name="Fecha_de_Nacimiento" />
          <br>
          <ButtonComponent id="save" value="Agregar" fill="outline" color="success"/>
          <ButtonComponent id="update" value="Modificar" fill="outline" color="dark"/>
          <ButtonComponent id="delete" value="Consultar" fill="outline" color="tertiary"/>
          <ButtonComponent id="delete" value="Borrar" fill="outline" color="danger"/>
        </div>
   </div>
    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
import ImagenComponent from '@/components/ImagenComponent.vue';
</script>

<style scoped>
#login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#cart-image {
  margin-bottom: 20px;
  width: 400px;
}

#description {
  margin-bottom: 20px;
  text-align: center;
}

#description p {
  margin: 0;
  padding: 10px; 
}

#login-form {
  max-width: 300px;
  width: 100%;
}
</style>
<template>
  <ion-app>
    <ion-alert :is-open="isDialogOpen" :message="promptMessage"> </ion-alert>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, IonAlert } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    IonAlert,
  },
  data() {
    return {
      isDialogOpen: false,
      promptMessage: "",
    };
  },
});
</script>

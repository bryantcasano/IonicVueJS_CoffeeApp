<template>
  <ion-page>
    <!--content start -->
    <ion-content>
      <iframe
        class="map"
        width="100%"
        height="100%"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13083.720463239684!2d138.58949763481033!3d-34.93328958388831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cf21e79a7f05%3A0x29dcc6dec5121a8b!2sCaf%C3%A9%20Troppo!5e0!3m2!1sen!2sph!4v1663640860528!5m2!1sen!2sph"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div class="map-info">
        <ion-row>
          <ion-col size="12">
            <span class="map-bold">Cafe Name</span>
          </ion-col>
          <ion-col size="12">
            <span class="map-txtlight"
              >123 King William Rd. Adelaide SA 5000</span
            >
          </ion-col>
        </ion-row>
        <router-link to="/orderstatus"
          ><ion-button expand="block" color="primary" class="map-btn"
            >Back to order details</ion-button
          ></router-link
        >
      </div>
    </ion-content>
    <!-- content end -->
  </ion-page>
</template>
<style scoped>
.map-info {
  padding: 5%;
}
.map-txtlight {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #828282;
}
.map-bold {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
}
.map {
  padding: 0%;
  height: 80%;
}
ion-button {
  --background: #ffffff;
  --background-hover: #dce8ff;
  --background-activated: #dce8ff;
  --background-focused: #dce8ff;
  --color: #1b1b1b;
  --border-radius: 4px;
  --border-color: #f3f3f3;
  --border-style: solid;
  --border-width: 1px;
  --ripple-color: #dce8ff;
  margin-top: 16px;
  height: 52px;
  text-transform: none;
  --box-shadow: none;
}
.map-btn {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
}
</style>
<script>
import { defineComponent } from "vue";
import { IonPage, IonContent, IonRow, IonCol, IonButton } from "@ionic/vue";

export default defineComponent({
  name: "MapPage",
  components: { IonPage, IonContent, IonRow, IonCol, IonButton },
});
</script>

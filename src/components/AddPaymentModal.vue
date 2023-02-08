<template>
  <div>
    <ion-button
      id="trigger-button"
      class="welcome-btn"
      ion-button
      expand="block"
      color="primary"
      fill="outline"
      >+ add payment</ion-button
    >
    <ion-modal
      :is-open="false"
      :breakpoints="[0.1, 0.45, 0.5, 1]"
      :initialBreakpoint="0.2"
      trigger="trigger-button"
    >
      <ion-content>
        <div align="center" class="si-modal">
          <ion-row router-link="/add-card" @click="cancel">
            <ion-col size="2" class="wallet-icon">
              <img src="assets/icon/card-outline.png" />
            </ion-col>
            <ion-col size="6">
              <span class="modal-label1">Add payment card</span>
              <span class="modal-label2">Link your payment card</span>
            </ion-col>
            <ion-col class="apm-icon position-right">
              <img src="assets/icon/arrow-right.png" />
            </ion-col>
          </ion-row>
          <ion-row router-link="/wallet-connect" @click="cancel">
            <ion-col size="2" class="wallet-icon">
              <img src="assets/icon/wallet-connect.png" />
            </ion-col>
            <ion-col size="6">
              <span class="modal-label1">Connect wallet</span>
              <span class="modal-label2">Connect wallet in your network</span>
            </ion-col>
            <ion-col class="apm-icon position-right">
              <img src="assets/icon/arrow-right.png" />
            </ion-col>
          </ion-row>
        </div>
      </ion-content>
    </ion-modal>
  </div>
</template>
<script>
import {
  IonModal,
  IonButton,
  IonContent,
  IonIcon,
  IonCol,
  IonRow,
  modalController,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddPaymentModal",
  components: { IonModal, IonButton, IonContent, IonIcon, IonCol, IonRow },
  methods: {
    cancel() {
      return modalController.dismiss(null, "cancel");
    },
  },
});
</script>
<style scoped>
.si-modal {
  margin-top: 30px;
}
.welcome-btn {
  font-weight: 600;
  font-size: 16px;
  font-family: "Gilroy";
  line-height: 19px;
  text-align: center;
  padding-left: 7%;
  padding-right: 7%;
  margin-top: 5%;
  margin-bottom: 5%;
  --border-radius: 4px;
  text-transform: none;
  letter-spacing: 1px;
  height: 45px;
}
.modal-label1 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
  display: block;
  padding-top: 5px;
}
.modal-label2 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #828282;
  display: block;
}
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}
.wallet-icon {
  margin-left: 15px;
}
.apm-icon {
  text-align: right;
  padding-top: 12px;
}
.position-right {
  position: absolute;
  right: 20px;
}
</style>

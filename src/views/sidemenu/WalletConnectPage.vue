<template>
  <div>
    <ion-page>
      <ion-content>
        <ion-row>
          <ion-col size="4">
            <a href="/payment-management"
              ><ion-icon class="back-icon" src="assets/icon/arrow-left.svg"
            /></a>
          </ion-col>
          <ion-col size="4" class="h1-menu">Wallet Connect</ion-col>
          <ion-col size="4">
            <ion-icon class="ver-icon" src="assets/icon/icon-button.svg" />
          </ion-col>
        </ion-row>
        <hr class="sep-div" />
        <ion-row class="sm-row">
          <ion-col size="2" class="wallet-icon">
            <img src="assets/icon/google-connect.png" />
          </ion-col>
          <ion-col size="6">
            <span class="pm-label1">Google wallet</span>
            <span class="pm-label2">Username</span>
          </ion-col>
          <ion-col class="wc-icon position-right">
            <span class="wc-label1">Link wallet</span>
            <img src="assets/icon/link.png" />
          </ion-col>
        </ion-row>

        <ion-row class="sm-row">
          <ion-col size="2" class="wallet-icon">
            <img src="assets/icon/apple.png" />
          </ion-col>
          <ion-col size="6">
            <span class="pm-label1">Apple pay</span>
            <span class="pm-label2">Username</span>
          </ion-col>
          <ion-col class="wc-icon position-right">
            <span class="wc-label1">Link wallet</span>
            <img src="assets/icon/link.png" />
          </ion-col>
        </ion-row>
      </ion-content>
    </ion-page>
  </div>
</template>
<style scoped>
.h1-menu {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #1b1b1b;
  margin-top: 42px;
  margin-bottom: 25px;
  text-align: center;
}
.back-icon {
  height: 20px;
  width: 20px;
  margin-top: 35%;
  margin-left: 10%;
}
.ver-icon {
  height: 35px;
  width: 35px;
  float: right;
  margin-top: 30%;
  margin-right: 10%;
  margin-bottom: 25px;
}
.wallet-icon {
  margin-left: 3%;
}
.wc-icon {
  text-align: right;
  padding-top: 15px;
}
.wc-icon img {
  vertical-align: middle;
}
.sm-row {
  border-bottom: 1px solid #f3f3f3;
  padding-top: 10px;
  padding-bottom: 10px;
}
.position-right {
  position: absolute;
  right: 20px;
}
.sep-div {
  border-bottom: 1px solid #f3f3f3;
}
.pm-label1 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
  display: block;
  padding-top: 5px;
}
.pm-label2 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #828282;
  display: block;
}
.wc-label1 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  color: #ff8000;
  margin-right: 5px;
  margin-top: 10px;
}
</style>
<script>
import { defineComponent } from "vue";
import { IonContent, IonIcon, IonPage, IonRow, IonCol } from "@ionic/vue";

export default defineComponent({
  name: "PaymentManagementPage",
  components: {
    IonContent,
    IonIcon,
    IonPage,
    IonRow,
    IonCol,
  },
});
</script>

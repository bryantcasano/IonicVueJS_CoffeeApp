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
          <ion-col size="4" class="h1-menu">Add card</ion-col>
          <ion-col size="4">
            <ion-icon class="ver-icon" src="assets/icon/icon-button.svg" />
          </ion-col>
        </ion-row>
        <hr class="sep-div" />
        <div class="ac-div">
          <ion-label class="label-ac">Card number</ion-label>
          <ion-input
            class="input-ac"
            placeholder="0000 0000 0000 0000"
            type="text"
          />
          <ion-label class="label-ac">Name </ion-label>
          <ion-input class="input-ac" placeholder="Name on card" type="text" />
          <ion-row>
            <ion-col size="6">
              <ion-label class="label-ac">Expired day</ion-label>
              <ion-input class="input-ac" placeholder="12/25" type="text" />
            </ion-col>
            <ion-col size="6">
              <ion-label class="label-ac">CSV</ion-label>
              <ion-input class="input-ac" placeholder="1234" type="text" />
            </ion-col>
          </ion-row>
          <a href="/payment-management"
            ><ion-button expand="block" color="primary" class="ac-btn"
              >Confirm</ion-button
            ></a
          >
        </div>
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
.sep-div {
  border-bottom: 1px solid #f3f3f3;
}
.ac-div {
  padding: 5%;
}
.label-ac {
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
}
.input-ac {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #828282;
  border-bottom: #ebebeb 2px solid;
  margin-bottom: 5%;
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
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 20px;
  height: 52px;
  text-transform: none;
}
ion-button:active {
  --color: #ff8000;
}
.ac-btn {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
}
</style>
<script>
import { defineComponent } from "vue";
import {
  IonContent,
  IonIcon,
  IonPage,
  IonRow,
  IonCol,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/vue";

export default defineComponent({
  name: "AddCardPage",
  components: {
    IonContent,
    IonIcon,
    IonPage,
    IonRow,
    IonCol,
    IonLabel,
    IonInput,
    IonButton,
  },
});
</script>

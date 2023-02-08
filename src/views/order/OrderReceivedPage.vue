<template>
  <ion-page>
    <!--content start -->
    <ion-content>
      <div class="order-status">
        <div align="center" class="qr-container">
          <img src="assets/images/received.png" />
          <h1 class="h1-tracking">Jane A.</h1>
          <h2 class="h2-tracking">A58E6</h2>
        </div>
        <div class="orderstatus-div">
          <ion-row class="row-orderlist">
            <ion-col size="12" class="received-h1">
              You received the order!
            </ion-col>
          </ion-row>
        </div>
        <div class="orderstatus-div ion-margin-top">
          <ion-row class="row-orderlist">
            <ion-col class="feedbacktxt1">Tell us your feedback</ion-col>
          </ion-row>
          <ion-row class="row-orderlist">
            <ion-col class="feedbacktxt2"
              >Let us know how you feel about the restaurant's food and
              service</ion-col
            >
          </ion-row>
          <ion-row class="row-feedback">
            <div class="rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">5 stars</label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">4 stars</label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">3 stars</label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">2 stars</label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">1 star</label>
            </div>
          </ion-row>
        </div>
        <router-link to="/rate">
          <ion-button expand="block" color="primary" class="orderstatus-btn"
            >Submit</ion-button
          >
        </router-link>
        <div align="center" class="ion-margin-top">
          <span class="support-link"
            ><router-link to="/home">Skip</router-link></span
          >
        </div>
      </div>
    </ion-content>
    <!-- content end -->
  </ion-page>
</template>
<style scoped>
.h1-tracking {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 120%;
  text-align: center;
  color: #1b1b1b;
}
.h2-tracking {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ff8000;
  margin-bottom: 10%;
}
.qr-container {
  margin-top: 15%;
}
.dblock {
  display: block;
}
.orderstatus-div {
  background: #ffffff;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 12px 18px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  padding-top: 5%;
  padding-bottom: 5%;
}
.row-orderlist {
  padding-left: 7%;
  padding-right: 7%;
}
.row-feedback {
  margin-left: auto;
  margin-right: auto;
}
.received-h1 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #1b1b1b;
  text-align: center;
}
.order-status {
  padding: 5%;
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
.orderstatus-btn {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
}
.support-link a {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  text-align: center;
  color: #ff8000;
  text-decoration: none;
}
.feedbacktxt1 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;
  text-align: center;
  color: #828282;
}
.feedbacktxt2 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: #1b1b1b;
}
.rate {
  height: 46px;
  padding: 0 10px;
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}
.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: #ccc;
}
.rate:not(:checked) > label:before {
  content: "★ ";
}
.rate > input:checked ~ label {
  color: #ffcc00;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #ffcc00;
}
</style>
<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
} from "@ionic/vue";

export default defineComponent({
  name: "OrderReceivedPage",
  components: { IonPage, IonContent, IonRow, IonCol, IonIcon, IonButton },
});
</script>

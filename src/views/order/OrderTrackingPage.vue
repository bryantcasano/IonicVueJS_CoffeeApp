<template>
  <ion-page>
    <!--content start -->
    <ion-content>
      <div class="order-status">
        <div align="center" class="qr-container">
          <img src="assets/placeholders/qr.png" />
          <h1 class="h1-tracking">Jane A.</h1>
          <h2 class="h2-tracking">A58E6</h2>
        </div>
        <div class="orderstatus-div">
          <ion-row class="row-orderlist">
            <ion-col size="12">
              <span class="orderstatus-h1"
                >Your order is ready for pickup!</span
              >
            </ion-col>
          </ion-row>
        </div>

        <div class="orderstatus-div ion-margin-top">
          <ion-row class="row-orderlist">
            <ion-col size="1">
              <span class="order-status-bold">1x</span>
            </ion-col>
            <ion-col>
              <span class="order-status-bold">Mocha</span>
              <span class="order-status-txtlight dblock"
                >Extra espresso shot</span
              >
            </ion-col>
            <ion-col>
              <span class="order-status-normal position-right">$ 5.50</span>
            </ion-col>
          </ion-row>

          <ion-row class="row-orderlist">
            <ion-col size="1">
              <span class="order-status-bold">2x</span>
            </ion-col>
            <ion-col>
              <span class="order-status-bold">Cappuccino</span>
              <span class="order-status-txtlight dblock"
                >Extra espresso shot</span
              >
              <span class="order-status-txtlight dblock">Soy</span>
            </ion-col>
            <ion-col>
              <span class="order-status-normal position-right">$ 9.00</span>
            </ion-col>
          </ion-row>

          <ion-row class="row-orderlist">
            <ion-col size="1">
              <span class="order-status-bold">1x</span>
            </ion-col>
            <ion-col>
              <span class="order-status-bold">Iced Latte</span>
              <span class="order-status-txtlight dblock">Add vanilla</span>
            </ion-col>
            <ion-col>
              <span class="order-status-normal position-right">$ 6.00</span>
            </ion-col>
          </ion-row>
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
.orderstatus-h1 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #1b1b1b;
}
.order-status {
  padding: 5%;
}
.order-status-txtlight {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #828282;
}
.order-status-bold {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
}
.order-status-normal {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
}
.position-right {
  position: absolute;
  right: 6px;
}
.orderstatus-maps {
  padding: 0%;
  border-radius: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
  height: 185px;
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
  name: "OrderTrackingPage",
  components: { IonPage, IonContent, IonRow, IonCol, IonIcon, IonButton },
});
</script>

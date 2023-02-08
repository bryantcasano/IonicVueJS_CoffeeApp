<template>
  <ion-page>
    <!--content start -->
    <ion-content>
      <div class="container-cart">
        <ion-row>
          <ion-col size="3">
            <router-link to="/order-history" replace
              ><ion-icon class="back-icon" src="assets/icon/arrow-left.svg"
            /></router-link>
          </ion-col>
          <ion-col size="7" class="h1-menu">
            <span class="h1-od">May 20 2022</span>
            <ion-icon
              src="assets/icon/dot-separate.svg"
              class="dotsep-icon"
              color="primary"
            />
            <span class="h1-od"> 14:30</span>
          </ion-col>
        </ion-row>
      </div>
      <ion-row class="od-row-list"
        ><ion-col
          ><span class="h1-grey">Order #123456</span>
          <span class="heading-category">Cafe name</span>
          <ion-icon src="assets/icon/tick-circle.svg" class="status-icon" />
          <span class="od-status"
            >Picked up
            <ion-icon
              src="assets/icon/dot-separate.svg"
              class="dotsep-icon"
              color="primary"
            /><span class="od-quantity">3 items</span>
          </span>
        </ion-col></ion-row
      >
      <ion-button
        expand="block"
        color="primary"
        fill="outline"
        class="reorder-btn"
        >Reorder</ion-button
      >
      <!--<ion-row class="od-row-list"
        ><ion-col
          ><span class="h1-grey">Order #123456</span>
          <span class="heading-category">Cafe name</span>
          <ion-icon src="assets/icon/close-circle.svg" class="status-icon" />
          <span class="od-status"
            >Cancelled
            <ion-icon
              src="assets/icon/dot-separate.svg"
              class="dotsep-icon"
              color="primary"
            /><span class="od-quantity">3 items</span>
          </span>
        </ion-col></ion-row
      >-->
      <hr class="sep-div" />
      <div class="orderlist-div">
        <ion-row class="row-orderlist">
          <ion-col size="12">
            <span class="h2-grey">Order detail</span>
          </ion-col>
          <ion-col size="1">
            <span class="product-cart-quantity">1x</span>
          </ion-col>
          <ion-col>
            <span class="product-cart-name">Mocha</span>
          </ion-col>
          <ion-col>
            <span class="product-cart-price">$ 5.50</span>
          </ion-col>
        </ion-row>

        <ion-row class="row-orderlist">
          <ion-col size="1">
            <span class="product-cart-quantity">2x</span>
          </ion-col>
          <ion-col>
            <span class="product-cart-name">Cappuccino</span>
            <span class="product-cart-addon">Extra espresso shot</span>
            <span class="product-cart-addon">Soy</span>
          </ion-col>
          <ion-col>
            <span class="product-cart-price">$ 9.00</span>
          </ion-col>
        </ion-row>

        <ion-row class="row-orderlist">
          <ion-col size="1">
            <span class="product-cart-quantity">1x</span>
          </ion-col>
          <ion-col>
            <span class="product-cart-name">Iced Latte</span>
            <span class="product-cart-addon">Add vanilla</span>
          </ion-col>
          <ion-col>
            <span class="product-cart-price">$ 6.00</span>
          </ion-col>
        </ion-row>
      </div>

      <div class="subtotal-div">
        <ion-row class="row-sub">
          <ion-col
            ><span class="od-label-left"> SubTotal (4 Items)</span></ion-col
          >
          <ion-col><span class="od-label-right">$ 20.50</span></ion-col>
        </ion-row>
        <ion-row class="row-sub">
          <ion-col>
            <span class="od-label-left">Service Fees:</span>
          </ion-col>
          <ion-col> <span class="od-label-right">$ 0.50</span></ion-col>
        </ion-row>
        <ion-row class="row-sub">
          <ion-col>
            <span class="od-bold-left">Total:</span>
          </ion-col>
          <ion-col> <span class="od-bold-right">$ 21.00</span></ion-col>
        </ion-row>
      </div>

      <!-- content end -->
    </ion-content>
    <router-link to="/support"
      ><ion-button expand="block" color="primary" class="carttext-btn"
        >Contact support</ion-button
      ></router-link
    >
  </ion-page>
</template>
<style scoped>
.container-cart {
  padding-top: 10%;
  padding-bottom: 5%;
  padding-left: 8%;
}
.back-icon {
  height: 20px;
  width: 20px;
}
.h1-od {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #1b1b1b;
}
.od-row-list {
  padding-left: 5%;
}
.heading-category {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 19px;
  color: #1b1b1b;
  margin-bottom: 15px;
  margin-top: 5px;
  display: block;
}
.h1-grey {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #828282;
  display: block;
}
.h2-grey {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #828282;
  display: block;
  padding-bottom: 5px;
}
.od-status {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;
  color: #00bf60;
}
.od-quantity {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;
  color: #828282;
}
.sep-div {
  border-bottom: 1px solid #f3f3f3;
  padding-top: 5px;
  padding-bottom: 5px;
}
.row-sub {
  padding-top: 0%;
  padding-left: 5%;
  padding-right: 0%;
}
.row-orderlist {
  padding-top: 0%;
  padding-left: 3%;
  padding-right: 0%;
}
.subtotal-div {
  border-top: 1px solid #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 5px;
}
.product-cart-name {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
  display: block;
  padding: 0%;
}
.product-cart-addon {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #828282;
  display: block;
  padding: 2%;
}
.product-cart-price {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
  position: absolute;
  right: 16px;
}
.od-label-right {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
  position: absolute;
  right: 16px;
}
.od-label-left {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
  display: block;
}
.od-bold-right {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
  position: absolute;
  right: 16px;
}
.od-bold-left {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
  display: block;
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
  margin-left: 15px;
  margin-right: 15px;
  height: 52px;
  text-transform: none;
}
ion-button:active {
  --color: #ff8000;
}
.carttext-btn {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
}
.reorder-btn {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 0px;
  padding: 0px 10px 0px 10px;
}
.status-icon {
  vertical-align: middle;
  padding-right: 5px;
}
.dotsep-icon {
  vertical-align: middle;
  width: 3px;
  height: 3px;
  padding-right: 10px;
  padding-left: 10px;
}
</style>
<script>
import { defineComponent } from "vue";
import {
  IonRow,
  IonCol,
  IonModal,
  IonButton,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonDatetimeButton,
  IonPage,
  IonContent,
  IonHeader,
  IonList,
  IonIcon,
} from "@ionic/vue";

export default defineComponent({
  name: "OrderDetailsPage",
  components: {
    IonRow,
    IonCol,
    IonModal,
    IonButton,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonDatetime,
    IonDatetimeButton,
    IonPage,
    IonContent,
    IonHeader,
    IonList,
    IonIcon,
  },
});
</script>

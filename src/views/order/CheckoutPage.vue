<template>
  <ion-page>
    <!--content start -->
    <ion-content>
      <div class="container-cart">
        <router-link to="/cart" replace>
          <ion-icon class="back-icon" src="assets/icon/arrow-left.svg" />
        </router-link>
        <span class="h1-cart">Checkout</span>
      </div>
      <ion-row class="heading-row-list"
        ><h1 class="heading-category">Your order</h1></ion-row
      >

      <div class="orderlist-div">
        <ion-row class="row-orderlist">
          <ion-col size="1">
            <span class="product-cart-quantity">1x</span>
          </ion-col>
          <ion-col>
            <span class="product-cart-name">Mocha</span>
            <span class="product-cart-addon">Extra espresso shot</span>
            <span class="product-cart-edit">Edit</span>
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
            <span class="product-cart-edit">Edit</span>
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
            <span class="product-cart-edit">Edit</span>
          </ion-col>
          <ion-col>
            <span class="product-cart-price">$ 6.00</span>
          </ion-col>
        </ion-row>
      </div>

      <div class="subtotal-div">
        <ion-row class="row-sub">
          <ion-col
            ><span class="product-sublabel">SubTotal (4 Items)</span></ion-col
          >
          <ion-col><span class="product-subtotal">$ 20.50</span></ion-col>
        </ion-row>
        <ion-row class="row-sub">
          <ion-col><span class="product-sublabel">Service Fee:</span> </ion-col>
          <ion-col> <span class="product-subtotal">$ 0.50</span></ion-col>
        </ion-row>
      </div>

      <ion-row class="payment-row">
        <ion-col size="6" class="payment-col">
          <ion-icon src="assets/icon/visa.svg" class="visa-icon"></ion-icon
          ><span class="payment-label">Visa</span>
        </ion-col>
        <ion-col size="6">
          <ion-item lines="none" class="select-fr">
            <span class="visa-label">xxx 3241</span>
            <ion-icon src="assets/icon/edit.svg" class="edit-icon"></ion-icon>
          </ion-item>
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col size="6" class="payment-col">
          <ion-icon
            src="assets/icon/ticket-discount.svg"
            class="banner-icon"
          ></ion-icon
          ><span class="payment-label">1 x FREE COFFEE</span>
        </ion-col>
        <ion-col size="6">
          <ion-item lines="none" class="select-fr">
            <span class="discount-label">- $ 4.00</span>
            <ion-icon src="assets/icon/edit.svg" class="edit-icon"></ion-icon>
          </ion-item>
        </ion-col>
      </ion-row>
      <!-- content end -->
    </ion-content>
    <ion-row class="row-total">
      <ion-col><span class="product-total-label">Total</span> </ion-col>
      <ion-col> <span class="product-cart-price2">$ 22.50</span></ion-col>
    </ion-row>
    <router-link to="/orderstatus"
      ><ion-button expand="block" color="primary" class="carttext-btn"
        >Order</ion-button
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
.center {
  margin: auto;
}
.back-icon {
  height: 20px;
  width: 20px;
}
.h1-cart {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: #1b1b1b;
  margin-left: 30%;
  top: 5px;
}
.heading-row-list {
  background-color: #f9f9f9;
  margin-top: 20px;
  padding-left: 5%;
  border-bottom: 1px solid #f3f3f3;
}
.heading-category {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: #1b1b1b;
  margin-top: 8%;
  margin-bottom: 15px;
}
.row-cart {
  padding: 10%;
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
.row-total {
  padding-top: 3%;
  padding-left: 2%;
  padding-right: 5%;
  margin-top: 3%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
}
.orderlist-div {
  padding-top: 10px;
  padding-bottom: 10px;
}
.subtotal-div {
  border-top: 1px solid #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
  padding-top: 10px;
  padding-bottom: 10px;
}
.product-cart-quantity {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
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
.product-total-label {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #828282;
  display: block;
  padding: 2%;
}
.product-cart-edit {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #ff8000;
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
.product-cart-price2 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #1b1b1b;
  position: absolute;
  right: -5px;
}
.product-subtotal {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
  position: absolute;
  right: 16px;
}
.product-sublabel {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
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
ion-select {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 120%;
  --placeholder-color: #ffc34d;
  --placeholder-opacity: 1;
}
ion-select::part(icon) {
  color: #ffffff;
  opacity: 0;
}
.select-fr {
  float: right;
}
ion-select-option {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #1b1b1b;
}
.checkout-row {
  border-bottom: 1px solid #f3f3f3;
  padding-top: 5%;
  padding-bottom: 5%;
}
.payment-row {
  border-bottom: 1px solid #f3f3f3;
}
.payment-col {
  padding-top: 5%;
  padding-left: 5%;
}
.banner-icon {
  vertical-align: middle;
  padding-right: 5px;
  width: 14px;
}
.visa-icon {
  vertical-align: middle;
  padding-right: 5px;
  width: 25px;
}
.edit-icon {
  vertical-align: middle;
  padding-left: 15px;
  width: 16px;
}
.payment-label {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 135%;
  letter-spacing: 0.02em;
  color: #1b1b1b;
  margin-left: 5px;
}
.visa-label {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 135%;
  letter-spacing: 0.02em;
  color: #828282;
}
.discount-label {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 135%;
  letter-spacing: 0.02em;
  color: #ffc34d;
}
.payment-option {
  display: block;
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
  name: "CheckoutPage",
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

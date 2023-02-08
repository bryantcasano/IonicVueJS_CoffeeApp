<template>
  <ion-page>
    <!--content start -->
    <ion-content>
      <div class="container-cart">
        <router-link to="/cafemenu" replace>
          <ion-icon class="back-icon" src="assets/icon/arrow-left.svg" />
        </router-link>
        <span class="h1-cart">My Cart</span>
      </div>
      <ion-row class="heading-row-list"
        ><h1 class="heading-category">Your order</h1></ion-row
      >
      <div class="orderlist-div" v-for="orders in cartOrders" :key="orders.id">
        <ion-row class="row-orderlist">
          <ion-col size="1">
            <span class="product-cart-quantity">{{ orders.quantity }} x</span>
          </ion-col>
          <ion-col>
            <span class="product-cart-name">{{ orders.productName }}</span>
            <div
              v-for="variations in JSON.parse(orders.variations)"
              :key="variations.id"
            >
              <span class="product-cart-addon">
                {{ variations.name }}
              </span>
            </div>
            <span class="product-cart-edit">Edit</span>
          </ion-col>
          <ion-col>
            <span class="product-cart-price">
              $ {{ orders.pricePerOrder.toFixed(2) }}
            </span>
          </ion-col>
        </ion-row>
        <!-- 
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
        -->
      </div>

      <ion-row class="heading-row-list"
        ><h1 class="heading-category">Pickup</h1></ion-row
      >
      <ion-row class="checkout-row">
        <ion-col>
          <ion-datetime-button datetime="datetime" class="pickup-txt">
          </ion-datetime-button>
          <ion-modal :keep-contents-mounted="true" class="pickup-txt">
            <ion-datetime
              id="datetime"
              :show-default-buttons="true"
              done-text="Set"
              cancel-text="Cancel"
              class="pickup-txt"
            >
            </ion-datetime>
          </ion-modal>
        </ion-col>
      </ion-row>

      <ion-row class="payment-row">
        <ion-col size="6" class="payment-col">
          <ion-icon src="assets/icon/card.svg" class="banner-icon"></ion-icon
          ><span class="payment-label">Payment method</span>
        </ion-col>
        <ion-col size="6">
          <ion-list>
            <ion-item lines="none" class="select-fr">
              <ion-select
                interface="action-sheet"
                placeholder="Choose"
                class="payment"
              >
                <ion-select-option value="1"
                  ><span class="payment-option">Google Wallet</span>
                  <span class="payment-sub">username</span></ion-select-option
                >
                <ion-select-option value="2"
                  ><span>Visa</span>
                  <span>xxxx xxxx xxxx 6533</span></ion-select-option
                >
                <ion-select-option value="3"
                  ><span>Mastercard</span>
                  <span>xxxx xxxx xxxx 2533</span></ion-select-option
                >
              </ion-select>
            </ion-item>
          </ion-list>
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col size="6" class="payment-col">
          <ion-icon src="assets/icon/ticket.svg" class="banner-icon"></ion-icon
          ><span class="payment-label">Rewards</span>
        </ion-col>
        <ion-col size="6">
          <ion-list>
            <ion-item lines="none" class="select-fr">
              <ion-select
                interface="action-sheet"
                placeholder="Redeem"
                class="payment"
              >
                <ion-select-option value="1">Free Cofee 1x</ion-select-option>
                <ion-select-option value="2">Free Cofee 1x</ion-select-option>
                <ion-select-option value="3">Free Cofee 1x</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-list>
        </ion-col>
      </ion-row>
      <!-- content end -->
    </ion-content>
    <ion-row class="row-sub">
      <ion-col>
        <span class="product-sublabel">
          SubTotal ({{ totalCartQty }} item/s)
        </span>
      </ion-col>
      <ion-col>
        <span class="product-subtotal">
          $ {{ subTotalCartPrice.toFixed(2) }}
        </span>
      </ion-col>
    </ion-row>
    <ion-row class="row-sub">
      <ion-col><span class="product-sublabel">Service Fee</span> </ion-col>
      <ion-col>
        <span class="product-subtotal"> $ {{ serviceFee.toFixed(2) }} </span>
      </ion-col>
    </ion-row>
    <ion-row class="row-total">
      <ion-col><span class="product-total-label">Total</span> </ion-col>
      <ion-col>
        <span class="product-cart-price2">
          $ {{ totalCartPrice.toFixed(2) }}
        </span>
      </ion-col>
    </ion-row>
    <router-link to="/checkout"
      ><ion-button expand="block" color="primary" class="carttext-btn"
        >Order</ion-button
      ></router-link
    >
  </ion-page>
</template>
<script>
import { defineComponent } from "vue";
import axios from "axios";
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

const BASE_URI =
  process.env.VUE_APP_BASE_URI !== undefined
    ? process.env.VUE_APP_BASE_URI
    : "";

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
  data() {
    return {
      cartOrders: [],
      totalCartQty: 0,
      subTotalCartPrice: 0,
      serviceFee: 0.5,
      totalCartPrice: 0,
    };
  },
  methods: {
    async getCartOrders(userId) {
      let axiosConfig = {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      };

      let url = userId
        ? BASE_URI + "/cart/get-cart-orders/?userId=" + userId
        : BASE_URI + "/cafe/get-coffee-shops";

      let result = await axios
        .get(url, axiosConfig)
        .then((res) => res.data)
        .catch((err) => {
          throw err.response.status;
        });

      this.cartOrders = result && result.data.length ? await result.data : [];

      for (let i = 0; i < this.cartOrders.length; i++) {
        this.totalCartQty += this.cartOrders[i].quantity;
        this.subTotalCartPrice += this.cartOrders[i].pricePerOrder;
      }

      this.totalCartPrice = this.subTotalCartPrice + this.serviceFee;
    },
  },
  async created() {
    const userId = localStorage.getItem("id") || null;
    await this.getCartOrders(userId);
  },
});
</script>
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
  --box-shadow: none;
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
ion-select-option {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #1b1b1b;
}
.select-fr {
  float: right;
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
.pickup-txt {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  color: #1b1b1b;
}
.payment-option {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
  display: block;
}
.banner-icon {
  vertical-align: middle;
  padding-right: 5px;
  width: 14px;
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
.payment-option {
  display: block;
}
</style>

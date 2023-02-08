<template>
  <div>
    <div
      class="drawer-background"
      :class="{ show: active }"
      @click="closeProductOrder"
    />
    <div class="drawer" :class="{ show: active }">
      <div class="container" @click="closeProductOrder">
        <img class="back-icon" src="assets/icon/arrowleft-circle.svg" />
      </div>
      <div class="product-img-container">
        <img class="product-img" :src="product.productImgUrl" />
      </div>
      <div v-if="product" class="product-details">
        <h1 class="product-name">{{ product.name }}</h1>

        <h2 class="product-addon" v-if="variations.size">
          {{ addons[1] }}
        </h2>
        <ion-radio-group :v-model="variationSize">
          <ion-row
            class="row-addon"
            v-for="variationSize in variations.size"
            :key="variationSize.id"
          >
            <ion-radio
              :value="variationSize.name"
              @click="populateSize(variationSize.name, variationSize.price)"
            ></ion-radio>
            <span class="product-addon-name">
              {{ variationSize.name }}
            </span>
            <span class="product-addon-price">
              +$ {{ parseFloat(variationSize.price).toFixed(2) }}
            </span>
          </ion-row>
        </ion-radio-group>

        <h2 class="product-addon" v-if="variations.milk">
          {{ addons[0] }}
        </h2>
        <ion-radio-group :v-model="variationMilk">
          <ion-row
            class="row-addon"
            v-for="variationMilk in variations.milk"
            :key="variationMilk.id"
          >
            <ion-radio
              :value="variationMilk.name"
              @click="populateMilk(variationMilk.name, variationMilk.price)"
            ></ion-radio>
            <span class="product-addon-name">
              {{ variationMilk.name }}
            </span>
            <span class="product-addon-price">
              +$ {{ parseFloat(variationMilk.price).toFixed(2) }}
            </span>
          </ion-row>
        </ion-radio-group>

        <h2 class="product-addon" v-if="variations.sugar">
          {{ addons[2] }}
        </h2>
        <ion-radio-group :v-model="variationSugar">
          <ion-row
            class="row-addon"
            v-for="variationSugar in variations.sugar"
            :key="variationSugar.id"
          >
            <ion-radio
              :value="variationSugar.name"
              @click="populateSugar(variationSugar.name, variationSugar.price)"
            ></ion-radio>
            <span class="product-addon-name">
              {{ variationSugar.name }}
            </span>
            <span class="product-addon-price">
              +$ {{ parseFloat(variationSugar.price).toFixed(2) }}
            </span>
          </ion-row>
        </ion-radio-group>

        <h2 class="product-addon" v-if="variations.strength">
          {{ addons[3] }}
        </h2>
        <ion-radio-group :v-model="variationStrength">
          <ion-row
            class="row-addon"
            v-for="variationStrength in variations.strength"
            :key="variationStrength.id"
          >
            <ion-radio
              :value="variationStrength.name"
              @click="
                populateStrength(
                  variationStrength.name,
                  variationStrength.price
                )
              "
            ></ion-radio>
            <span class="product-addon-name">
              {{ variationStrength.name }}
            </span>
            <span class="product-addon-price">
              +$ {{ parseFloat(variationStrength.price).toFixed(2) }}
            </span>
          </ion-row>
        </ion-radio-group>

        <h2 class="product-addon" v-if="variations.flavour">
          {{ addons[4] }}
        </h2>
        <ion-radio-group :v-model="variationFlavour">
          <ion-row
            class="row-addon"
            v-for="variationFlavour in variations.flavour"
            :key="variationFlavour.id"
          >
            <ion-radio
              :value="variationFlavour.name"
              @click="
                populateFlavour(variationFlavour.name, variationFlavour.price)
              "
            ></ion-radio>
            <span class="product-addon-name">
              {{ variationFlavour.name }}
            </span>
            <span class="product-addon-price">
              +$ {{ parseFloat(variationFlavour.price).toFixed(2) }}
            </span>
          </ion-row>
        </ion-radio-group>

        <hr class="hrdivider" />
        <h2 class="product-addon">Special instructions</h2>
        <ion-textarea
          class="product-txtarea"
          placeholder="Add a note to this item"
          :auto-grow="true"
          v-model="instructions"
        />

        <hr class="hrdivider" />
        <div class="product-quantity">
          <div class="quantity-toggle">
            <button @click="decrement()" class="button-minus">&minus;</button>
            <input type="text" :value="quantity" readonly />
            <button @click="increment()">&#xff0b;</button>
          </div>
        </div>
        <hr class="hrdivider" />

        <!--<h2 class="product-addon">Frequently bought together</h2>
        <ion-radio-group value="custom-checked">
          <ion-row class="row-addon">
            <ion-radio value="custom-checked"></ion-radio
            ><span class="product-addon-name">Banana Bread</span>
            <span class="product-addon-price">+$ 4.90</span>
          </ion-row>
          <ion-row class="row-addon">
            <ion-radio></ion-radio
            ><span class="product-addon-name">Pistachio and Coconut Bar</span>
            <span class="product-addon-price">+$ 5.50</span>
          </ion-row>
          <ion-row class="row-addon">
            <ion-radio></ion-radio
            ><span class="product-addon-name">Protein Balls (2)</span>
            <span class="product-addon-price">+$ 3.50</span>
          </ion-row>
          <ion-row class="row-addon">
            <ion-radio></ion-radio
            ><span class="product-addon-name">Poppy Seed Muffin</span>
            <span class="product-addon-price">+$ 4.90</span>
          </ion-row>
        </ion-radio-group>-->

        <ion-button
          expand="block"
          color="primary"
          :class="{ show: active }"
          @click="addToCart"
        >
          <span class="carttext-btn">Add to Order</span>
          <span class="cartprice-btn"> $ {{ totalCartPrice }} </span>
        </ion-button>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import axios from "axios";
import {
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonButton,
  IonTextarea,
} from "@ionic/vue";

const BASE_URI =
  process.env.VUE_APP_BASE_URI !== undefined
    ? process.env.VUE_APP_BASE_URI
    : "https://api.dev.onecoffee.qusol.com.au";

export default defineComponent({
  name: "cafeItemDetailsDrawer",
  data() {
    return {
      quantity: 1,
      instructions: "",
      variationSize: "",
      variationMilk: "",
      variationSugar: "",
      variationStrength: "",
      variationFlavour: "",
      subTotalCartPrice: [],
      addonVariations: [],
      totalCartPrice: 0,
      toCartUpdate: false,
      cartOrderId: null,
    };
  },
  components: {
    IonRadio,
    IonRadioGroup,
    IonRow,
    IonButton,
    IonTextarea,
  },
  props: {
    product: Object,
    variations: Object,
    addons: Object,
    productOriginalPrice: Number,
    productId: Number,
    cartOrders: Object,
    active: Boolean,
  },
  computed: {
    basePrice() {
      return this.productOriginalPrice
        ? parseInt(this.productOriginalPrice)
        : "-";
    },
    cafeProductId() {
      return this.productId;
    },
    cartList() {
      return this.cartOrders;
    },
  },
  methods: {
    async addToCart() {
      for (let i = 0; i < this.cartList.length; i++) {
        if (
          this.cartList[i].productId == this.cafeProductId &&
          this.cartList[i].variations == JSON.stringify(this.addonVariations)
        ) {
          this.quantity++;
          this.totalCartPrice = this.totalCartPrice * 2;
          this.toCartUpdate = true;
          this.cartOrderId = this.cartList[i].uuid;
        }
      }

      let paramsData = {};

      if (!this.toCartUpdate) {
        paramsData = {
          productId: this.cafeProductId,
          variations: this.addonVariations,
          quantity: this.quantity,
          pricePerOrder: this.totalCartPrice,
          instructions: this.instructions,
          userId: localStorage.getItem("id"),
        };

        let axiosConfig = {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        };

        await axios.post(
          BASE_URI + "/cart/create-cart-orders",
          paramsData,
          axiosConfig
        );
      } else {
        paramsData = {
          id: this.cartOrderId,
          variations: this.addonVariations,
          quantity: this.quantity,
          pricePerOrder: this.totalCartPrice,
          instructions: this.instructions,
          status: "pending",
        };

        let axiosConfig = {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        };

        await axios.put(
          BASE_URI + "/cart/update-cart-orders",
          paramsData,
          axiosConfig
        );

        this.toCartUpdate = false;
        this.cartOrderId = null;
      }

      this.closeProductOrder();
    },
    closeProductOrder() {
      this.addonVariations = [];
      this.quantity = 1;
      this.totalCartPrice = 0;
      this.instructions = "";
      this.variationSize = "";
      this.variationMilk = "";
      this.variationSugar = "";
      this.variationStrength = "";
      this.variationFlavour = "";

      // this.$emit("close-product-drawer");
      window.location.reload();
    },
    increment() {
      this.quantity++;
      this.$nextTick(async () => {
        this.totalCartPrice =
          (this.totalCartPrice * parseInt(this.quantity)) /
          parseInt(this.quantity - 1);
      });
    },
    decrement() {
      if (this.quantity === 1) {
        alert("Negative quantity not allowed");
      } else {
        this.quantity--;
        this.$nextTick(async () => {
          this.totalCartPrice =
            (this.totalCartPrice * parseInt(this.quantity)) /
            parseInt(this.quantity + 1);
        });
      }
    },
    populateSize(size, price) {
      this.variationSize = size;
      this.cartPrice(0, size, price);
    },
    populateMilk(milk, price) {
      this.variationMilk = milk;
      this.cartPrice(1, milk, price);
    },
    populateSugar(sugar, price) {
      this.variationSugar = sugar;
      this.cartPrice(2, sugar, price);
    },
    populateStrength(strength, price) {
      this.variationStrength = strength;
      this.cartPrice(3, strength, price);
    },
    populateFlavour(flavour, price) {
      this.variationFlavour = flavour;
      this.cartPrice(4, flavour, price);
    },
    cartPrice(i, name, price) {
      let sum = 0;

      this.subTotalCartPrice[i] = price;

      this.addonVariations[i] = { name: name, price: price };
      this.addonVariations = this.addonVariations.filter((el) => {
        return el !== null;
      });

      this.subTotalCartPrice.forEach((item) => {
        sum += item;
      });

      this.totalCartPrice = parseFloat(
        (this.basePrice + sum) * this.quantity
      ).toFixed(2);
    },
  },
  beforeMount() {
    this.$nextTick(async () => {
      this.totalCartPrice =
        this.totalCartPrice == 0
          ? this.basePrice
          : parseFloat(this.totalCartPrice).toFixed(2);
    });
  },
});
</script>
<style lang="scss" scoped>
.product-details {
  margin-bottom: 20px;
}
.container {
  position: relative;
}
.container img {
  display: block;
}
.container .back-icon {
  position: absolute;
  top: 30px;
  left: 20px;
}
.back-icon {
  height: 36px;
  width: 36px;
}
.product-img-container {
  width: 100%;
  overflow: hidden;
  height: 280px;
  object-fit: cover;
}
.product-img {
  width: 100%;
}
.row-addon {
  margin-bottom: 20px;
}
.hrdivider {
  border-bottom: 1px solid #f3f3f3;
}
.product-name {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  color: #1b1b1b;
  padding-left: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f3f3f3;
}
.product-addon {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #1b1b1b;
  padding-left: 20px;
  margin-bottom: 15px;
  margin-top: 20px;
}
.product-addon-name {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #666666;
}
.product-addon-price {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
  position: absolute;
  right: 16px;
}
.product-txtarea {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;
  color: #ababab;
  padding-left: 20px;
}
ion-radio {
  width: 20px;
  height: 20px;
  margin-left: 20px;
  margin-right: 15px;
}
ion-radio::part(container) {
  border-radius: 2px;
  border: 2px solid #ddd;
}
ion-radio::part(mark) {
  background: none;
  transition: none;
  transform: none;
  border-radius: 0;
}
ion-radio.radio-checked::part(container) {
  background: #ff8000;
  border-color: #ff5500;
  border-radius: 2px;
}
ion-radio.radio-checked::part(mark) {
  width: 6px;
  height: 10px;
  border-width: 0px 2px 2px 0px;
  border-style: solid;
  border-color: #fff;
  transform: rotate(45deg);
  margin-bottom: 3px;
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
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
  height: 52px;
  text-transform: none;
  --box-shadow: none;
}
ion-button:active {
  --color: #0057ff;
}
.carttext-btn {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
}
.cartprice-btn {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  position: absolute;
  right: 16px;
}
.drawer-background {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba (124, 124, 124, 0.55);
  z-index: 100;
  display: none;
  transition: display 0.5s;
  &.show {
    display: block;
  }
}
.drawer {
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: 105vw;
  padding: 0px;
  transition: left 0.5s;
  z-index: 101;
  overflow-y: scroll;
  &.show {
    left: 0;
  }
}
.product-quantity {
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 30%;
}
.quantity-toggle {
  display: flex;
  input {
    width: 2.5rem;
    text-align: center;
    padding: 0 0.5rem;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    color: #1b1b1b;
    border: none;
  }
  button {
    padding: 0.5rem;
    background: #f9f9f9;
    color: #1b1b1b;
    font-size: 1.5rem;
    border-radius: 50%;
    border: 1px solid #f3f3f3;
  }
  .button-minus {
    padding: 0.5rem;
    background: #f9f9f9;
    color: #1b1b1b;
    font-size: 1.5rem;
    border-radius: 70%;
    border: 1px solid #f3f3f3;
    padding-right: 12px;
    padding-left: 12px;
  }
}
@media (min-width: 500px) {
  .drawer {
    width: 450px;
  }
}
</style>

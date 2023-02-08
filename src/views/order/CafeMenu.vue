<template>
  <ion-page>
    <cafeItemHeader :cafeInfo="cafeInfo" />
    <!--content start -->
    <ion-content>
      <cafeItemDetailsDrawer
        :product="product"
        :variations="variations"
        :addons="addons"
        :productOriginalPrice="productOriginalPrice"
        :productId="productId"
        :cartOrders="cartOrders"
        :active="active.product_drawer"
        v-on:close-product-drawer="closeProductDrawer()"
      />
      <ion-row class="heading-row"
        ><h1 class="heading-category">Most Popular</h1></ion-row
      >
      <div v-if="Object.keys(cafeProducts).length !== 0">
        <cafeItemCard
          v-for="product in cafeProducts"
          :key="product.id"
          :product="product"
          v-on:view-product="viewProduct($event)"
        />
      </div>
      <div style="padding: 1em; font-family: 'Gilroy'; font-size: 14px" v-else>
        No product/s available for this cafe.
      </div>

      <ion-row class="heading-row-list">
        <h1 class="heading-category">Coffee</h1>
      </ion-row>
      <div v-if="Object.keys(cafeProducts).length !== 0">
        <cafeItemListCard
          v-for="product in cafeProducts"
          :key="product.id"
          :product="product"
          v-on:view-product="viewProduct($event)"
        />
      </div>
      <div style="padding: 1em; font-family: 'Gilroy'; font-size: 14px" v-else>
        No product/s available for this cafe.
      </div>

      <!-- <ion-row class="heading-row-list"
        ><h1 class="heading-category">Tea</h1></ion-row
      >
      <cafeItemListCard
        v-for="product in cafeitem"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
      />

      <ion-row class="heading-row-list"
        ><h1 class="heading-category">Extras</h1></ion-row
      >
      <cafeItemListCard
        v-for="product in cafeitem"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
      /> -->

      <router-link to="/cart">
        <ion-button expand="block" color="primary">
          <span class="cartquantity-btn">{{ totalCartQty }}</span>
          <span class="carttext-btn">View Cart</span>
          <span class="cartprice-btn">
            $ {{ subTotalCartPrice.toFixed(2) }}
          </span>
        </ion-button>
      </router-link>
    </ion-content>
    <!-- content end -->
  </ion-page>
</template>
<style scoped>
.heading-row {
  background-color: #f9f9f9;
  margin-top: 20px;
  padding-left: 15px;
}
.heading-row-list {
  background-color: #f9f9f9;
  margin-top: 20px;
  padding-left: 15px;
  border-bottom: 1px solid #f3f3f3;
  width: 100%;
}
.heading-category {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: #1b1b1b;
  margin-bottom: 15px;
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
.cartquantity-btn {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  position: absolute;
  left: 16px;
  background-color: #ff5500;
  padding: 10px;
  border-radius: 4px;
}
</style>
<script>
import { defineComponent } from "vue";
import { IonPage, IonContent, IonRow, IonCol, IonButton } from "@ionic/vue";
import axios from "axios";
import cafeitem from "@/data/cafeitem.js";
import cafeItemCard from "@/components/product/cafeItemCard.vue";
import cafeItemListCard from "@/components/product/cafeItemListCard.vue";
import cafeItemDetailsDrawer from "@/components/product/cafeItemDetailsDrawer.vue";
import cafeItemHeader from "@/components/product/cafeItemHeader.vue";

const BASE_URI =
  process.env.VUE_APP_BASE_URI !== undefined
    ? process.env.VUE_APP_BASE_URI
    : "https://api.dev.onecoffee.qusol.com.au";

export default defineComponent({
  name: "CafeMenu",
  components: {
    IonPage,
    IonContent,
    cafeItemCard,
    cafeItemDetailsDrawer,
    cafeItemHeader,
    cafeItemListCard,
    IonRow,
    IonCol,
    IonButton,
  },
  data() {
    return {
      cafeitem: cafeitem,
      productVariations: {},
      cafeProducts: {},
      cafeInfo: {},
      product: {},
      variations: {},
      addons: {},
      productOriginalPrice: null,
      productId: null,
      cartOrders: [],
      totalCartQty: 0,
      subTotalCartPrice: 0,
      active: {
        product_drawer: false,
      },
    };
  },
  methods: {
    viewProduct(product) {
      this.product = product.cafeProducts;
      this.variations = product.variations;
      this.addons = product.addons.name;
      this.productOriginalPrice = product.cafeProducts.originalPrice;
      this.productId = product.cafeProducts.id;

      this.active.product_drawer = true;
    },
    closeProductDrawer() {
      this.active.product_drawer = false;
    },
    async getProductVariations() {
      let axiosConfig = {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      };

      let result = await axios.get(
        BASE_URI + "/product/get-product-variations",
        axiosConfig
      );

      this.productVariations =
        result && result.data.data.length !== null
          ? await Object.assign({}, result.data.data)
          : [];
    },
    async getCafeProductsByCafeId(cafeId) {
      let axiosConfig = {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      };

      let result = await axios.get(
        BASE_URI + "/product/get-cafe-products/" + cafeId,
        axiosConfig
      );

      for (let i = 0; i < result.data.data.length; i++) {
        this.cafeProducts[i] = {
          cafeProducts: result.data.data[i],
          variations: this.productVariations,
          addons: {
            name: ["Milk", "Size", "Sugar", "Strength", "Flavour"],
          },
        };
      }
    },
    async getCoffeeShopsById(cafeId) {
      let axiosConfig = {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      };

      let result = await axios.get(
        BASE_URI + "/cafe/get-coffee-shops/" + cafeId,
        axiosConfig
      );

      this.cafeInfo =
        result && result.data.data.length ? await result.data.data[0] : {};
    },
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
    },
  },
  async created() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const cafeId = urlParams.get("id") || "";
    const userId = localStorage.getItem("id") || null;

    await this.getProductVariations();
    await this.getCafeProductsByCafeId(cafeId);
    await this.getCoffeeShopsById(cafeId);
    await this.getCartOrders(userId);
  },
});
</script>

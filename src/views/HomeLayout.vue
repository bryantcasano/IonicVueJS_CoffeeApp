<template>
  <ion-page>
    <TheHeaderMenu name="TheHeaderMenu" />
    <ion-content>
      <PopularCarousel name="PopularCarousel" :coffeeShops="coffeeShops" />
      <PromoCarousel name="PromoCarousel" />
      <PreviousCarousel name="PreviousCarousel" :coffeeShops="coffeeShops" />
      <hr class="solid" />
      <FavoritesCarousel name="FavoritesCarousel" :coffeeShops="coffeeShops" />
      <hr class="solid" />
      <DiscoverList name="DiscoverList" :coffeeShops="coffeeShops" />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonHeader,
  IonItem,
  IonButtons,
  IonMenuButton,
  IonList,
  IonIcon,
  IonToolbar,
  IonMenu,
} from "@ionic/vue";
import axios from "axios";

import TheHeaderMenu from "@/components/TheHeaderMenu.vue";
import PopularCarousel from "@/components/PopularCarousel.vue";
import PromoCarousel from "@/components/PromoCarousel.vue";
import PreviousCarousel from "@/components/PreviousCarousel.vue";
import FavoritesCarousel from "@/components/FavoritesCarousel.vue";
import DiscoverList from "@/components/DiscoverList.vue";

const BASE_URI =
  process.env.VUE_APP_BASE_URI !== undefined
    ? process.env.VUE_APP_BASE_URI
    : "https://api.dev.onecoffee.qusol.com.au";

export default defineComponent({
  name: "MainLayout",
  components: {
    TheHeaderMenu,
    PopularCarousel,
    PromoCarousel,
    PreviousCarousel,
    FavoritesCarousel,
    DiscoverList,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonPage,
    IonContent,
    IonHeader,
    IonItem,
    IonButtons,
    IonMenuButton,
    IonList,
    IonIcon,
    IonToolbar,
    IonMenu,
  },
  data() {
    return {
      coffeeShops: {},
    };
  },
  methods: {
    async getCoffeeShops() {
      let paramsData = {
        isDeleted: "0",
      };

      let axiosConfig = {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
        params: paramsData,
      };

      let result = await axios.get(
        BASE_URI + "/cafe/get-coffee-shops",
        axiosConfig
      );

      this.coffeeShops =
        result && result.data.data.length ? result.data.data : {};
    },
  },
  async created() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (queryString !== null) {
      if (localStorage.getItem("token") === null) {
        localStorage.setItem("token", urlParams.get("token"));
        localStorage.setItem("id", urlParams.get("id"));
        localStorage.setItem("name", urlParams.get("name"));
        localStorage.setItem("email", urlParams.get("email"));
        localStorage.setItem("mobile", urlParams.get("mobile"));
      }

      this.$router.push("/home");
    }

    await this.getCoffeeShops();
  },
});
</script>
<style scoped>
hr.solid {
  border-top: 1px solid #f3f3f3;
  margin-bottom: 10px;
}
</style>

<template>
  <div class="card-container">
    <!--content start -->
    <ion-row>
      <ion-col>
        <ion-card class="cafecard">
          <img
            :src="product.cafeProducts['productImgUrl']"
            class="menu-img"
            @click="$emit('view-product', product)"
          />
          <ion-card-title
            class="h1-card"
            @click="$emit('view-product', product)"
            >{{ product.cafeProducts["name"] }}</ion-card-title
          >
          <span class="price-card">
            $ {{ parseFloat(product.cafeProducts["originalPrice"]).toFixed(2) }}
          </span>
        </ion-card>
      </ion-col>
    </ion-row>
    <!-- content end -->
  </div>
</template>
<script>
import { defineComponent } from "vue";
import {
  IonRow,
  IonCol,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonIcon,
} from "@ionic/vue";

export default defineComponent({
  name: "cafeItemCard",
  components: {
    IonRow,
    IonCol,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonIcon,
  },
  props: {
    product: Object,
  },
});
</script>
<style scoped>
.menu-img {
  border-top-left-radius: 2px !important;
  border-top-right-radius: 2px !important;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  height: 200px;
  object-fit: cover;
}
.card-container {
  float: left;
  width: 50%;
}
.cafecard {
  border: none;
  box-shadow: none;
  margin: 20px 10px 20px 10px;
  border-radius: 2px;
}
.h1-card {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
  margin-top: 10px;
  margin-left: 5px;
  margin-bottom: 5px;
}
.price-card {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
  margin-left: 5px;
}
</style>

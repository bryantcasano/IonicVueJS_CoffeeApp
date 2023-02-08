<template>
  <div class="card-container">
    <!--content start -->
    <ion-row>
      <ion-col class="ion-no-padding">
        <ion-card class="cafecard">
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
  name: "cafeItemListCard",
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
  border-radius: 2px;
}
.card-container {
  float: left;
  width: 100%;
}
.cafecard {
  border: none;
  box-shadow: none;
  margin: 0px 10px 0px 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f3f3f3;
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
  color: #828282;
  margin-left: 5px;
}
</style>

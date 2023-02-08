<template>
  <div>
    <ion-row>
      <ion-col size="12">
        <span class="h1-banner">Discover</span>
      </ion-col>
    </ion-row>
    <swiper
      :modules="modules"
      :autoplay="false"
      :keyboard="true"
      :scrollbar="false"
      :zoom="true"
      :slides-per-view="4"
    >
      <swiper-slide>
        <div class="slide">
          <ion-button class="discover" router-link="/category-search"
            >Near you</ion-button
          >
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <ion-button class="discover" router-link="/category-search"
            >Category 1</ion-button
          >
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <ion-button class="discover" router-link="/category-search"
            >Category 2</ion-button
          >
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <ion-button class="discover" router-link="/category-search"
            >Category 3</ion-button
          >
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <ion-button class="discover" router-link="/category-search"
            >Category 4</ion-button
          >
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <ion-button class="discover" router-link="/category-search"
            >Category 5</ion-button
          >
        </div>
      </swiper-slide>
    </swiper>
    <ion-card class="cafelist" v-for="cafe in coffeeShops" :key="cafe.id">
      <a :href="'/cafemenu?id=' + cafe.uuid">
        <div class="img-container">
          <img v-bind:src="cafe.shopImgUrl" class="cafelist-img" />
        </div>
      </a>
      <h2 class="h2-banner">{{ cafe.shopName }}</h2>
      <ion-icon src="assets/icon/star.svg" class="banner-icon" color="primary">
      </ion-icon>
      <span class="rating-txt">{{ cafe.averageRatings }}</span>
      <span class="cafeinfo-txt"> (232)</span>
      <ion-icon
        src="assets/icon/dot-separate.svg"
        class="dotsep-icon"
        color="primary"
      >
      </ion-icon>
      <ion-icon
        src="assets/icon/distance.svg"
        class="banner-icon"
        color="primary"
      >
      </ion-icon>
      <span class="cafeinfo-txt">1.3km</span>
      <ion-icon
        src="assets/icon/dot-separate.svg"
        class="dotsep-icon"
        color="primary"
      >
      </ion-icon>
      <ion-icon src="assets/icon/time-outline.svg" class="banner-icon">
      </ion-icon>
      <span class="cafeinfo-txt">24 min</span>
    </ion-card>
  </div>
</template>
<style scoped>
.h1-banner {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #1b1b1b;
  margin: 15px 0px 15px 15px;
}
.link-banner {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  color: #0057ff;
  float: right;
  padding-right: 15px;
  padding-top: 3px;
}
.h2-banner {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
  margin-top: 0px;
  margin-bottom: 5px;
  text-align: left;
}
a.link-banner {
  text-decoration: none;
}
.rating-txt {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 132.6%;
  letter-spacing: 0.02em;
  color: #1b1b1b;
}
.cafeinfo-txt {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 132.6%;
  letter-spacing: 0.02em;
  color: #828282;
}
.banner-icon {
  vertical-align: middle;
  padding-right: 5px;
  width: 11px;
}
.dotsep-icon {
  vertical-align: middle;
  width: 3px;
  height: 3px;
  padding-right: 10px;
  padding-left: 10px;
}
ion-button.discover {
  --background: #ffffff;
  --background-hover: #ffe4cc;
  --background-activated: #ffe4cc;
  --background-focused: #ffe4cc;
  --color: #1b1b1b;
  --color-activated: #ff8000;
  --border-radius: 4px;
  --border-color: #f3f3f3;
  --border-style: solid;
  --border-width: 1px;
  --ripple-color: #dce8ff;
  --padding: 8px 16px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  margin-top: 15px;
  margin-left: 25px;
  text-transform: none;
  --box-shadow: none;
  width: auto;
}
ion-button:active {
  --border-color: #ffe4cc;
}
.cafelist {
  border-radius: 2px;
  box-shadow: none;
}
.cafelist-img {
  border: none;
  box-shadow: none;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  width: auto;
  height: 128px;
  object-fit: cover;
  margin-bottom: 10px;
}
div.img-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.img-container img {
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>
<script>
import { defineComponent } from "vue";
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  IonContent,
  IonPage,
  IonIcon,
  IonRow,
  IonCol,
  IonButton,
  IonButtons,
  IonCard,
} from "@ionic/vue";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import "@ionic/vue/css/ionic-swiper.css";

export default defineComponent({
  props: {
    coffeeShops: Object,
  },
  components: {
    Swiper,
    SwiperSlide,
    IonContent,
    IonPage,
    IonIcon,
    IonRow,
    IonCol,
    IonButton,
    IonButtons,
    IonCard,
  },
  setup() {
    return {
      modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom],
    };
  },
});
</script>

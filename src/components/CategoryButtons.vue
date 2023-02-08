<template>
  <div>
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
          <ion-button class="category" router-link="/category-search"
            >Near you</ion-button
          >
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <ion-button class="category" router-link="/category-search"
            >Category 1</ion-button
          >
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <ion-button class="category" router-link="/category-search"
            >Category 2</ion-button
          >
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <ion-button class="category" router-link="/category-search"
            >Category 3</ion-button
          >
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <ion-button class="category" router-link="/category-search"
            >Category 4</ion-button
          >
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <ion-button class="category" router-link="/category-search"
            >Category 5</ion-button
          >
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
ion-button.category {
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
  margin-top: 0px;
  margin-right: 25px;
  text-transform: none;
  --box-shadow: none;
  width: auto;
}
ion-button:active {
  --border-color: #ffe4cc;
}
.swiper .swiper-slide {
  display: flex;
  position: relative;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 18px;
  text-align: center;
  box-sizing: border-box;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
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

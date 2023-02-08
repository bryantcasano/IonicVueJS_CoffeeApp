<template>
  <div>
    <ion-row>
      <ion-col size="8">
        <span class="h1-banner">My previous orders</span>
      </ion-col>
      <ion-col size="4">
        <router-link to="/" class="link-banner" replace>See all</router-link>
      </ion-col>
    </ion-row>
    <swiper
      :modules="modules"
      :autoplay="false"
      :keyboard="true"
      :scrollbar="false"
      :zoom="true"
      :slides-per-view="2"
    >
      <swiper-slide v-for="cafe in coffeeShops" :key="cafe.id">
        <div class="slide">
          <a :href="'/cafemenu?id=' + cafe.uuid">
            <div class="img-container">
              <img v-bind:src="cafe.shopImgUrl" />
            </div>
          </a>
          <h2 class="h2-banner">{{ cafe.shopName }}</h2>
          <ion-icon
            src="assets/icon/star.svg"
            class="banner-icon"
            color="primary"
          >
          </ion-icon>
          <span class="rating-txt">{{ cafe.averageRatings }}</span>
          <span class="cafeinfo-txt"> (232)</span>
          <ion-icon
            src="assets/icon/dot-separate.svg"
            class="dotsep-icon"
            color="primary"
          ></ion-icon>
          <ion-icon
            src="assets/icon/distance.svg"
            class="banner-icon"
            color="primary"
          ></ion-icon
          ><span class="cafeinfo-txt">1.3km</span>
        </div>
      </swiper-slide>
    </swiper>
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
  color: #ff8000;
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
.swiper-slide {
  display: block;
}
.swiper-slide img {
  margin: 10px 0 10px 0px;
  pointer-events: none;
}
.slide {
  margin-bottom: 5%;
  margin-left: 12%;
  margin-right: 0%;
  text-align: left;
}
.swiper .swiper-slide {
  padding: 0px 0px 0px 0px !important;
}
.swiper .swiper-slide img {
  width: auto;
  height: auto;
}
.swiper .swiper-slide img {
  width: 165px;
  height: 165px;
  object-fit: cover;
  border-radius: 2px;
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
import { IonContent, IonPage, IonIcon, IonRow, IonCol } from "@ionic/vue";

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
  },
  setup() {
    return {
      modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom],
    };
  },
});
</script>

<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules" :autoplay="false" :pagination="true">
        <swiper-slide>
          <div class="slide">
            <img src="assets/images/slide1.png" />
            <div align="center">
              <h1 class="h1-onboarding">When all you need is a coffee.</h1>
              <p class="p-onboarding">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            <nextButton />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide">
            <img src="assets/images/slide2.png" />
            <div align="center">
              <h1 class="h1-onboarding">Discover the best cafes near you.</h1>
              <p class="p-onboarding">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            <nextButton />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide">
            <img src="assets/images/slide3.png" />
            <div align="center">
              <h1 class="h1-onboarding">Order ahead and skip the queue.</h1>
              <p class="p-onboarding">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            <router-link to="/welcome" replace
              ><ion-button expand="block" color="primary" class="btn-onboarding"
                >Get started</ion-button
              ></router-link
            >
          </div>
        </swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script>
import { defineComponent } from "vue";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
import { IonPage, IonContent, IonButton } from "@ionic/vue";
import nextButton from "@/components/nextButton.vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@ionic/vue/css/ionic-swiper.css";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    IonContent,
    IonButton,
    Navigation,
    nextButton,
    IonPage,
  },
  setup() {
    const swiper = useSwiper();
    return {
      swiper,
      modules: [Autoplay, Pagination, Navigation],
    };
  },
});
</script>
<style scoped>
.swiper-slide {
  display: block;
}
.swiper .swiper-slide img {
  width: auto;
  height: auto;
}
.swiper-slide img {
  margin: 40px 0px 45px 0px;
  pointer-events: none;
}
.swiper .swiper-slide {
  padding: 0px 0px 0px 0px !important;
}
.h1-onboarding {
  width: 58%;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  text-align: center;
  color: #1b1b1b;
}
.p-onboarding {
  width: 75%;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: #828282;
}
.btn-onboarding {
  font-weight: 600;
  font-size: 16px;
  font-family: "Gilroy";
  margin-top: 10%;
  text-transform: none;
  letter-spacing: 1px;
  height: 45px;
}
ion-button {
  margin: 0px 30px 0px 30px;
  --border-radius: 4px;
}
@media only screen and (max-height: 800px) {
  .swiper .swiper-slide img {
    width: auto;
    height: 320px;
  }
}
</style>
<style>
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 250px;
  left: 0;
  width: 100%;
}
@media only screen and (max-height: 800px) {
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 250px;
    left: 0;
    width: 100%;
  }
}
</style>

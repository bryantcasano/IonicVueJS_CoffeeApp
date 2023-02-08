<template>
  <div>
    <swiper
      :modules="modules"
      :autoplay="false"
      :keyboard="true"
      :scrollbar="false"
      :zoom="true"
      :slides-per-view="1.5"
    >
      <swiper-slide>
        <div class="slide">
          <img src="assets/placeholders/promo1.png" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <img src="assets/placeholders/promo1.png" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <img src="assets/placeholders/promo1.png" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.swiper-slide {
  display: block;
}
.swiper-slide img {
  margin: 10px 0 10px 0px;
  pointer-events: none;
}
.slide {
  margin-top: 0%;
  margin-bottom: 5%;
  margin-left: 8%;
  margin-right: 0%;
}
.swiper .swiper-slide {
  padding: 0px 0px 0px 0px !important;
}
.swiper .swiper-slide img {
  width: auto;
  height: auto;
}
</style>
<script>
import { defineComponent } from "vue";
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { IonContent, IonPage } from "@ionic/vue";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import "@ionic/vue/css/ionic-swiper.css";

export default defineComponent({
  components: { Swiper, SwiperSlide, IonContent, IonPage },
  setup() {
    return {
      modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom],
    };
  },
});
</script>

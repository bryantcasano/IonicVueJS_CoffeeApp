<template>
  <div v-if="cafeInfo">
    <div class="container">
      <img class="center-img" :src="cafeInfo.shopImgUrl" />
      <router-link to="/home" replace>
        <img class="back-icon" src="assets/icon/arrowleft-circle.svg" />
      </router-link>
      <img class="heart-icon" src="assets/icon/heart.svg" />
    </div>
    <div class="cafeinfo-container">
      <h1 class="h1-cafe">{{ cafeInfo.shopName }}</h1>
      <h2 class="h2-cafe">{{ cafeInfo.address }}</h2>
      <ion-icon
        src="assets/icon/time-outline.svg"
        class="banner-icon"
      ></ion-icon
      ><span class="cafeinfo-txt">8am - 5pm</span>
      <ion-icon
        src="assets/icon/dot-separate.svg"
        class="dotsep-icon"
      ></ion-icon>
      <ion-icon src="assets/icon/distance.svg" class="banner-icon"></ion-icon
      ><span class="cafeinfo-txt">1.3km</span>
      <ion-icon
        src="assets/icon/dot-separate.svg"
        class="dotsep-icon"
      ></ion-icon>
      <ion-icon src="assets/icon/timer.svg" class="banner-icon"></ion-icon
      ><span class="cafeinfo-txt">Ready in 5 min</span>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { IonIcon } from "@ionic/vue";

export default defineComponent({
  name: "cafeItemHeader",
  components: { IonIcon },
  props: {
    cafeInfo: Object,
  },
});
</script>
<style scoped>
.container {
  position: relative;
}
.container img {
  display: block;
  height: 250px;
}
.center-img {
  margin-left: auto;
  margin-right: auto;
}
.container .back-icon {
  position: absolute;
  top: -60px;
  left: 20px;
}
.container .heart-icon {
  position: absolute;
  top: -60px;
  right: 20px;
}
.h1-cafe {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  color: #1b1b1b;
  margin-top: 20px;
  margin-bottom: 5px;
  text-align: left;
}
.h2-cafe {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #ff8000;
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: left;
}
.cafeinfo-container {
  margin-left: 20px;
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
.cafeinfo-txt {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;
  letter-spacing: 0.02em;
  color: #1b1b1b;
}
.back-icon {
  height: 36px;
  width: 36px;
}
.heart-icon {
  height: 36px;
  width: 36px;
}
</style>

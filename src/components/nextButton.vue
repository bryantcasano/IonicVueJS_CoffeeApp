<template>
  <ion-button
    @click="swiper.slideNext()"
    class="btn-onboarding"
    expand="block"
    color="primary"
    >Next</ion-button
  >
</template>
<script>
import { defineComponent } from "vue";
import { useSwiper } from "swiper/vue";
import { IonButton } from "@ionic/vue";

export default defineComponent({
  components: {
    IonButton,
  },
  setup() {
    const swiper = useSwiper();

    return {
      swiper,
    };
  },
});
</script>
<style scoped>
.btn-onboarding {
  font-weight: 600;
  font-size: 16px;
  font-family: "Gilroy";
  margin-top: 10%;
  text-transform: none;
  letter-spacing: 1px;
  height: 45px;
  margin: 26px 30px 0px 30px !important;
  border-radius: 4px;
  width: 327px;
  background-color: #ff8000;
  color: #ffffff;
}
</style>

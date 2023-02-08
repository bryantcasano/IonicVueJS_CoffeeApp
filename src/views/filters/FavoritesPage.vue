<template>
  <ion-page>
    <ion-content>
      <ion-row>
        <ion-col size="4">
          <a href="/home"
            ><ion-icon class="favback-icon" src="assets/icon/arrow-left.svg"
          /></a>
        </ion-col>
        <ion-col size="4" class="h1-menu">My Favorites</ion-col>
      </ion-row>
      <div class="favorites-div">
        <ion-row router-link="/home" class="fav-card">
          <ion-col size="5">
            <div class="img-container">
              <img src="assets/placeholders/cafeheader2.png" />
            </div>
          </ion-col>
          <ion-col size="7">
            <span class="fav-h2">Llaw hyde park</span>
            <span class="fav-cafeinfo">Coffee • Frappes • Milkshakes</span>
            <ion-icon
              src="assets/icon/star.svg"
              class="banner-icon"
              color="primary"
            ></ion-icon
            ><span class="rating-txt">4.5</span
            ><span class="fav-cafeinfo2"> (232)</span>
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
            ><span class="fav-cafeinfo2">1.3km</span>
          </ion-col>
        </ion-row>
        <ion-row router-link="/home" class="fav-card">
          <ion-col size="5">
            <div class="img-container">
              <img src="assets/placeholders/cafeheader4.png" />
            </div>
          </ion-col>
          <ion-col size="7">
            <span class="fav-h2">Tweety bird</span>
            <span class="fav-cafeinfo">Coffee • Frappes • Milkshakes</span>
            <ion-icon
              src="assets/icon/star.svg"
              class="banner-icon"
              color="primary"
            ></ion-icon
            ><span class="rating-txt">4.5</span
            ><span class="fav-cafeinfo2"> (232)</span>
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
            ><span class="fav-cafeinfo2">1.3km</span>
          </ion-col>
        </ion-row>
        <ion-row router-link="/home" class="fav-card">
          <ion-col size="5">
            <div class="img-container">
              <img src="assets/placeholders/cafeheader1.png" />
            </div>
          </ion-col>
          <ion-col size="7">
            <span class="fav-h2">LLAW Boutique PORT PLAZA</span>
            <span class="fav-cafeinfo">Coffee • Frappes • Milkshakes</span>
            <ion-icon
              src="assets/icon/star.svg"
              class="banner-icon"
              color="primary"
            ></ion-icon
            ><span class="rating-txt">4.5</span
            ><span class="fav-cafeinfo2"> (232)</span>
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
            ><span class="fav-cafeinfo2">1.3km</span>
          </ion-col>
        </ion-row>
        <!-- no favorites   <div class="center-img">
          <img src="assets/icon/empty-message.png" />
        </div>-->
      </div>
    </ion-content>
  </ion-page>
</template>
<style scoped>
.center-img {
  display: flex;
  justify-content: center;
}
.fav-card {
  margin-bottom: 10px;
  height: 100px;
}
.h1-menu {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #1b1b1b;
  margin-top: 42px;
  margin-bottom: 25px;
  text-align: center;
}
.fav-h2 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #1b1b1b;
  margin-top: 0px;
  margin-bottom: 5px;
  text-align: left;
  display: block;
}
.favback-icon {
  height: 20px;
  width: 20px;
  margin-top: 35%;
  margin-left: 20%;
}
.favorites-div {
  padding: 5%;
}
.img-container {
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
.dotsep-icon {
  vertical-align: middle;
  width: 3px;
  height: 3px;
  padding-right: 10px;
  padding-left: 10px;
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
.fav-cafeinfo {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 132.6%;
  letter-spacing: 0.02em;
  color: #828282;
  display: block;
  margin-bottom: 5px;
}
.fav-cafeinfo2 {
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
</style>
<script>
import { defineComponent } from "vue";
import {
  IonContent,
  IonIcon,
  IonPage,
  IonRow,
  IonCol,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/vue";

export default defineComponent({
  name: "FavoritesPage",
  components: {
    IonContent,
    IonIcon,
    IonPage,
    IonRow,
    IonCol,
    IonLabel,
    IonInput,
    IonButton,
  },
});
</script>

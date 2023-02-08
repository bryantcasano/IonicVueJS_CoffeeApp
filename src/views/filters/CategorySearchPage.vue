<template>
  <ion-page>
    <ion-content>
      <ion-row>
        <ion-col size="4">
          <a href="/home"
            ><ion-icon class="favback-icon" src="assets/icon/arrow-left.svg"
          /></a>
        </ion-col>
        <ion-col size="4" class="h1-menu">Categories</ion-col>
        <ion-col size="4">
          <ion-icon class="pm-icon" src="assets/icon/cat-search.svg" />
        </ion-col>
      </ion-row>
      <ion-row class="cat-row">
        <ion-col size="4" router-link="/category-grid">
          <img src="assets/placeholders/cat1.png" />
          <span>Category</span></ion-col
        >
        <ion-col size="4" router-link="/category-grid">
          <img src="assets/placeholders/cat2.png" />
          <span>Category</span></ion-col
        >
        <ion-col size="4" router-link="/category-grid">
          <img src="assets/placeholders/cat3.png" />
          <span>Category</span></ion-col
        >
      </ion-row>
      <ion-row class="cat-row">
        <ion-col size="4" router-link="/category-grid">
          <img src="assets/placeholders/cat4.png" />
          <span>Category</span></ion-col
        >
        <ion-col size="4" router-link="/category-grid">
          <img src="assets/placeholders/cat5.png" />
          <span>Category</span></ion-col
        >
        <ion-col size="4" router-link="/category-grid">
          <img src="assets/placeholders/cat6.png" />
          <span>Category</span></ion-col
        >
      </ion-row>
      <ion-row class="cat-row">
        <ion-col size="4" router-link="/category-grid">
          <img src="assets/placeholders/cat7.png" />
          <span>Category</span></ion-col
        >
        <ion-col size="4" router-link="/category-grid">
          <img src="assets/placeholders/cat8.png" />
          <span>Category</span></ion-col
        >
        <ion-col size="4" router-link="/category-grid">
          <img src="assets/placeholders/cat9.png" />
          <span>Category</span></ion-col
        >
      </ion-row>
      <hr class="sep-div-cat" />
      <div class="favorites-div">
        <span class="h1-catsearch">Discover</span>
        <CategoryButtons name="CategoryButtons" />
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
        <!-- no results   <div class="center-img">
          <img src="assets/icon/empty-message.png" />
        </div>-->
      </div>
    </ion-content>
  </ion-page>
</template>
<style scoped>
.cat-row {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 132.6%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #1b1b1b;
  opacity: 0.8;
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
.pm-icon {
  height: 20px;
  width: 20px;
  float: right;
  margin-top: 35%;
  margin-right: 10%;
  margin-bottom: 25px;
}
.center-img {
  display: flex;
  justify-content: center;
}
.fav-card {
  margin-bottom: 10px;
  height: 100px;
}
.h1-catsearch {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #1b1b1b;
  margin-bottom: 15px;
  margin-left: 15px;
  display: block;
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
  margin-left: 10%;
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
ion-searchbar.search-bar {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  --background: #f3f3f3;
  --color: #828282;
  --placeholder-color: #828282;
  --icon-color: #1b1b1b;
  --clear-button-color: #828282;
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 20px;
  margin-right: 15px;
  --border-radius: 2px;
  --box-shadow: none !important;
}
ion-searchbar.ios.search-bar {
  --cancel-button-color: #1b1b1b;
}
ion-searchbar.md.search-bar {
  --cancel-button-color: #1b1b1b;
}
.searchbar-input-container.sc-ion-searchbar-ios {
  height: 36px;
  background: #f3f3f3;
}
.sep-div-cat {
  border-bottom: 1px solid #f3f3f3;
  margin-bottom: 20px;
  margin-top: 25px;
}
</style>
<script>
import { defineComponent } from "vue";
import CategoryButtons from "@/components/CategoryButtons.vue";
import {
  IonContent,
  IonIcon,
  IonPage,
  IonRow,
  IonCol,
  IonLabel,
  IonInput,
  IonButton,
  IonSearchbar,
} from "@ionic/vue";

export default defineComponent({
  name: "CategorySearchPage",
  components: {
    IonContent,
    IonIcon,
    IonPage,
    IonRow,
    IonCol,
    IonLabel,
    IonInput,
    IonButton,
    IonSearchbar,
    CategoryButtons,
  },
});
</script>

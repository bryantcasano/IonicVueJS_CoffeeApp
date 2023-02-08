<template>
  <ion-page>
    <ion-content>
      <ion-row>
        <ion-col size="1">
          <a href="/home"
            ><ion-icon class="favback-icon" src="assets/icon/arrow-left.svg"
          /></a>
        </ion-col>
        <ion-col size="11">
          <ion-searchbar
            class="search-bar"
            placeholder="Find a cafe"
          ></ion-searchbar>
        </ion-col>
      </ion-row>
      <div class="favorites-div">
        <CategoryButtons name="CategoryButtons" />
        <span class="h1-search">Recent searches</span>
        <ion-row>
          <ion-col size="12">
            <ion-button class="recent">Search 1</ion-button>
            <ion-button class="recent">Search item 2</ion-button>
            <ion-button class="recent">Search 3</ion-button>
            <ion-button class="recent">Search item 4</ion-button>
            <ion-button class="recent">Search item 5</ion-button>
          </ion-col>
        </ion-row>
        <hr class="sep-div" />
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
.center-img {
  display: flex;
  justify-content: center;
}
.fav-card {
  margin-bottom: 10px;
  height: 100px;
}
.h1-search {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #1b1b1b;
  margin-top: 42px;
  margin-bottom: 25px;
  margin-left: 15px;
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
  margin-top: 33px;
  margin-left: 15px;
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
ion-button.recent {
  --background: #f3f3f3;
  --background-hover: #dce8ff;
  --background-activated: #dce8ff;
  --background-focused: #dce8ff;
  --color: #666666;
  --border-radius: 8px;
  --border-color: #f3f3f3;
  --border-style: solid;
  --border-width: 1px;
  --ripple-color: #dce8ff;
  --padding: 8px 16px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin-top: 15px;
  margin-right: 15px;
  text-transform: none;
  --box-shadow: none;
  width: auto;
}
.sep-div {
  border-bottom: 1px solid #f3f3f3;
  margin-bottom: 20px;
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
  name: "SearchPage",
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

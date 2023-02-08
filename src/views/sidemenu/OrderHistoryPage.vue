<template>
  <ion-page>
    <!--inner header start-->
    <ion-header>
      <ion-toolbar>
        <ion-row>
          <ion-col size="4">
            <a href="/home"
              ><ion-icon class="back-icon" src="assets/icon/arrow-left.svg"
            /></a>
          </ion-col>
          <ion-col size="4" class="h1-menu">Order history</ion-col>
        </ion-row>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <span class="h1-ol">May 2022</span>

      <ion-row class="orderlist" router-link="/order-details">
        <ion-col size="2">
          <img src="assets/placeholders/oh1.png" class="order-icon" />
        </ion-col>
        <ion-col class="order-col2">
          <ion-icon class="ver-icon" src="assets/icon/tick-circle.svg" />
          <span class="order-delivered">Delivered</span>
          <ion-icon src="assets/icon/dot-separate.svg" class="dotsep-icon" />
          <span class="order-txtlight">2 items</span>
          <span class="order-txtbold">Hot Chocolate</span>
        </ion-col>
        <ion-col class="order-col3">
          <div class="ion-float-right">
            <span class="order-txtlight">May 25</span>
            <ion-icon src="assets/icon/dot-separate.svg" class="dotsep-icon" />
            <span class="order-txtlight">14:30</span>
            <span class="order-txtbold ion-text-right">$15.60</span>
          </div>
        </ion-col>
      </ion-row>

      <ion-row class="orderlist" router-link="/order-details">
        <ion-col size="2">
          <img src="assets/placeholders/oh1.png" class="order-icon" />
        </ion-col>
        <ion-col class="order-col2">
          <ion-icon class="ver-icon" src="assets/icon/tick-circle.svg" />
          <span class="order-delivered">Delivered</span>
          <ion-icon src="assets/icon/dot-separate.svg" class="dotsep-icon" />
          <span class="order-txtlight">2 items</span>
          <span class="order-txtbold">Lucente Super Tuscan</span>
        </ion-col>
        <ion-col class="order-col3">
          <div class="ion-float-right">
            <span class="order-txtlight">May 25</span>
            <ion-icon src="assets/icon/dot-separate.svg" class="dotsep-icon" />
            <span class="order-txtlight">14:30</span>
            <span class="order-txtbold ion-text-right">$15.60</span>
          </div>
        </ion-col>
      </ion-row>

      <ion-row class="orderlist" router-link="/order-details">
        <ion-col size="2">
          <img src="assets/placeholders/oh1.png" class="order-icon" />
        </ion-col>
        <ion-col class="order-col2">
          <ion-icon class="ver-icon" src="assets/icon/tick-circle.svg" />
          <span class="order-delivered">Delivered</span>
          <ion-icon src="assets/icon/dot-separate.svg" class="dotsep-icon" />
          <span class="order-txtlight">2 items</span>
          <span class="order-txtbold">Jj Whitley Violet</span>
        </ion-col>
        <ion-col class="order-col3">
          <div class="ion-float-right">
            <span class="order-txtlight">May 25</span>
            <ion-icon src="assets/icon/dot-separate.svg" class="dotsep-icon" />
            <span class="order-txtlight">14:30</span>
            <span class="order-txtbold ion-text-right">$15.60</span>
          </div>
        </ion-col>
      </ion-row>

      <ion-row class="orderlist" router-link="/order-details">
        <ion-col size="2">
          <img src="assets/placeholders/oh1.png" class="order-icon" />
        </ion-col>
        <ion-col class="order-col2">
          <ion-icon class="ver-icon" src="assets/icon/close-circle.svg" />
          <span class="order-cancelled">Cancelled</span>
          <ion-icon src="assets/icon/dot-separate.svg" class="dotsep-icon" />
          <span class="order-txtlight">2 items</span>
          <span class="order-txtbold">Avo - Go - Go Smoothie</span>
        </ion-col>
        <ion-col class="order-col3">
          <div class="ion-float-right">
            <span class="order-txtlight">May 25</span>
            <ion-icon src="assets/icon/dot-separate.svg" class="dotsep-icon" />
            <span class="order-txtlight">14:30</span>
            <span class="order-txtbold ion-text-right">$15.60</span>
          </div>
        </ion-col>
      </ion-row>

      <span class="h1-ol">April 2022</span>

      <ion-row class="orderlist" router-link="/order-details">
        <ion-col size="2">
          <img src="assets/placeholders/oh1.png" class="order-icon" />
        </ion-col>
        <ion-col class="order-col2">
          <ion-icon class="ver-icon" src="assets/icon/tick-circle.svg" />
          <span class="order-delivered">Delivered</span>
          <ion-icon src="assets/icon/dot-separate.svg" class="dotsep-icon" />
          <span class="order-txtlight">2 items</span>
          <span class="order-txtbold">Hot Chocolate</span>
        </ion-col>
        <ion-col class="order-col3">
          <div class="ion-float-right">
            <span class="order-txtlight">May 25</span>
            <ion-icon src="assets/icon/dot-separate.svg" class="dotsep-icon" />
            <span class="order-txtlight">14:30</span>
            <span class="order-txtbold ion-text-right">$15.60</span>
          </div>
        </ion-col>
      </ion-row>

      <ion-row class="orderlist" router-link="/order-details">
        <ion-col size="2">
          <img src="assets/placeholders/oh1.png" class="order-icon" />
        </ion-col>
        <ion-col class="order-col2">
          <ion-icon class="ver-icon" src="assets/icon/tick-circle.svg" />
          <span class="order-delivered">Delivered</span>
          <ion-icon src="assets/icon/dot-separate.svg" class="dotsep-icon" />
          <span class="order-txtlight">2 items</span>
          <span class="order-txtbold">Lucente Super Tuscan</span>
        </ion-col>
        <ion-col class="order-col3">
          <div class="ion-float-right">
            <span class="order-txtlight">May 25</span>
            <ion-icon src="assets/icon/dot-separate.svg" class="dotsep-icon" />
            <span class="order-txtlight">14:30</span>
            <span class="order-txtbold ion-text-right">$15.60</span>
          </div>
        </ion-col>
      </ion-row>

      <ion-row class="orderlist" router-link="/order-details">
        <ion-col size="2">
          <img src="assets/placeholders/oh1.png" class="order-icon" />
        </ion-col>
        <ion-col class="order-col2">
          <ion-icon class="ver-icon" src="assets/icon/tick-circle.svg" />
          <span class="order-delivered">Delivered</span>
          <ion-icon src="assets/icon/dot-separate.svg" class="dotsep-icon" />
          <span class="order-txtlight">2 items</span>
          <span class="order-txtbold">Jj Whitley Violet</span>
        </ion-col>
        <ion-col class="order-col3">
          <div class="ion-float-right">
            <span class="order-txtlight">May 25</span>
            <ion-icon src="assets/icon/dot-separate.svg" class="dotsep-icon" />
            <span class="order-txtlight">14:30</span>
            <span class="order-txtbold ion-text-right">$15.60</span>
          </div>
        </ion-col>
      </ion-row>

      <ion-row class="orderlist" router-link="/order-details">
        <ion-col size="2">
          <img src="assets/placeholders/oh1.png" class="order-icon" />
        </ion-col>
        <ion-col class="order-col2">
          <ion-icon class="ver-icon" src="assets/icon/close-circle.svg" />
          <span class="order-cancelled">Cancelled</span>
          <ion-icon src="assets/icon/dot-separate.svg" class="dotsep-icon" />
          <span class="order-txtlight">2 items</span>
          <span class="order-txtbold">Avo - Go - Go Smoothie</span>
        </ion-col>
        <ion-col class="order-col3">
          <div class="ion-float-right">
            <span class="order-txtlight">May 25</span>
            <ion-icon src="assets/icon/dot-separate.svg" class="dotsep-icon" />
            <span class="order-txtlight">14:30</span>
            <span class="order-txtbold ion-text-right">$15.60</span>
          </div>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>
<style scoped>
ion-toolbar {
  --background: #ffffff;
  --border-color: #f3f3f3;
  --border-width: 1px 0;
}
.orderlist {
  border-bottom: 1px solid #f3f3f3;
  padding-top: 15px;
  padding-bottom: 10px;
}
.back-icon {
  height: 20px;
  width: 20px;
  margin-top: 35%;
  margin-left: 10%;
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
.h1-ol {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #1b1b1b;
  display: block;
  margin-top: 15px;
  margin-bottom: 5px;
  margin-left: 5%;
}
.order-icon {
  width: 46px;
  height: 46px;
  margin-left: 10px;
  margin-right: 10px;
}
.order-col2 {
  margin-left: 10px;
}
.order-col3 {
  margin-right: 10px;
}
.order-delivered {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;
  text-align: right;
  color: #00bf60;
}
.order-cancelled {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;
  text-align: right;
  color: #f04a3f;
}
.order-txtlight {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;
  text-align: right;
  color: #828282;
}
.order-txtbold {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
  display: block;
  padding-top: 5px;
}
.dotsep-icon {
  vertical-align: middle;
  width: 3px;
  height: 3px;
  padding-right: 5px;
  padding-left: 5px;
}
.ver-icon {
  vertical-align: middle;
  padding-right: 5px;
}
</style>
<script>
import { defineComponent } from "vue";
import {
  IonContent,
  IonHeader,
  IonButtons,
  IonIcon,
  IonToolbar,
  IonPage,
  IonRow,
  IonCol,
  IonAvatar,
} from "@ionic/vue";

export default defineComponent({
  name: "ProfilePage",
  components: {
    IonContent,
    IonHeader,
    IonButtons,
    IonIcon,
    IonToolbar,
    IonPage,
    IonRow,
    IonCol,
    IonAvatar,
  },
});
</script>

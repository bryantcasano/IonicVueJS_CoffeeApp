<template>
  <ion-page>
    <!--content start -->
    <ion-content>
      <div class="order-status">
        <div align="center" class="mb-img">
          <img src="assets/images/order-complete.png" />
        </div>
        <div class="orderstatus-div">
          <ion-row class="row-orderlist">
            <ion-col size="12">
              <span class="txtlight-sml">Order #A58E6</span>
            </ion-col>
            <ion-col size="12">
              <span class="orderstatus-h1">We have received your order</span>
            </ion-col>
          </ion-row>
          <div>
            <ion-row class="row-orderlist">
              <ion-col size="2">
                <span class="orderstatus-cancel">Cancel</span>
              </ion-col>
              <ion-col>
                <ion-icon
                  src="assets/icon/dot-separate.svg"
                  class="dotsep-icon"
                  color="primary"
                ></ion-icon>
                <ion-icon
                  src="assets/icon/notification-circle.svg"
                  class="notify-icon"
                ></ion-icon
                ><span class="orderstatus-notify"
                  >Notifying your barista...</span
                >
              </ion-col>
            </ion-row>
          </div>
          <div>
            <ion-row class="row-orderlist">
              <ion-col>
                <span class="order-status-txtlight">Ready in</span>
              </ion-col>
              <ion-col>
                <span class="order-status-txtlight position-right">Time</span>
              </ion-col>
            </ion-row>
            <ion-row class="row-orderlist">
              <ion-col>
                <span class="order-status-bold">10 - 15mins</span>
              </ion-col>
              <ion-col>
                <span class="order-status-bold position-right"
                  >15:30 - 15:45</span
                >
              </ion-col>
            </ion-row>
          </div>
        </div>

        <div class="orderstatus-div ion-margin-top">
          <ion-row class="row-orderlist">
            <ion-col size="1">
              <span class="order-status-bold">1x</span>
            </ion-col>
            <ion-col>
              <span class="order-status-bold">Mocha</span>
              <span class="order-status-txtlight dblock"
                >Extra espresso shot</span
              >
            </ion-col>
            <ion-col>
              <span class="order-status-normal position-right">$ 5.50</span>
            </ion-col>
          </ion-row>
          <ion-row class="row-orderlist">
            <ion-col size="1">
              <span class="order-status-bold">2x</span>
            </ion-col>
            <ion-col>
              <span class="order-status-bold">Cappuccino</span>
              <span class="order-status-txtlight dblock"
                >Extra espresso shot</span
              >
              <span class="order-status-txtlight dblock">Soy</span>
            </ion-col>
            <ion-col>
              <span class="order-status-normal position-right">$ 9.00</span>
            </ion-col>
          </ion-row>
          <ion-row class="row-orderlist">
            <ion-col size="1">
              <span class="order-status-bold">1x</span>
            </ion-col>
            <ion-col>
              <span class="order-status-bold">Iced Latte</span>
              <span class="order-status-txtlight dblock">Add vanilla</span>
            </ion-col>
            <ion-col>
              <span class="order-status-normal position-right">$ 6.00</span>
            </ion-col>
          </ion-row>
          <ion-row class="row-orderlist hr-subtotal">
            <ion-col
              ><span class="order-status-normal"
                >SubTotal (4 Items)</span
              ></ion-col
            >
            <ion-col
              ><span class="order-status-normal position-right"
                >$ 20.50</span
              ></ion-col
            >
          </ion-row>
          <ion-row class="row-orderlist">
            <ion-col
              ><span class="order-status-normal">Service Fees:</span>
            </ion-col>
            <ion-col>
              <span class="order-status-normal position-right"
                >$ 0.50</span
              ></ion-col
            >
          </ion-row>
          <ion-row class="row-orderlist">
            <ion-col><span class="order-status-bold">Total:</span> </ion-col>
            <ion-col>
              <span class="order-status-bold position-right"
                >$ 21.00</span
              ></ion-col
            >
          </ion-row>
        </div>

        <iframe
          class="orderstatus-maps"
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13083.720463239684!2d138.58949763481033!3d-34.93328958388831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cf21e79a7f05%3A0x29dcc6dec5121a8b!2sCaf%C3%A9%20Troppo!5e0!3m2!1sen!2sph!4v1663640860528!5m2!1sen!2sph"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <ion-row>
          <ion-col size="12">
            <span class="order-status-bold">Cafe Name</span>
          </ion-col>
          <ion-col size="12">
            <span class="order-status-txtlight"
              >123 King William Rd. Adelaide SA 5000</span
            >
          </ion-col>
        </ion-row>
        <router-link to="/tracking"
          ><ion-button expand="block" color="primary" class="orderstatus-btn"
            >Pick up order</ion-button
          ></router-link
        >
        <div align="center" class="ion-margin-top">
          <span class="support-link"
            ><router-link to="/">Contact support</router-link></span
          >
        </div>
      </div>
    </ion-content>
    <!-- content end -->
  </ion-page>
</template>
<style scoped>
.mb-img {
  margin-top: 10%;
  margin-bottom: -5px;
}
.dblock {
  display: block;
}
.orderstatus-div {
  background: #ffffff;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 12px 18px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  padding-top: 5%;
  padding-bottom: 5%;
}
.row-orderlist {
  padding-left: 7%;
  padding-right: 7%;
}
.orderstatus-h1 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #1b1b1b;
}
.orderstatus-cancel {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  text-align: right;
  color: #f04a3f;
}
.orderstatus-notify {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  text-align: right;
  color: #00bf60;
}
.notify-icon {
  vertical-align: middle;
  padding-right: 5px;
  width: 16px;
}
.order-status {
  padding: 5%;
}
.txtlight-sml {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #828282;
}
.order-status-txtlight {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #828282;
}
.order-status-bold {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
}
.order-status-normal {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
}
.position-right {
  position: absolute;
  right: 6px;
}
.dotsep-icon {
  vertical-align: middle;
  width: 3px;
  height: 3px;
  padding-right: 10px;
  padding-left: 5px;
}
.hr-subtotal {
  border-top: 1px solid #f3f3f3;
  margin-top: 20px;
  padding-top: 20px;
}
.orderstatus-maps {
  padding: 0%;
  border-radius: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
  height: 185px;
}
ion-button {
  --background: #ffffff;
  --background-hover: #dce8ff;
  --background-activated: #dce8ff;
  --background-focused: #dce8ff;
  --color: #1b1b1b;
  --border-radius: 4px;
  --border-color: #f3f3f3;
  --border-style: solid;
  --border-width: 1px;
  --ripple-color: #dce8ff;
  margin-top: 16px;
  height: 52px;
  text-transform: none;
  --box-shadow: none;
}
.orderstatus-btn {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
}
.support-link a {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  text-align: center;
  color: #ff8000;
  text-decoration: none;
}
</style>
<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
} from "@ionic/vue";

export default defineComponent({
  name: "OrderStatusPage",
  components: { IonPage, IonContent, IonRow, IonCol, IonIcon, IonButton },
});
</script>

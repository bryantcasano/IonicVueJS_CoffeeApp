<template>
  <div>
    <ion-menu side="end" type="overlay" content-id="menu">
      <!--inner header start-->
      <ion-header>
        <ion-toolbar>
          <ion-row>
            <ion-col size="4">
              <ion-menu-toggle>
                <ion-icon class="back-icon" src="assets/icon/arrow-left.svg" />
              </ion-menu-toggle>
            </ion-col>
            <ion-col size="4" class="h1-menu">Menu</ion-col>
            <ion-col size="4">
              <ion-icon class="right-icon" src="assets/icon/moon-outline.svg" />
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="3">
              <ion-avatar class="avatar-menu">
                <img src="assets/placeholders/avatar.png" />
              </ion-avatar>
            </ion-col>
            <ion-col size="7">
              <span class="name-menu">{{ fullName }}</span>
              <span class="edit-menu"
                ><a href="/profile">Edit profile</a>
              </span>
            </ion-col>
            <ion-col size="2">
              <ion-icon class="right-icon2" src="assets/icon/eye-outline.svg" />
            </ion-col>
          </ion-row>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
          <div class="sidemenu">
            <ion-row>
              <ion-col size="1"
                ><ion-icon class="list-icon" src="assets/icon/lovely-menu.svg"
              /></ion-col>
              <ion-col size="10" class="ion-padding-start">Favorites</ion-col>
              <ion-col size="1"
                ><ion-icon class="list-icon" src="assets/icon/arrow-right.svg"
              /></ion-col>
            </ion-row>
          </div>
          <div class="sidemenu">
            <ion-row>
              <ion-col size="1"
                ><ion-icon class="list-icon" src="assets/icon/map-menu.svg"
              /></ion-col>
              <ion-col size="10" class="ion-padding-start"
                ><router-link to="/">Address management</router-link></ion-col
              >
              <ion-col size="1"
                ><ion-icon class="list-icon" src="assets/icon/arrow-right.svg"
              /></ion-col>
            </ion-row>
          </div>
          <div class="sidemenu">
            <ion-row>
              <ion-col size="1"
                ><ion-icon class="list-icon" src="assets/icon/wallet-menu.svg"
              /></ion-col>
              <ion-col size="10" class="ion-padding-start"
                ><router-link to="/payment-management"
                  >Payment management</router-link
                ></ion-col
              >
              <ion-col size="1"
                ><ion-icon class="list-icon" src="assets/icon/arrow-right.svg"
              /></ion-col>
            </ion-row>
          </div>
          <div class="sidemenu">
            <ion-row>
              <ion-col size="1"
                ><ion-icon class="list-icon" src="assets/icon/ticket-menu.svg"
              /></ion-col>
              <ion-col size="10" class="ion-padding-start"
                ><router-link to="/">Your promotion</router-link></ion-col
              >
              <ion-col size="1"
                ><ion-icon class="list-icon" src="assets/icon/arrow-right.svg"
              /></ion-col>
            </ion-row>
          </div>
          <div class="sidemenu">
            <ion-row router-link="/order-history">
              <ion-col size="1"
                ><ion-icon
                  class="list-icon"
                  src="assets/icon/receipt-minus-menu.svg"
              /></ion-col>
              <ion-col size="10" class="ion-padding-start"
                >Order history</ion-col
              >
              <ion-col size="1"
                ><ion-icon class="list-icon" src="assets/icon/arrow-right.svg"
              /></ion-col>
            </ion-row>
          </div>
          <div class="sidemenu">
            <ion-row>
              <ion-col size="1"
                ><ion-icon
                  class="list-icon"
                  src="assets/icon/message-question-menu.svg"
              /></ion-col>
              <ion-col size="10" class="ion-padding-start"
                ><router-link to="/">Support center</router-link></ion-col
              >
              <ion-col size="1"
                ><ion-icon class="list-icon" src="assets/icon/arrow-right.svg"
              /></ion-col>
            </ion-row>
          </div>
        </ion-list>
      </ion-content>
      <div align="center" class="logout-menu padbot-logout">
        <router-link to="" @click="logout">Log out</router-link>
      </div>
    </ion-menu>
    <!--inner header end-->
    <!--outer header start-->
    <ion-toolbar class="header-toolbar">
      <ion-buttons slot="end" class="icon-menu">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
      <ion-router-outlet id="menu" class="home-header"></ion-router-outlet>
      <ion-row class="header-row">
        <ion-col size="10">
          <ion-list class="header-select">
            <span class="header-span"> Nearby to</span>
            <ion-select placeholder="North Adelaide">
              <ion-select-option value="North Adelaide"
                >North Adelaide</ion-select-option
              >
              <ion-select-option value="item1">Item 1</ion-select-option>
              <ion-select-option value="item2">Item 2</ion-select-option>
              <ion-select-option value="item3">Item 3</ion-select-option>
            </ion-select>
          </ion-list>
        </ion-col>
        <ion-col size="1">
          <router-link to="/cart"
            ><ion-icon src="assets/icon/bag.svg" class="icon-bag"></ion-icon
          ></router-link>
        </ion-col>
        <ion-col size="1">
          <ion-icon
            src="assets/icon/divider.svg"
            class="icon-divider"
          ></ion-icon>
        </ion-col>
      </ion-row>
    </ion-toolbar>
    <ion-searchbar
      class="header-search"
      placeholder="Find a cafe"
    ></ion-searchbar>
    <!--outer header end -->
  </div>
</template>
<script>
import { defineComponent } from "vue";
import {
  IonContent,
  IonHeader,
  IonMenuToggle,
  IonItem,
  IonButtons,
  IonMenuButton,
  IonList,
  IonIcon,
  IonToolbar,
  IonMenu,
  IonRouterOutlet,
  IonSelect,
  IonSelectOption,
  IonRow,
  IonCol,
  IonSearchbar,
  IonAvatar,
  IonAlert,
  alertController,
} from "@ionic/vue";

export default defineComponent({
  name: "TheHeaderMenu",
  components: {
    IonContent,
    IonHeader,
    IonMenuToggle,
    IonItem,
    IonButtons,
    IonMenuButton,
    IonList,
    IonIcon,
    IonToolbar,
    IonMenu,
    IonRouterOutlet,
    IonSelect,
    IonSelectOption,
    IonRow,
    IonCol,
    IonSearchbar,
    IonAvatar,
    IonAlert,
  },
  data() {
    return {
      promptMessage: "",
      fullName:
        localStorage.getItem("name") !== undefined
          ? localStorage.getItem("name")
          : "John Doe",
    };
  },
  methods: {
    async presentAlert() {
      const alert = await alertController.create({
        message: this.promptMessage,
        buttons: [
          {
            text: "No",
            role: "cancel",
            handler: () => {},
          },
          {
            text: "Yes",
            role: "confirm",
            handler: () => {
              this.onConfirmOK(false);
            },
          },
        ],
      });

      await alert.present();
      await alert.onDidDismiss();
    },
    async logout() {
      this.promptMessage = "Are you sure you want to logout?";
      this.presentAlert();
    },
    onConfirmOK() {
      localStorage.clear();
      window.location.href = "/userlogin";
    },
  },
});
</script>
<style scoped>
.my-custom-menu {
  --width: 400px;
}
.home-header {
  background-color: #ff8000;
  border: solid 1px #ff8000;
}
.header-toolbar {
  border: none;
}
.header-row {
  padding-top: 40px;
}
.header-span {
  padding-left: 15px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}
ion-select {
  --placeholder-color: #ffffff;
  --placeholder-opacity: 1;
  width: 160px;
  justify-content: center;
  --padding-start: 15px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
}
.header-select {
  background-color: #ff8000;
  color: #ffffff;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  width: 300px;
}
.icon-bag {
  float: right;
  font-size: 24px;
  padding-top: 10px;
}
.icon-divider {
  float: right;
  font-size: 20px;
  padding-top: 12px;
  padding-right: 0px;
  width: 12px;
}
ion-menu {
  --width: 100%;
}
ion-menu-button {
  --color: #ffffff;
  width: 40px;
  height: 40px;
  margin-top: 12px;
  margin-right: 8px;
}
ion-menu-button.ios.button {
  --color: #ffffff;
  width: 40px;
  height: 40px;
  margin-top: 27px;
  margin-right: 8px;
}
ion-searchbar.header-search {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  --background: #ffffff;
  --color: #828282;
  --placeholder-color: #828282;
  --icon-color: #1b1b1b;
  --clear-button-color: #828282;
  padding-top: 0px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 15px;
  --border-radius: 2px;
  --box-shadow: none !important;
}
ion-searchbar.ios.header-search {
  --cancel-button-color: #1b1b1b;
  background-color: #ff8000;
}
ion-searchbar.md.header-search {
  --cancel-button-color: #1b1b1b;
  background-color: #ff8000;
}
.sidemenu {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  color: #1b1b1b;
  font-size: 14px;
  padding-top: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f3f3f3;
  padding-left: 20px;
  padding-right: 20px;
}
.sidemenu a {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  color: #1b1b1b;
  font-size: 14px;
  text-decoration: none;
  width: 100%;
  display: inline-block;
  position: relative;
  z-index: 1;
}
ion-toolbar {
  --background: #ffffff;
  --border-color: #f3f3f3;
  --border-width: 1px 0;
}
.back-icon {
  height: 20px;
  width: 20px;
  margin-top: 35%;
  margin-left: 10%;
}
.right-icon {
  height: 20px;
  width: 20px;
  float: right;
  margin-top: 35%;
  margin-right: 10%;
  margin-bottom: 25px;
}
.name-menu {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #1b1b1b;
  display: block;
  margin-top: 5px;
}
.edit-menu a {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;
  color: #ababab;
  display: block;
  margin-top: 5px;
  text-decoration: none;
}
.right-icon2 {
  height: 20px;
  width: 20px;
  float: right;
  margin-right: 45%;
  margin-top: 10px;
  margin-bottom: 30px;
}
.avatar-menu {
  margin-left: 10%;
}
.logout-menu a {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ff8000;
  text-decoration: none;
}
.padbot-logout {
  padding-bottom: 32px;
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
.list-icon {
  width: 14px;
}
</style>

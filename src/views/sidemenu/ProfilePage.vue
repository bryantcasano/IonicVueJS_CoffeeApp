<template>
  <div>
    <ion-page>
      <ion-content>
        <ion-row>
          <ion-col size="4">
            <a href="/home"
              ><ion-icon class="back-icon" src="assets/icon/arrow-left.svg"
            /></a>
          </ion-col>
          <ion-col size="4" class="h1-menu">Profile Detail</ion-col>
          <ion-col size="4">
            <ion-icon class="ver-icon" src="assets/icon/verified.svg" />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="3">
            <ion-avatar class="avatar-menu">
              <img src="assets/placeholders/avatar.png" />
            </ion-avatar>
          </ion-col>
          <ion-col size="9">
            <span class="name-menu">Jane Appleseed</span>
            <span class="points-txt">764 Points</span>
            <ion-icon
              src="assets/icon/dot-separate.svg"
              class="dotsep-icon"
            ></ion-icon>
            <span class="member-lvl">Diamond ></span>
          </ion-col>
        </ion-row>

        <div class="profile-div">
          <ion-label class="label-profile">Name</ion-label>
          <ion-input
            class="input-profile"
            placeholder="Enter your Name"
            value="Jane Appleseed"
            type="text"
          />
          <ion-label class="label-profile">Mobile Number</ion-label>
          <ion-input
            class="input-profile"
            placeholder="Enter your Mobile Number"
            value="123 456 789"
            type="text"
          />
          <ion-label class="label-profile">Email</ion-label>
          <ion-input
            class="input-profile"
            placeholder="Enter your Email"
            value="test@gmail.com"
            type="email"
          />
          <ion-label class="label-profile">Password</ion-label>
          <ion-input
            class="input-profile"
            placeholder="Enter your password"
            value="qwerty1234"
            type="password"
          />
        </div>

        <span class="name-menu2">Linked account</span>
        <ion-row class="sm-row">
          <ion-col size="2" class="sm-icon">
            <img src="assets/icon/facebook-connect.png" />
          </ion-col>
          <ion-col size="6" class="sm-label">
            <span>Facebook</span>
          </ion-col>
          <ion-col class="connect position-right">
            <span>Connect</span>
          </ion-col>
        </ion-row>
        <ion-row class="sm-row">
          <ion-col size="2" class="sm-icon">
            <img src="assets/icon/google-connect.png" />
          </ion-col>
          <ion-col size="6" class="sm-label">
            <span>Google</span>
          </ion-col>
          <ion-col class="connect position-right">
            <span>Connect</span>
          </ion-col>
        </ion-row>
      </ion-content>
    </ion-page>
  </div>
</template>
<style scoped>
.profile-div {
  padding: 5%;
}
.back-icon {
  height: 20px;
  width: 20px;
  margin-top: 35%;
  margin-left: 10%;
}
.ver-icon {
  height: 35px;
  width: 35px;
  float: right;
  margin-top: 27%;
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
  margin-bottom: 5px;
}
.name-menu2 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #1b1b1b;
  display: block;
  margin-top: 5px;
  margin-bottom: 15px;
  margin-left: 5%;
}
.points-txt {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;
  color: #1b1b1b;
}
.dotsep-icon {
  vertical-align: middle;
  width: 3px;
  height: 3px;
  padding-right: 10px;
  padding-left: 10px;
}
.member-lvl {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  text-align: right;
  color: #ff8000;
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
.avatar-menu {
  margin-left: 15%;
}
.label-profile {
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #828282;
}
.input-profile {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
  border-bottom: #ebebeb 2px solid;
  margin-bottom: 5%;
}
.sm-icon {
  margin-left: 3%;
}
.sm-label {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
  padding-top: 10px;
}
.connect {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;
  text-align: right;
  color: #ff8000;
  padding-top: 10px;
}
.sm-row {
  border-bottom: 1px solid #f3f3f3;
  padding-top: 10px;
  padding-bottom: 10px;
}
.has-focus {
  border-bottom: #00bf60 2px solid;
}
.has-error {
  border-bottom: #f04a3f 2px solid;
}
.position-right {
  position: absolute;
  right: 6px;
}
</style>
<script>
import { defineComponent } from "vue";
import {
  IonContent,
  IonLabel,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonCol,
  IonAvatar,
} from "@ionic/vue";

export default defineComponent({
  name: "ProfilePage",
  components: {
    IonContent,
    IonLabel,
    IonInput,
    IonIcon,
    IonPage,
    IonRow,
    IonCol,
    IonAvatar,
  },
});
</script>

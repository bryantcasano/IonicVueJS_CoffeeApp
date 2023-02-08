<template>
  <ion-page>
    <ion-content>
      <div class="container-login">
        <router-link to="/userlogin" replace>
          <ion-icon class="back-icon" src="assets/icon/arrow-left.svg" />
        </router-link>
        <h1 class="h1-userlogin">Sign up success!</h1>
        <span class="span-login">You can now sign in.</span>
        <router-link to="/userlogin" replace
          ><ion-button expand="block" color="primary" class="btn-userlogin"
            >Back to Login</ion-button
          ></router-link
        >
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import { defineComponent } from "vue";
import { IonContent, IonPage, IonIcon, IonButton } from "@ionic/vue";

export default defineComponent({
  components: { IonContent, IonPage, IonIcon, IonButton },
});
</script>
<style scoped>
.container-login {
  padding: 10%;
}
.span-login {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;
  color: #666666;
  display: block;
  margin-bottom: 10%;
}
.h1-userlogin {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  color: #1b1b1b;
  margin-top: 10%;
  margin-bottom: 10%;
}
.label-userlogin {
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #1b1b1b;
}
.input-userlogin {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #828282;
  border-bottom: #ebebeb 2px solid;
  margin-bottom: 5%;
}
ion-input.input-userlogin {
  --padding-start: 0px;
}
.btn-userlogin {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  background: #ff8000;
  border-radius: 4px;
  margin-top: 10%;
  margin-bottom: 5%;
  text-transform: none;
  height: 45px;
}
.back-icon {
  height: 20px;
  width: 20px;
}
</style>

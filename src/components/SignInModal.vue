<template>
  <div>
    <ion-button
      id="trigger-button"
      class="welcome-btn"
      ion-button
      expand="block"
      color="primary"
      >Sign up with Email</ion-button
    >
    <ion-modal
      :is-open="false"
      :breakpoints="[0.1, 0.45, 0.5, 1]"
      :initialBreakpoint="0.45"
      trigger="trigger-button"
    >
      <ion-content>
        <div align="center" class="si-modal">
          <span class="welcome-span">Create a new account</span>
          <a href="/usersignup">
            <ion-button class="welcome-btn" expand="block" color="primary">
              Sign up with Email
            </ion-button>
          </a>
          <span class="welcome-or">or</span>
          <ion-button
            class="continue-google-btn"
            expand="block"
            fill="outline"
            @click="connectWithGoogle"
          >
            <ion-icon src="assets/icon/icon-google.svg"></ion-icon>
            Continue with Google
          </ion-button>
          <ion-button
            class="continue-fb-btn"
            expand="block"
            color="tertiary"
            @click="connectWithFacebook"
          >
            <ion-icon src="assets/icon/icon-facebook.svg"></ion-icon>
            Continue with Facebook
          </ion-button>
        </div>
      </ion-content>
    </ion-modal>
  </div>
</template>
<script>
import { IonModal, IonButton, IonContent, IonIcon } from "@ionic/vue";
import { defineComponent } from "vue";

const BASE_URI =
  process.env.VUE_APP_BASE_URI !== undefined
    ? process.env.VUE_APP_BASE_URI
    : "https://api.dev.onecoffee.qusol.com.au";

const BASE_URI_HTTPS =
  process.env.VUE_APP_BASE_URI_HTTPS !== undefined
    ? process.env.VUE_APP_BASE_URI_HTTPS
    : BASE_URI;

export default defineComponent({
  name: "SignInModal",
  components: { IonModal, IonButton, IonContent, IonIcon },
  methods: {
    async connectWithGoogle() {
      localStorage.setItem("provider", "google");
      window.location.href = BASE_URI + "/auth/google";
    },
    async connectWithFacebook() {
      localStorage.setItem("provider", "facebook");
      window.location.href = BASE_URI_HTTPS + "/auth/facebook";
    },
  },
});
</script>
<style scoped>
.si-modal {
  margin-top: 30px;
}
.welcome-span {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;
  text-align: center;
  color: #828282;
  margin-top: 10%;
}
.welcome-or {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 135%;
  text-align: center;
  color: #828282;
  margin-top: 10%;
}
.welcome-btn {
  font-weight: 600;
  font-size: 16px;
  font-family: "Gilroy";
  line-height: 19px;
  text-align: center;
  padding-left: 7%;
  padding-right: 7%;
  margin-top: 5%;
  margin-bottom: 5%;
  --border-radius: 4px;
  text-transform: none;
  letter-spacing: 1px;
  height: 45px;
}
.continue-google-btn {
  --border-color: #e1e1e1;
  --border-radius: 4px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #1b1b1b;
  padding-left: 7%;
  padding-right: 7%;
  margin-top: 5%;
  margin-bottom: 5%;
  text-transform: none;
  letter-spacing: 1px;
  height: 45px;
}
.continue-fb-btn {
  --border-radius: 4px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  padding-left: 7%;
  padding-right: 7%;
  margin-bottom: 5%;
  text-transform: none;
  letter-spacing: 1px;
  height: 45px;
}
ion-icon {
  font-size: 20px;
  padding-right: 10px;
}
</style>

<template>
  <ion-page>
    <ion-content>
      <div class="container-login">
        <router-link to="/welcome" replace>
          <ion-icon class="back-icon" src="assets/icon/arrow-left.svg" />
        </router-link>
        <h1 class="h1-userlogin">Cafe Sign in</h1>
        <ion-label class="label-userlogin">Email</ion-label>
        <ion-input
          class="input-userlogin"
          placeholder="Enter your email"
          type="email"
        />

        <ion-label class="label-userlogin">Password</ion-label>
        <ion-row>
          <ion-input
            v-if="showPassword"
            type="text"
            class="input-userlogin"
            placeholder="Enter your password"
            v-model="password"
          />
          <ion-input
            v-else
            type="password"
            class="input-userlogin"
            placeholder="Enter your password"
            v-model="password"
          />
          <button class="btn-eye">
            <i
              class="fa pc-none"
              @click="toggleShow"
              :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"
            ></i>
          </button>
        </ion-row>

        <router-link to="/complete-profile" replace>
          <ion-button expand="block" color="primary" class="btn-userlogin"
            >Continue</ion-button
          >
        </router-link>

        <div>
          <router-link to="/forgotpassword" replace
            ><span class="span-userlogin" align="center"
              >Reset your password</span
            ></router-link
          >
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import { defineComponent } from "vue";
import {
  IonContent,
  IonPage,
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonIcon,
  IonRow,
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonItem,
    IonInput,
    IonButton,
    IonLabel,
    IonIcon,
    IonRow,
  },
  data() {
    return {
      showPassword: false,
      password: null,
    };
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
});
</script>
<style scoped>
.btn-eye {
  height: 41px;
  font-size: 14px;
  background-color: #ffffff;
  border-bottom: #ebebeb 2px solid;
}
.container-login {
  padding: 10%;
}
.h1-userlogin {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  color: #1b1b1b;
  margin-top: 10%;
  margin-bottom: 18%;
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
.has-focus {
  border-bottom: #ffc34d 2px solid;
}
.has-error {
  border-bottom: #f04a3f 2px solid;
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
  height: 50px;
}
.span-userlogin {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: #c4c4c4;
  letter-spacing: 1px;
  position: absolute;
  bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}
.back-icon {
  height: 20px;
  width: 20px;
}
</style>

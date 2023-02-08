<template>
  <ion-page>
    <ion-content>
      <div class="container-login">
        <router-link to="/userlogin" replace>
          <ion-icon class="back-icon" src="assets/icon/arrow-left.svg" />
        </router-link>
        <h1 class="h1-userlogin">Forgot Password</h1>
        <span class="span-login">
          Enter your email and we'll send you instructions how to reset your
          password
        </span>
        <ion-label class="label-userlogin">Email</ion-label>
        <ion-input
          class="input-userlogin"
          placeholder="Enter your email"
          type="email"
          v-model="email"
        />
        <span class="input-error-msg" v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
        </span>
        <ion-button
          expand="block"
          color="primary"
          class="btn-userlogin"
          @click="forgotPassword"
          :disabled="isFetching"
        >
          Continue
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import { defineComponent } from "vue";
import axios from "axios";
import {
  IonContent,
  IonPage,
  IonIcon,
  IonLabel,
  IonInput,
  IonButton,
  IonAlert,
  alertController,
} from "@ionic/vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

const BASE_URI =
  process.env.VUE_APP_BASE_URI !== undefined
    ? process.env.VUE_APP_BASE_URI
    : "https://api.dev.onecoffee.qusol.com.au";

export default defineComponent({
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    IonContent,
    IonPage,
    IonIcon,
    IonLabel,
    IonInput,
    IonButton,
    IonAlert,
  },
  data() {
    return {
      email: "",
      promptMessage: "",
      isFetching: false,
    };
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage("This field is required", required),
        email,
      },
    };
  },
  methods: {
    async forgotPassword() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let resetData = {
          email: this.email,
        };

        let axiosConfig = {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        };

        this.isFetching = true;
        await axios
          .post(BASE_URI + "/auth/forgotPassword", resetData, axiosConfig)
          .then((res) => {
            if (res.data.status === 200) {
              this.$router.push("/passwordresetsent");
            } else {
              this.isFetching = false;
              this.promptMessage = res.data.error;
              this.presentAlert();
            }
          })
          .catch((err) => {
            this.isFetching = false;
            this.promptMessage =
              err && err.response && err.response.data
                ? err.response.data.error
                : "";
            this.presentAlert();
            return err;
          });
      } else {
        this.promptMessage = "Please check if your entries are correct.";
        this.presentAlert();
      }
    },
    async presentAlert() {
      const alert = await alertController.create({
        message: this.promptMessage,
      });

      await alert.present();
      await alert.onDidDismiss();
    },
  },
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
  height: 45px;
}
.back-icon {
  height: 20px;
  width: 20px;
}
.input-error-msg {
  font-family: "Gilroy";
  font-style: normal;
  font-size: 12px;
  color: #f04a3f;
  display: block;
  margin-bottom: 3%;
}
</style>

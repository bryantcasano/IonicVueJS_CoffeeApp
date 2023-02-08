<template>
  <ion-page>
    <ion-content>
      <div class="container-login">
        <router-link to="/userlogin" replace>
          <ion-icon class="back-icon" src="assets/icon/arrow-left.svg" />
        </router-link>
        <h1 class="h1-userlogin">Enter new password</h1>
        <span class="span-login">Set a new password</span>
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
        <span class="input-error-msg" v-if="v$.password.$error">
          {{ v$.password.$errors[0].$message }}
        </span>

        <ion-label class="label-userlogin">Confirm Password</ion-label>
        <ion-row>
          <ion-input
            v-if="showPassword"
            type="text"
            class="input-userlogin"
            placeholder="Confirm your password"
            v-model="confirmPassword"
          />
          <ion-input
            v-else
            type="password"
            class="input-userlogin"
            placeholder="Confirm your password"
            v-model="confirmPassword"
          />
          <button class="btn-eye">
            <i
              class="fa pc-none"
              @click="toggleShow"
              :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"
            ></i>
          </button>
        </ion-row>
        <span class="input-error-msg" v-if="v$.confirmPassword.$error">
          {{ v$.confirmPassword.$errors[0].$message }}
        </span>
        <ion-button
          expand="block"
          color="primary"
          class="btn-userlogin"
          @click="resetPassword"
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
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonIcon,
  IonRow,
  IonAlert,
  alertController,
} from "@ionic/vue";
import { useVuelidate } from "@vuelidate/core";
import { required, sameAs, minLength, helpers } from "@vuelidate/validators";

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
    IonItem,
    IonInput,
    IonButton,
    IonLabel,
    IonIcon,
    IonRow,
    IonAlert,
  },
  data() {
    return {
      showPassword: false,
      password: "",
      confirmPassword: "",
      resetToken: "",
      promptMessage: "",
    };
  },
  validations() {
    return {
      password: {
        required: helpers.withMessage(
          "Please enter your new password",
          required
        ),
        minLength: minLength(8),
      },
      confirmPassword: { sameAsPassword: sameAs(this.password) },
    };
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    async resetPassword() {
      this.v$.$validate();

      if (!this.v$.$error) {
        let resetData = {
          resetToken: this.resetToken,
          newPassword: this.password,
        };

        let axiosConfig = {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        };

        if (this.password === this.confirmPassword) {
          await axios
            .post(BASE_URI + "/auth/resetPassword", resetData, axiosConfig)
            .then((res) => {
              if (res.data.status === 201) {
                this.$router.push("/resetpassword-success");
              }
            })
            .catch((err) => {
              this.promptMessage =
                err && err.response && err.response.data
                  ? err.response.data.error
                  : "";
              this.presentAlert();
              return err;
            });
        } else {
          this.promptMessage =
            "Confirm password doesn't matched the typed password.";
          this.presentAlert();
        }
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
  async created() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.resetToken = urlParams.get("resetToken") || "";

    if (!this.resetToken) {
      this.$router.replace("/userlogin");
    }
  },
});
</script>
<style scoped>
.container-login {
  padding: 10%;
}
.btn-eye {
  height: 42px;
  font-size: 14px;
  background-color: #ffffff;
  border-bottom: #ebebeb 2px solid;
}
.h1-userlogin {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  color: #1b1b1b;
  margin-top: 10%;
  margin-bottom: 3%;
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
.input-error-msg {
  font-family: "Gilroy";
  font-style: normal;
  font-size: 12px;
  color: #f04a3f;
  display: block;
  margin-bottom: 3%;
}
</style>

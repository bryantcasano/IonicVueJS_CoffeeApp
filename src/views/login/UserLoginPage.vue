<template>
  <ion-page>
    <ion-content>
      <div class="container-login">
        <router-link to="/welcome" replace>
          <ion-icon class="back-icon" src="assets/icon/arrow-left.svg" />
        </router-link>
        <h1 class="h1-userlogin">Sign in</h1>
        <ion-label class="label-userlogin">Email</ion-label>
        <ion-input
          class="input-userlogin"
          placeholder="Enter your email"
          type="email"
          v-model="email"
          required
        />
        <span class="input-error-msg" v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
        </span>

        <ion-label class="label-userlogin">Password</ion-label>
        <ion-row>
          <ion-input
            v-if="showPassword"
            type="text"
            class="input-userlogin"
            placeholder="Enter your password"
            v-model="password"
            required
          />
          <ion-input
            v-else
            type="password"
            class="input-userlogin"
            placeholder="Enter your password"
            v-model="password"
            required
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

        <ion-button
          expand="block"
          color="primary"
          class="btn-userlogin"
          @click="login"
          :disabled="isFetching"
        >
          Login
        </ion-button>
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
import { required, email, minLength, helpers } from "@vuelidate/validators";

const BASE_URI =
  process.env.VUE_APP_BASE_URI !== undefined
    ? process.env.VUE_APP_BASE_URI
    : "";

const BASE_URI_HTTPS =
  process.env.VUE_APP_BASE_URI_HTTPS !== undefined
    ? process.env.VUE_APP_BASE_URI_HTTPS
    : BASE_URI;

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
      email: "",
      password: "",
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
      password: {
        required: helpers.withMessage("This field is required", required),
        minLength: minLength(8),
      },
    };
  },
  methods: {
    async login() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let loginData = {
          email: this.email,
          password: this.password,
        };

        let axiosConfig = {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        };

        this.isFetching = true;
        await axios
          .post(BASE_URI + "/auth/login", loginData, axiosConfig)
          .then((res) => {
            if (res.data.status === 200) {
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("id", res.data.data.id);
              localStorage.setItem("name", res.data.data.name);
              localStorage.setItem("email", res.data.data.email);
              localStorage.setItem("mobile", res.data.data.mobile);
              localStorage.setItem("provider", res.data.data.provider);
              localStorage.setItem("isVerified", res.data.data.isVerified);

              if (res.data.data.isVerified == true) {
                this.$router.replace("/home");
              } else {
                this.$router.push("/complete-profile");
              }

              this.isFetching = false;
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
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    async presentAlert() {
      const alert = await alertController.create({
        message: this.promptMessage,
      });

      await alert.present();
      await alert.onDidDismiss();
    },
    async connectWithGoogle() {
      localStorage.setItem("provider", "google");
      window.location.href = BASE_URI + "/auth/google";
    },
    async connectWithFacebook() {
      localStorage.setItem("provider", "facebook");
      window.location.href = BASE_URI_HTTPS + "/auth/facebook";
    },
  },
  async created() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get("err") === "409") {
      this.promptMessage = "Problem encountered while accessing this account.";
      this.presentAlert();
    }
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
.welcome-or {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 135%;
  text-align: center;
  color: #828282;
  margin-top: 5%;
  display: block;
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
  margin-bottom: 5%;
  text-transform: none;
  letter-spacing: 1px;
  height: 45px;
}
</style>

<template>
  <ion-page>
    <ion-content>
      <div class="container-login">
        <router-link to="/complete-profile" replace>
          <ion-icon class="back-icon" src="assets/icon/arrow-left.svg" />
        </router-link>
        <h1 class="h1-verify">Verify your account.</h1>
        <span class="span-login"
          >Enter the received OTP to confirm your registration.</span
        >
        <span class="span-login2">
          We sent you a verification code to your registered email address and
          phone number {{ maskedMobile }}
        </span>
        <ion-grid>
          <div id="otp-verify">
            <ion-row>
              <input
                type="number"
                pattern="[0-9]*"
                maxlength="1"
                class="otp-input"
                v-model="val1"
                @input="next"
              />
              <input
                type="number"
                pattern="[0-9]*"
                maxlength="1"
                class="otp-input"
                v-model="val2"
                @input="next"
              />
              <input
                type="number"
                pattern="[0-9]*"
                maxlength="1"
                class="otp-input"
                v-model="val3"
                @input="next"
              />
              <input
                type="number"
                pattern="[0-9]*"
                maxlength="1"
                class="otp-input"
                v-model="val4"
                @input="next"
              />
              <input
                type="number"
                pattern="[0-9]*"
                maxlength="1"
                class="otp-input"
                v-model="val5"
                @input="next"
              />
              <input
                type="number"
                pattern="[0-9]*"
                maxlength="1"
                class="otp-input"
                v-model="val6"
                @input="next"
              />
            </ion-row>
          </div>
        </ion-grid>
        <ion-button
          expand="block"
          color="primary"
          class="btn-userlogin"
          @click="verifyPhone"
          :disabled="isFetching"
        >
          Continue
        </ion-button>
        <div>
          <a @click.stop="resendOTP(numberOfOTPSent)" :disabled="isFetching">
            <span class="span-resend" align="center">Resend code</span>
          </a>
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
  IonIcon,
  IonCol,
  IonGrid,
  IonRow,
  IonButton,
  IonAlert,
  alertController,
} from "@ionic/vue";

const BASE_URI =
  process.env.VUE_APP_BASE_URI !== undefined
    ? process.env.VUE_APP_BASE_URI
    : "https://api.dev.onecoffee.qusol.com.au";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonIcon,
    IonCol,
    IonGrid,
    IonRow,
    IonButton,
    IonAlert,
  },
  name: "otp-verify",
  data() {
    return {
      uid: "",
      mobile: "",
      maskedMobile: "",
      val1: null,
      val2: null,
      val3: null,
      val4: null,
      val5: null,
      val6: null,
      numberOfOTPSent: 0,
      promptMessage: "",
      isFetching: false,
    };
  },
  methods: {
    next(e) {
      if (e.target?.nextSibling) {
        e.target.nextSibling.focus();
      }
    },
    resendOTP(val) {
      if (val < 1) {
        this.sendOTP();
      } else {
        this.isFetching = true;
        this.promptMessage =
          "You've exceeded the maximum number of OTP requests. Try again later.";
        this.presentAlert();
        return;
      }
    },
    async sendOTP() {
      let paramsData = {
        uid: this.uid,
        mobile: this.mobile,
      };

      let axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      };

      this.isFetching = true;
      if (this.numberOfOTPSent < 1) {
        await axios
          .post(BASE_URI + "/auth/sendOTP", paramsData, axiosConfig)
          .then((res) => {
            if (res.data.status === 200) {
              this.isFetching = false;
              this.numberOfOTPSent++;
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
        this.promptMessage =
          "You've exceeded the maximum number of OTP requests. Try again later.";
        this.presentAlert();
        return;
        // put timer here
      }
    },
    async verifyPhone() {
      this.statusError = "";
      let otpToken = [
        this.val1,
        this.val2,
        this.val3,
        this.val4,
        this.val5,
        this.val6,
      ].join("");
      let paramsData = {
        token: otpToken,
      };

      let axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      };

      this.isFetching = true;
      await axios
        .post(BASE_URI + "/auth/verifyPhone", paramsData, axiosConfig)
        .then((res) => {
          if (res.data.status === 200) {
            this.isFetching = false;
            this.promptMessage =
              "Your profile is successfully verified. You may now continue logging in to your account.";
            this.presentAlert();

            setTimeout(async () => {
              localStorage.clear();
              this.$router.replace("/userlogin");
              this.presentAlert();
            }, 1000);
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
    },
    resetStatusError() {
      this.statusError = "";
    },
    async login() {
      let loginData = {
        provider: localStorage.getItem("provider"),
        providerUserId: localStorage.getItem("id"),
      };

      let axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      };

      await axios
        .post(BASE_URI + "/auth/login", loginData, axiosConfig)
        .then((res) => {
          if (res.data.status === 200) {
            if (
              localStorage.getItem("token") !== null ||
              localStorage.getItem("token") !== undefined
            )
              localStorage.setItem("token", res.data.token);

            if (
              localStorage.getItem("id") !== null ||
              localStorage.getItem("id") !== undefined
            )
              localStorage.setItem("id", res.data.data.id);

            if (
              localStorage.getItem("name") !== null ||
              localStorage.getItem("name") !== undefined
            )
              localStorage.setItem("name", res.data.data.name);

            if (
              localStorage.getItem("email") !== null ||
              localStorage.getItem("email") !== undefined
            )
              localStorage.setItem("email", res.data.data.email);

            if (
              localStorage.getItem("token") !== null ||
              localStorage.getItem("token") !== undefined
            )
              localStorage.setItem("mobile", res.data.data.mobile);

            if (res.data.data.isVerified === true) {
              this.$router.push("/home");
            } else {
              this.$router.push("/complete-profile");
            }
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
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("userId");
    this.uid =
      localStorage.getItem("id") !== undefined
        ? localStorage.getItem("id")
        : userId;
    this.mobile = localStorage.getItem("mobile");
    this.maskedMobile = this.mobile.replace(this.mobile.substr(4, 6), "******");
    await this.sendOTP();
  },
});
</script>
<style scoped>
.span-login {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;
  color: #666666;
  display: block;
  margin-bottom: 15%;
}
.span-login2 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;
  color: #666666;
  display: block;
  margin-bottom: 10%;
}
.otp-input {
  background-color: #ffffff;
  border-bottom: #ebebeb 2px solid;
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 24px;
  margin: 5px;
  border-top: none;
  border-left: none;
  border-right: none;
  color: #1b1b1b;
}
.otp-input:focus {
  border-bottom: #ffc34d 2px solid;
  outline: none !important;
}
.container-login {
  padding: 10%;
}
.h1-verify {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  color: #1b1b1b;
  margin-top: 10%;
  margin-bottom: 2%;
}
.has-error {
  border-bottom: #f04a3f 2px solid;
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
.span-resend {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  text-align: center;
  color: #ff8000;
  letter-spacing: 1px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}
</style>

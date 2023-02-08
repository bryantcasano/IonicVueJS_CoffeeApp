<template>
  <ion-page>
    <ion-content>
      <div class="container-login">
        <router-link to="/userlogin" replace>
          <ion-icon class="back-icon" src="assets/icon/arrow-left.svg" />
        </router-link>
        <h1 class="h1-userlogin">Complete your profile.</h1>
        <ion-label class="label-userlogin">Name</ion-label>
        <ion-input
          class="input-userlogin"
          placeholder="Enter your Name"
          type="text"
          v-model="fullName"
        />
        <span class="input-error-msg" v-if="v$.fullName.$error">
          {{ v$.fullName.$errors[0].$message }}
        </span>
        <ion-label class="label-userlogin">Mobile Number</ion-label>
        <ion-row>
          <ion-col size="4">
            <ion-select class="span-login-select" v-model="prefix">
              <ion-select-option value="+61">+61</ion-select-option>
              <ion-select-option value="+62">+62</ion-select-option>
              <ion-select-option value="+60">+60</ion-select-option>
              <ion-select-option value="+63">+63</ion-select-option>
            </ion-select>
          </ion-col>
          <ion-col size="8">
            <ion-input
              class="input-userlogin"
              placeholder="Enter your Mobile Number"
              type="text"
              v-model="mobile"
            />
          </ion-col>
        </ion-row>
        <ion-col size="12">
          <span class="input-error-msg" v-if="v$.mobile.$error">
            {{ v$.mobile.$errors[0].$message }}
          </span>
        </ion-col>
        <ion-button
          expand="block"
          color="primary"
          class="btn-userlogin"
          @click="submitCompleteProfile"
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
  IonInput,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonAlert,
  alertController,
} from "@ionic/vue";
import { useVuelidate } from "@vuelidate/core";
import { required, numeric, helpers } from "@vuelidate/validators";

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
    IonInput,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonAlert,
  },
  data() {
    return {
      fullName: "",
      prefix: "+61",
      mobile: "",
      promptMessage: "",
      isFetching: false,
    };
  },
  validations() {
    return {
      fullName: {
        required: helpers.withMessage("Name cannot be empty", required),
      },
      mobile: {
        required: helpers.withMessage(
          "Please enter your mobile number",
          required
        ),
        numeric,
      },
    };
  },
  methods: {
    async submitCompleteProfile() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let paramsData = {
          id: this.userId,
          name: this.fullName,
          mobile: this.prefix + "" + this.mobile,
        };

        let axiosConfig = {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        };

        this.isFetching = true;
        await axios
          .post(BASE_URI + "/auth/completeProfile", paramsData, axiosConfig)
          .then((res) => {
            if (res.data.status === 200) {
              localStorage.setItem("id", this.userId);
              localStorage.setItem("name", this.fullName);
              localStorage.setItem("mobile", this.prefix + "" + this.mobile);
              this.isFetching = false;
              window.location.href = "/verify-phone";
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
  async created() {
    // future plans: await get-user-by-id api
    if (localStorage.getItem("id") == null) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      this.userId = urlParams.get("userId");
      this.prefix = "+61";
    } else {
      this.userId = localStorage.getItem("id");
      this.fullName = localStorage.getItem("name");
      this.mobile = localStorage.getItem("mobile").substr(3);
      this.prefix = localStorage.getItem("mobile").substr(0, 3);
    }
  },
});
</script>
<style scoped>
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
.back-icon {
  height: 20px;
  width: 20px;
}
.input-userlogin-select {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  width: 100%;
  color: #828282;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: #ebebeb 2px solid;
  margin-top: 3%;
  margin-bottom: 5%;
  padding-bottom: 6%;
  display: block;
}
.input-userlogin-select:focus {
  border-bottom: #0057ff 2px solid;
  outline: none !important;
}
.span-login-select {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;
  color: #666666;
  margin-bottom: 0%;
  margin-left: 5%;
  border-bottom: #ebebeb 2px solid;
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

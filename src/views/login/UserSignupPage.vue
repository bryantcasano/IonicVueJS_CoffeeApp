<template>
  <ion-page>
    <ion-content>
      <div class="container-login">
        <router-link to="/welcome" replace>
          <ion-icon class="back-icon" src="assets/icon/arrow-left.svg" />
        </router-link>
        <h1 class="h1-userlogin">User Sign up</h1>
        <p
          v-if="v$.$error"
          class="label-userlogin ion-no-margin ion-margin-bottom input-error-msg"
        >
          Please correct the fields below.
        </p>

        <input
          v-model="fullName"
          class="input-userlogin"
          placeholder="Full Name"
          @blur="v$.fullName.$touch"
        />
        <span class="input-error-msg" v-if="v$.fullName.$error">
          {{ v$.fullName.$errors[0].$message }}
        </span>

        <input
          v-model="email"
          class="input-userlogin"
          placeholder="Email"
          @blur="v$.email.$touch"
        />
        <span class="input-error-msg" v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
        </span>

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
            <input
              v-model="mobile"
              class="input-userlogin-select"
              placeholder="Mobile"
              type="number"
              @blur="v$.mobile.$touch"
          /></ion-col>
          <ion-col size="12">
            <span class="input-error-msg" v-if="v$.mobile.$error">
              {{ v$.mobile.$errors[0].$message }}
            </span>
          </ion-col>
        </ion-row>

        <input
          v-model="password"
          class="input-userlogin"
          type="password"
          placeholder="Enter desired password"
          @blur="v$.password.$touch"
        />
        <span class="input-error-msg" v-if="v$.password.$error">
          {{ v$.password.$errors[0].$message }}
        </span>

        <input
          v-model="confirmPassword"
          class="input-userlogin"
          type="password"
          placeholder="Confirm password"
          @blur="v$.confirmPassword.$touch"
        />
        <span class="input-error-msg" v-if="v$.confirmPassword.$error">
          {{ v$.confirmPassword.$errors[0].$message }}
        </span>

        <div align="center" class="text-privacypolicy">
          <input
            type="checkbox"
            onchange="document.getElementById('acceptTerms').disabled = !this.checked;"
            class="checkbox-privacypolicy"
          />
          <span class="span-login">
            I have read the
            <router-link to="/privacypolicy" replace>
              privacy policy.
            </router-link>
          </span>
        </div>
        <ion-input
          type="submit"
          name="acceptTerms"
          class="btn-userlogin"
          id="acceptTerms"
          expand="block"
          color="primary"
          value=" Sign Up "
          @click="register"
          disabled
        />
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import { defineComponent } from "vue";
import axios from "axios";
import {
  IonAlert,
  IonContent,
  IonPage,
  IonFooter,
  IonItem,
  IonText,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonLabel,
  alertController,
} from "@ionic/vue";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  numeric,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";

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
    IonFooter,
    IonItem,
    IonText,
    IonIcon,
    IonSelect,
    IonSelectOption,
    IonLabel,
    IonAlert,
  },
  data() {
    return {
      fullName: "",
      email: "",
      prefix: "+61",
      mobile: "",
      password: "",
      confirmPassword: "",
      promptMessage: "",
    };
  },
  validations() {
    return {
      fullName: {
        required: helpers.withMessage("Name cannot be empty", required),
      },
      email: {
        required: helpers.withMessage("Email cannot be empty", required),
        email,
      },
      mobile: {
        required: helpers.withMessage(
          "Please enter your mobile number",
          required
        ),
        numeric,
      },
      password: {
        required: helpers.withMessage(
          "Please enter your desired password",
          required
        ),
        minLength: minLength(8),
      },
      confirmPassword: { sameAsPassword: sameAs(this.password) },
    };
  },
  methods: {
    async register() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let registerData = {
          name: this.fullName,
          email: this.email,
          mobile: this.prefix + this.mobile,
          password: this.password,
        };

        let axiosConfig = {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        };

        if (this.password === this.confirmPassword) {
          await axios
            .post(BASE_URI + "/auth/register", registerData, axiosConfig)
            .then((res) => {
              if (res.data.status === 201) {
                this.$router.push("/signup-success");
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
  margin-bottom: 10%;
  margin-left: 5%;
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
.span-login a {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  color: #666666;
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
  width: 100%;
  color: #828282;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: #ebebeb 2px solid;
  margin-top: 3%;
  margin-bottom: 5%;
  padding-bottom: 3%;
  display: block;
}
.input-userlogin:focus {
  border-bottom: #ffc34d 2px solid;
  outline: none !important;
}
.input-userlogin-select:focus {
  border-bottom: #ffc34d 2px solid;
  outline: none !important;
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
.text-privacypolicy {
  margin-top: 10%;
}
.input-error-msg {
  font-family: "Gilroy";
  font-style: normal;
  font-size: 12px;
  color: #f04a3f;
  display: block;
  margin-bottom: 3%;
}
input[type="checkbox"] {
  accent-color: #ff8000;
  background-color: #ffffff;
}
</style>

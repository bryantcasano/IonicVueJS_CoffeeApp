<template>
  <ion-page>
    <!--content start -->
    <ion-content>
      <div class="welcome">
        <img src="assets/images/welcome.png" />
      </div>

      <div align="center">
        <SignInModal name="SignInModal" />
        <span class="welcome-txt"
          >Already have an account?
          <router-link to="/userlogin" replace>Sign in</router-link>
        </span>
      </div>
    </ion-content>
    <!-- content end -->
  </ion-page>
</template>

<style scoped>
.welcome img {
  margin-top: 10%;
  margin-bottom: 15%;
  margin-left: auto;
  margin-right: auto;
  pointer-events: none;
  width: auto;
  height: 525px;
  display: block;
}
.welcome-txt {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #666666;
}
.welcome-txt a {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #666666;
}
ion-modal {
  --border-radius: 8px !important;
  box-shadow: 0px -12px 20px rgba(0, 0, 0, 0.08);
}
</style>
<script>
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import SignInModal from "@/components/SignInModal.vue";

export default defineComponent({
  name: "WelcomePage",
  components: { SignInModal, IonPage, IonContent },
});
</script>

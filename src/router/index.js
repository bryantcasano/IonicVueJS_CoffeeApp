import { createRouter, createWebHistory } from "@ionic/vue-router";
import { alertController } from "@ionic/vue";
import axios from "axios";

import HomeLayout from "../views/HomeLayout.vue";
import GetStartedPage from "../views/GetStartedPage.vue";
import WelcomePage from "../views/login/WelcomePage.vue";
import UserLoginPage from "../views/login/UserLoginPage.vue";
import CafeLoginPage from "../views/login/CafeLoginPage.vue";
import ForgotPasswordPage from "../views/login/ForgotPasswordPage.vue";
import PasswordResetSentPage from "../views/login/PasswordResetSentPage.vue";
import ResetPasswordPage from "../views/login/ResetPasswordPage.vue";
import ResetPasswordSuccessPage from "../views/login/ResetPasswordSuccessPage.vue";
import UserSignupPage from "../views/login/UserSignupPage.vue";
import PrivacyPolicyPage from "../views/login/PrivacyPolicyPage.vue";
import SignupSuccessPage from "../views/login/SignupSuccessPage.vue";
import CompleteProfilePage from "../views/login/CompleteProfilePage.vue";
import VerifyPhonePage from "../views/login/VerifyPhonePage.vue";
import CafeMenu from "../views/order/CafeMenu.vue";
import CartPage from "../views/order/CartPage.vue";
import CheckoutPage from "../views/order/CheckoutPage.vue";
import OrderStatusPage from "../views/order/OrderStatusPage.vue";
import MapPage from "../views/order/MapPage.vue";
import OrderTrackingPage from "../views/order/OrderTrackingPage.vue";
import OrderReceivedPage from "../views/order/OrderReceivedPage.vue";
import OrderRatePage from "../views/order/OrderRatePage.vue";
import ProfilePage from "../views/sidemenu/ProfilePage.vue";
import PaymentManagementPage from "../views/sidemenu/PaymentManagementPage.vue";
import AddCardPage from "../views/sidemenu/AddCardPage.vue";
import WalletConnectPage from "../views/sidemenu/WalletConnectPage.vue";
import OrderHistoryPage from "../views/sidemenu/OrderHistoryPage.vue";
import OrderDetailsPage from "../views/sidemenu/OrderDetailsPage.vue";
import FavoritesPage from "../views/filters/FavoritesPage.vue";
import SearchPage from "../views/filters/SearchPage.vue";
import CategorySearchPage from "../views/filters/CategorySearchPage.vue";
import CategoryGridPage from "../views/filters/CategoryGridPage.vue";

const BASE_URI =
  process.env.VUE_APP_BASE_URI !== undefined
    ? process.env.VUE_APP_BASE_URI
    : "https://api.dev.onecoffee.qusol.com.au";

const routes = [
  {
    path: "/home",
    name: "HomeLayout",
    component: HomeLayout,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/getstarted",
    name: "GetStartedPage",
    component: GetStartedPage,
  },
  {
    path: "/welcome",
    name: "WelcomePage",
    component: WelcomePage,
  },
  {
    path: "/userlogin",
    name: "UserLoginPage",
    component: UserLoginPage,
  },
  {
    path: "/cafelogin",
    name: "CafeLoginPage",
    component: CafeLoginPage,
  },
  {
    path: "/forgotpassword",
    name: "ForgotPasswordPage",
    component: ForgotPasswordPage,
  },
  {
    path: "/passwordresetsent",
    name: "PasswordResetSentPage",
    component: PasswordResetSentPage,
  },
  {
    path: "/resetpassword",
    name: "ResetPasswordPage",
    component: ResetPasswordPage,
  },
  {
    path: "/resetpassword-success",
    name: "ResetPasswordSuccessPage",
    component: ResetPasswordSuccessPage,
  },
  {
    path: "/usersignup",
    name: "UserSignupPage",
    component: UserSignupPage,
  },
  {
    path: "/privacypolicy",
    name: "PrivacyPolicyPage",
    component: PrivacyPolicyPage,
  },
  {
    path: "/signup-success",
    name: "SignupSuccessPage",
    component: SignupSuccessPage,
  },
  {
    path: "/complete-profile",
    name: "CompleteProfilePage",
    component: CompleteProfilePage,
  },
  {
    path: "/verify-phone",
    name: "VerifyPhonePage",
    component: VerifyPhonePage,
  },
  {
    path: "/cafemenu",
    name: "CafeMenu",
    component: CafeMenu,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/cart",
    name: "CartPage",
    component: CartPage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/checkout",
    name: "CheckoutPage",
    component: CheckoutPage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/orderstatus",
    name: "OrderStatusPage",
    component: OrderStatusPage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/map",
    name: "MapPage",
    component: MapPage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/tracking",
    name: "OrderTrackingPage",
    component: OrderTrackingPage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/received",
    name: "OrderReceivedPage",
    component: OrderReceivedPage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/rate",
    name: "OrderRatePage",
    component: OrderRatePage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/payment-management",
    name: "PaymentManagementPage",
    component: PaymentManagementPage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/add-card",
    name: "AddCardPage",
    component: AddCardPage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/wallet-connect",
    name: "WalletConnectPage",
    component: WalletConnectPage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/order-history",
    name: "OrderHistoryPage",
    component: OrderHistoryPage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/order-details",
    name: "OrderDetailsPage",
    component: OrderDetailsPage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/favorites",
    name: "FavoritesPage",
    component: FavoritesPage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/search",
    name: "SearchPage",
    component: SearchPage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/category-search",
    name: "CategorySearchPage",
    component: CategorySearchPage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/category-grid",
    name: "CategoryGridPage",
    component: CategoryGridPage,
    meta: {
      authRequired: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const authRequired = to.meta.authRequired;
  const token =
    localStorage.getItem("token") !== null
      ? localStorage.getItem("token")
      : urlParams.get("token");
  const userId =
    localStorage.getItem("id") !== null
      ? localStorage.getItem("id")
      : urlParams.get("id");
  const isVerified = localStorage.getItem("isVerified");

  if (authRequired) {
    let userData = {
      userId: userId,
    };
    let axiosConfig = {
      headers: {
        Authorization: token,
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    await axios
      .post(BASE_URI + "/auth/openId/userInfo", userData, axiosConfig)
      .catch(() => {
        localStorage.clear();
        presentAlert();
        router.replace("/userlogin");
      });
  } else {
    if (token !== null && isVerified !== null) {
      if (isVerified === true) {
        localStorage.removeItem("isVerified");
        router.replace("/");
      }
    }
  }
});

const presentAlert = async () => {
  const alert = await alertController.create({
    subHeader: "You are not authorized to access this page.",
  });

  await alert.present();
};

export default router;
/* eslint-disable */ 
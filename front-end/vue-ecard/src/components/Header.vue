<template>
  <div class="header-container">
    <div class="header-row-container">
      <img class="logo-ambient" src="../assets/hand-with-card.svg">
      <router-link to="/">
        <img class="ecard-logo" alt="Vue logo" src="../assets/logo.svg">
      </router-link>
      <small class="subheadings font-condensed">{{ subheadings }}</small>
      <div @click="showLogoutConfirm" class="header-icons right clickable">
        <img class="account-icon" src="../assets/account.svg">
        <span v-if="username" class="account-text">{{ username }}</span>
      </div>
    </div>
    <hr class="header-divider"/>
  </div>
</template>

<script>
import MessageBox from "@/components/MessageBox.vue";
import { create } from "vue-modal-dialogs";
const messageBox = create(MessageBox, "title", "content");

export default {
  name: "Header",
  props: {
    subheadings: String
  },
  data() {
    return {
      username: undefined
    };
  },
  methods: {
    getUserInfo: function() {
      this.$http
        .get("userinfo")
        .then(response => response.json())
        .then(json => {
          this.username = json.data.username;
        });
    },
    async showLogoutConfirm() {
      if (await messageBox("Confirm", "是否确认登出？")) {
        this.$http
          .get("logout")
          .then(response => {
            return response.json();
          })
          .then(json => {
            console.log(json);
            this.$router.push("starter");
          });
      }
    }
  },
  mounted() {
    this.getUserInfo();
  }
};
</script>

<style scoped lang="scss">
.header-row-container {
  position: relative;
}

.ecard-logo {
  width: 170px;
  margin-right: 20px;
}

.logo-ambient {
  position: absolute;
  z-index: -1;
  opacity: 0.05;
  width: 700px;
  left: -360px;
  top: -100px;
}

.subheadings {
  font-size: 50px;
  font-weight: bold;
  opacity: 0.4;
}

hr.header-divider {
  border: none;
  height: 7px;
  width: 60px;
  background-color: #eee;
  display: inline-block;
  margin-top: 80px;
}

.header-icons {
  position: absolute;
  bottom: 0;
  right: 0;
}

.account-icon {
  width: 30px;
  margin-right: 5px;
  vertical-align: bottom;
}

.account-text {
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1px;
}

@media screen and (max-width: 980px) {
  .logo-ambient {
    width: 400px;
    left: -130px;
    top: -110px;
  }
}
</style>

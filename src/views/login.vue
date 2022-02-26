<template>
  <div class="login">
    <loading :isshow="showloading"></loading>
    <div class="login-content">
      <el-form ref="loginform" :model="loginform" :rules="rules">
        <el-form-item prop="username">
          <i class="el-icon-s-custom" style="font-size: 23px"></i>
          <el-input
            v-model="loginform.username"
            placeholder="请输入用户名"
            style="width: 180px; margin-left: 12px"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <i class="el-icon-s-goods" style="font-size: 24px"></i>
          <el-input
            v-model="loginform.password"
            placeholder="请输入密码"
            style="width: 180px; margin-left: 12px"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 45px; margin-top: -5px">
          <el-button type="success" @click.prevent="handlelogin"
            >登录</el-button
          >
          <el-button type="danger">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style scoped>
.login {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url("../assets/3.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
}
.login > .login-content {
  width: 230px;
  height: 160px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  background: rgba(0, 66, 44, 0.6);
  padding: 20px;
  opacity: 0.8;
}
</style>
<script>
import loading from "../components/loading/loading";
import { SUCCESS, URL } from "../lib/base";
import axios from "axios";
export default {
  name: "login",
  components: {
    loading,
  },
  data() {
    return {
      showloading: false,
      loginform: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 5,
            max: 10,
            message: "长度在 5 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          { min: 6, max: 8, message: "长度在 5 到 10 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handlelogin() {
      this.$refs.loginform.validate((validate) => {
        if (validate) {
          this.showloading = true;
          axios
            .post(URL + "/admin/login/check", this.loginform)
            .then((res) => {
              console.log(res);
              if (res.status === SUCCESS && res.data.code === SUCCESS) {
                this.showloading = false;
                sessionStorage.setItem("token", res.data.token);
                sessionStorage.setItem("user", res.data.user);
                let redirect = this.$route.query.redirect || "index";
                let name = this.loginform.username;
                this.$router.push({ name: redirect, query: { name } });
              } else {
                this.$message.success(res.data.msg);
                this.showloading = false;
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    },
  },
};
</script>
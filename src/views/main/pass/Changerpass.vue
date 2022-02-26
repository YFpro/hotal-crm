<template>
  <div>
    <el-form :model="passform" ref="passform" :rules="rules">
      <el-form-item label="原密码" prop="oldpass">
        <el-input
          type="text"
          v-model="passform.oldpass"
          placeholder="请输入原密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newpass">
        <el-input
          type="password"
          v-model="passform.newpass"
          placeholder="请输入新密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="再次输入密码" prop="newpassagin">
        <el-input
          type="password"
          v-model="passform.newpassagin"
          placeholder="请输入新密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handlepass">修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { SUCCESS, URL } from "../../../lib/base";
export default {
  name: "Changerpass",
  data() {
    return {
      passform: {
        oldpass: "",
        newpass: "",
        newpassagin: "",
      },
      rules: {
        oldpass: [
          { required: true, message: "请输入原密码", trigger: "blur" },
          {
            min: 5,
            max: 10,
            message: "长度在 5 到 10 个字符",
            trigger: "blur",
          },
        ],
        newpass: [
          { required: true, message: "请输入新密码", trigger: "change" },
          { min: 6, max: 8, message: "长度在 5 到 10 个字符", trigger: "blur" },
        ],
        newpassagin: [
          { required: true, message: "请再次输入密码", trigger: "change" },
          { min: 6, max: 8, message: "长度在 5 到 10 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handlepass() {
      this.$refs.passform.validate((validate) => {
        if (validate) {
          let url = URL + "/admin/login/updatepass";
          let token = sessionStorage.getItem("token");
          this.$http({
            method: "POST",
            url,
            data: this.passform,
            headers: {
              token,
            },
          }).then((res) => {
            if (res.status === 200 && res.data.code === SUCCESS) {
              this.$message.success(res.data.msg);
              sessionStorage.clear();
              this.$router.push("/login");
            } else {
              if (res.data.code === 404) {
                this.$message.success(res.data.msg);
              }
            }
          });
        }
      });
    },
  },
};
</script>

<style scoped>
</style>
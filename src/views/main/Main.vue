<template>
    <el-container class="main-fox">
        <el-header>
            <div class="logo">
                <img src="../../assets/9.png" alt="">
            </div>
            <h1 style="color:black;margin-left:150px;margin-top: 12px">欢迎来到后台管理系统</h1>
            <div class="nav">
                <el-menu mode="horizontal" background-color="darkcyan"
                         text-color="#fff"
                         active-text-color="red">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-s-custom"></i>
                            <span slot="title">用户信息</span>
                        </template>
                        <el-menu-item index="3-1" v-text="$route.query.name"></el-menu-item>
                        <el-menu-item index="3-2"><router-link to="changepass" style="color: white">修改密码</router-link></el-menu-item>
                        <el-menu-item index="3-3" @click="tuichu">退出登陆</el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px">
              <div class="left">
                  <el-menu
                          default-active="2"
                          class="el-menu-vertical-demo"
                          background-color="white"
                          text-color="black"
                          active-text-color="red">
                      <el-submenu index="4">
                          <template slot="title">
                              <i class="el-icon-s-operation"></i>
                              <span slot="title">分类管理</span>
                             </template>
                              <el-menu-item >
                                  <router-link to="/cateadd">分类添加</router-link>
                              </el-menu-item>
                          <el-menu-item >
                              <router-link to="/cateindex">分类查询</router-link>
                          </el-menu-item>
                      </el-submenu>
                      <el-menu-item index="5">
                          <i class="el-icon-menu"></i>
                          <router-link to="/stayhomeadd">民宿添加</router-link>
                      </el-menu-item>
                      <el-menu-item index="6">
                          <i class="el-icon-s-data"></i>
                          <router-link to="/stayhomeindex">民宿查询</router-link>
                      </el-menu-item>
                  </el-menu>
              </div>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
    export default {
        name: "Main",
        components: {
        },
        methods:{
            tuichu(){
                sessionStorage.clear();
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped>
    a{
        color: #333333;
    }
    .logo{
        margin-left: 60px;
    }
    .logo img{
        width: 70px;
        height:70px;
        margin-top:-6px;
    }
    .main-fox{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    .el-header{
        background-color: darkcyan;
        color: #333;
        display: flex;
        justify-content: space-between;

    }
.el-header .nav{
    width: 250px;
    height: 100%;
}
    .el-aside {
        background-color:white;
        color: #333;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
    }
</style>
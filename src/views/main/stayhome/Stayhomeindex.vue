<template>
    <div>
        <el-form :model="search" :inline="true">
            <el-form-item label="酒店名称">
                <el-input v-model="search.sname"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="searchhotal">查询</el-button>
            </el-form-item>
        </el-form>

        <el-table :data="stayhome">
            <el-table-column prop="sid" label="ID"></el-table-column>
            <el-table-column prop="sname" label="名称"></el-table-column>
            <el-table-column prop="sprice" label="价格"></el-table-column>
            <el-table-column label="位置">
                <template slot-scope="scope">
                    <span>{{scope.row.sprovince}}-{{scope.row.scity}}-{{scope.row.sarea}} </span>
                </template>
            </el-table-column>
            <el-table-column prop="ctime" label="时间">
                <template slot-scope="scope">
                    <span>{{scope.row.ctime|formateTime}} </span>
                </template>
            </el-table-column>
            <el-table-column  label="缩略图" prop="sthumb">
               <template slot-scope="scope">
                   <img :src="IMGURL+ scope.row.sthumb" alt="" style="width: 50px;height: 50px;">
               </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                <el-button  type="primary" circle>
                    <router-link :to="{name:'stayhomeedit',params: {id:scope.row.sid}}">编辑</router-link>
                </el-button>
                <el-button type="danger" circle @click="staydelete(scope.row.sid)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagin">
            <el-pagination
                    :current-page.sync="paginate.page"
                    :page-size.sync="paginate.limit"
                    layout="total,prev, pager, next, jumper"
                    :total="total"
                    @current-change="handleCurrentPage">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import instance from "../../../http/http";
    import {SUCCESS, IMGURL,URL} from "../../../lib/base";
    import {categoryIndex} from "../../../http/category"
    import axios from "axios";
    export default {
        name: "Stayhomeindex",
        data(){
            return {
                IMGURL,
                search:{sname:''},
                paginate: {limit:3,page:1},
                stayhome:[],
                total:0,
                categories:[],
            }
        },
        methods:{
            searchhotal(val){
                this.paginate.page=val;
                this.initStayhome();
            },
            initStayhome(){
                let params=Object.assign({},this.search,this.paginate)
                instance.get('api/stayhome',{params}).then(res=>{
                    if(res.code===SUCCESS) {
                        this.stayhome =res.data;
                        this.total = res.total;
                    }else{
                        this.$message.error(res.msg);
                    }
                })
            },
            handleCurrentPage(val){
                this.paginate.page=val;
                this.initStayhome();
            },
            initcategory(){
                categoryIndex().then(res=>{
                    this.categories=res.data;
                }).catch(()=>{

                })
            },
            staydelete(sid){
                let url = URL +'/admin/Stayedit/delete';
                let token=sessionStorage.getItem('token');
                axios({
                    url,
                    method:'GET',
                    params:{sid},
                    headers:{
                        token
                    }
                }).then(res=>{
                    if(res.status===200&&res.data.code===SUCCESS){
                        this.$message.success(res.data.msg);
                        this.$router.go(0);
                    }
                }).catch(()=>{
                    this.$message.error('删除失败');
                })
            },

        },
        filters:{

        },
        mounted() {
            this.initStayhome();
            this.initcategory();
        }
    }
</script>

<style scoped>
.pagin{
    margin-left: 400px;
}
</style>
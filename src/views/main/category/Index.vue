<template>
    <div>
        <el-form :inline="true">
            <el-form-item label="分类名称">
                <el-input   v-model="search.cname" placeholder="分类名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSearch">搜索</el-button>
                <el-button type="primary" @click="xxx">全部数据</el-button>
            </el-form-item>
        </el-form>
      <el-table :data="categories">
          <el-table-column prop="cid" label="ID">
          </el-table-column>
          <el-table-column prop="cname" label="分类名称">
          </el-table-column>
          <el-table-column prop="cdesc" label="分类描述">
          </el-table-column>
          <el-table-column  label="操作">
              <template slot-scope="scope">
                  <el-button type="primary"  @click="handleEdit(scope.row.cid)">编辑</el-button>
                  <el-button  type="primary"   @click="handledelete(scope.row.cid)">删除</el-button>
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
    import axios from 'axios';
    import {SUCCESS, URL} from "../../../lib/base";
    export default {
        name: "Index",
        data(){
            return{
                search:{cname:''},
                paginate:{
                    page:1,
                    limit:3
                },
                categories:[],
                total:0,
            }
        },
        methods:{
            initCategory(){
                let token =sessionStorage.getItem('token');
                let url=URL+'/admin/category/index';
                let params=Object.assign({},this.paginate,this.search);
                axios({
                    method:'GET',
                    url,
                    params,
                    headers:{
                        token
                    }
                }).then(res=>{
                   if(res.status && res.data.code ===SUCCESS){
                        if (res.data.data){
                            this.categories=res.data.data;
                            this.total = res.data.total;
                        }else {
                            this.$message.info(res.data.msg);
                            this.categories=[];
                        }
                    }
                }).catch(()=>{

                })
            },
            handleCurrentPage(val){
                this.paginate.page=val;
                this.initCategory();
            },
            handleSearch(){
                this.paginate.page=1
                this.initCategory();
            },
            xxx(){
                this.$router.go(0);
            },
            handleEdit(cid){
                this.$router.push({path:"/cateedit",query:{cid}});
            },
            handledelete(cid){
                let url = URL +'/admin/category/delete';
                let token=sessionStorage.getItem('token');
                axios({
                    url,
                    method:'GET',
                    params:{cid},
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
            }
        },
        mounted() {
            this.initCategory();
        }
    }
</script>

<style scoped>
.pagin{
    margin-left: 400px;
}
</style>
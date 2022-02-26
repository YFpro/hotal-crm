<template>
    <div>
        <el-form :model="category"  :rules="categoryRules" ref="categoryform">
            <el-form-item label="分类名称" prop="cname">
                <el-input type="text" v-model="category.cname" placeholder="请输入分类名称"></el-input>
            </el-form-item>
            <el-form-item label="分类描述" prop="cdesc">
                <el-input type="text" v-model="category.cdesc" placeholder="请输入分类描述"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import {SUCCESS, URL} from "../../../lib/base";
    import axios from 'axios';
    export default {
        name: "Add",
        data(){
            let validateCname=(rule,value,callback)=>{
                 if (value===''){
                      callback(new Error('分类名称不能为空'));
                 }else if (!(/[\u4e00-\u9fa5]{2,6}/.test(value))){
                     callback(new Error('分类名称只能为汉字'))

                 }else {
                     callback();
                 }
            }
            return{
                category:{
                    cname:'',
                    cdesc:''
                },
                categoryRules:{
                    cname:[
                        {validator:validateCname,trigger:'blur'}
                    ],
                    cdesc:[
                        { required: true, message: '请输入分类名称', trigger: 'blur' },
                        {validator:validateCname,trigger:'blur'}
                    ]
                }
            }
        },
        methods:{
            submitForm(){
                this.$refs.categoryform.validate(valid=>{
                       if(valid){
                           let url = URL +'/admin/category/add';
                           let token=sessionStorage.getItem('token');
                           axios({
                               url,
                               method:'POST',
                               data:this.category,
                               headers:{
                                   token
                               }
                           }).then(res=>{
                               if(res.status===200&&res.data.code===SUCCESS){
                                   this.$message.success(res.data.msg);
                               }
                           }).catch(()=>{
                               this.$message.error('分类添加失败');
                           })
                       }
                })
            }
        }
    }
</script>

<style scoped>

</style>
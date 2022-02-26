<template>
  <div>
    <div style="height: 600px; width: 1300px">
      <happy-scroll color="darkcyan" size="4" left style="margin-left: -19px">
        <div style="margin-left: 15px">
          <loading :isshow="showloading"></loading>
          <el-form :model="stayhomeform" ref="stayhomeform" v-if="stayhomeform">
            <el-form-item label="所属分类">
              <el-select v-model="stayhomeform.cid" placeholder="请选择">
                <el-option
                  v-for="item in categories"
                  :key="item.cid"
                  :label="item.cname"
                  :value="item.cid"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="酒店名称">
              <el-input v-model="stayhomeform.sname"></el-input>
            </el-form-item>
            <el-form-item label="酒店星级">
              <el-input v-model="stayhomeform.score"></el-input>
            </el-form-item>
            <el-form-item label="酒店价格">
              <el-input v-model="stayhomeform.sprice"></el-input>
            </el-form-item>
            <el-form-item label="请选择省份">
              <el-select
                v-model="stayhomeform.sprovince"
                placeholder="请选择省份"
                style="width: 1280px"
              >
                <el-option
                  v-for="(item, index) in province"
                  :value="item"
                  :key="index"
                  :label="item"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="请选择城市">
              <el-select
                v-model="stayhomeform.scity"
                placeholder="请选择城市"
                style="width: 1280px"
              >
                <el-option
                  v-for="(item, index) in cityList"
                  :value="item"
                  :key="index"
                  :label="item"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="酒店区域">
              <el-select
                v-model="stayhomeform.sarea"
                placeholder="请选择城市"
                style="width: 1280px"
              >
                <el-option
                  v-for="(item, index) in areaList"
                  :value="item"
                  :key="index"
                  :label="item"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="酒店地址">
              <el-input v-model="stayhomeform.saddress"></el-input>
            </el-form-item>
            <el-form-item label="类型">
              <el-input v-model="stayhomeform.types"></el-input>
            </el-form-item>
            <el-form-item label="酒店大小">
              <el-input v-model="stayhomeform.size"></el-input>
            </el-form-item>
            <el-form-item label="酒店楼层">
              <el-input v-model="stayhomeform.floor"></el-input>
            </el-form-item>
            <el-form-item label="床的大小">
              <el-input v-model="stayhomeform.beds"></el-input>
            </el-form-item>
            <el-form-item label="媒体科技">
              <el-input v-model="stayhomeform.science"></el-input>
            </el-form-item>
            <el-form-item label="酒店浴室">
              <el-input v-model="stayhomeform.bathroom"></el-input>
            </el-form-item>
            <el-form-item label="容纳人数">
              <el-input v-model="stayhomeform.man"></el-input>
            </el-form-item>
            <el-form-item label="便利设施">
              <el-input v-model="stayhomeform.house"></el-input>
            </el-form-item>
            <el-form-item label="酒店缩略图"> </el-form-item>
            <el-form-item>
              <el-upload
                class="avatar-uploader"
                :action="uploadurl"
                :show-file-list="false"
                :on-success="handleThumbSuccess"
                :before-upload="handleThumbBefore"
              >
                <img
                  v-if="stayhomeform.sthumb"
                  :src="IMGURL + stayhomeform.sthumb"
                  class="avatar"
                />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png/jpeg/webp文件，且不超过200kb
                </div>
              </el-upload>
            </el-form-item>

            <el-form-item label="详情页轮播图"> </el-form-item>
            <el-form-item>
              <el-upload
                class="avatar-uploader"
                :action="uploadurl"
                list-type="picture-card"
                multiple
                :limit="5"
                :file-list="bannerFileList"
                :on-exceed="handleExceed"
                :on-success="handleBannerSuccess"
                :on-remove="handleBannerRemove"
                :before-upload="handleThumbBefore"
                :on-preview="handleBannerPreview"
              >
                <i class="el-icon-plus"></i>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png/jpeg/webp文件，且不超过200kb,最多5张
                </div>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="stayupdate(stayhomeform.sid)"
                >提交</el-button
              >
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
          <el-dialog :visible.sync="dialogVisible" style="text-align: center">
            <img
              :src="dialogPreviewImg"
              alt=""
              style="width: 300px; height: 300px"
            />
          </el-dialog>
        </div>
      </happy-scroll>
    </div>
  </div>
</template>

<script>
import loading from "../../../components/loading/loading";
import instance from "../../../http/http";
import city from "../../../lib/city.json";
import { SUCCESS, URL, IMGURL } from "../../../lib/base";
import { stayhomeRead } from "../../../http/stayhome";
import axios from "axios";
export default {
  name: "Stayhomeedit",
  components: {
    loading,
  },
  data() {
    return {
      IMGURL,
      uploadurl: URL + "/admin/upload/index",
      categories: [],
      showloading: false,
      stayhomeform: {},
      bannerArr: [],
      bannerFileList: [],
      city,
      province: [],
      dialogVisible: false,
      dialogPreviewImg: "",
    };
  },
  computed: {
    cityList() {
      let cityLists = [];
      let current = this.city.find(
        (ele) => ele.name === this.stayhomeform.sprovince
      );
      if (current) {
        cityLists = current.city.map((ele) => ele.name);
      }
      return cityLists;
    },
    areaList() {
      let area = [];
      let current = this.city.find(
        (ele) => ele.name === this.stayhomeform.sprovince
      );
      if (current) {
        let city = current.city.find(
          (ele) => ele.name === this.stayhomeform.scity
        );
        if (city) {
          area = city.area;
        }
      }
      return area;
    },
  },
  methods: {
    initStayhomeform(sid) {
      stayhomeRead(sid)
        .then((res) => {
          if (res.data) {
            this.stayhomeform = res.data;
            this.bannerArr = res.data.sbanner1;
            this.bannerFileList = res.data.sbanner1.map((ele) => ({
              name: res.data.sname,
              url: this.IMGURL + ele,
            }));
          }
          //this.bannerFileList
        })
        .catch((error) => {
          console.log(error);
        });
    },
    initcategory() {
      this.showloading = true;
      instance("/admin/category/indexall")
        .then((res) => {
          if (res.code === SUCCESS) {
            this.showloading = false;
            this.categories = res.data;
          }
        })
        .catch(() => {});
    },
    handleThumbSuccess(res) {
      if (res.code === SUCCESS) {
        this.stayhomeform.sthumb = res.imgpath;
      }
    },
    handleBannerSuccess(res) {
      this.bannerArr.push(res.imgpath);
      this.stayhomeform.sbanner = this.bannerArr.join(",");
    },
    handleBannerRemove(file) {
      let url = file.response ? file.response.imgpath : file.url;
      this.bannerArr = this.bannerArr.filter((ele) => !url.includes(ele));
      this.stayhomeform.sbanner = this.bannerArr.join(",");
    },
    handleBannerPreview(file) {
      this.dialogVisible = true;
      let url;
      if (file.response) {
        url = this.IMGURL + file.response.imgpath;
      } else {
        url = file.url;
      }
      // let url= this.IMGURL + file.response.imgpath;
      // this.dialogVisible=true;
      this.dialogPreviewImg = url;
    },
    handleThumbBefore(file) {
      let { size, type } = file;
      let uploadMaxsize = 1000 * 1024;
      let uploadType = ["image/jpg", "image/png", "image/webp", "image/jpeg"];
      let sizeFlag = true,
        typeFlag = true;
      sizeFlag = size < uploadMaxsize;
      typeFlag = uploadType.some((ele) => ele == type);
      if (!typeFlag) {
        this.$message.error("上传头像图片只能是 JPG,png,webp 格式!");
      }
      if (!sizeFlag) {
        this.$message.error("上传头像图片大小不能超过 200kB!");
      }
      return sizeFlag && typeFlag;
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    setSnotice(filed, html) {
      this.stayhomeform[filed] = html;
    },
    setProvince() {
      this.province = this.city.map((ele) => ele.name);
    },
    stayupdate() {
      axios
        .post(URL + "/admin/Stayedit/update", this.stayhomeform)
        .then((res) => {
          if (res.status === SUCCESS && res.data.code === SUCCESS) {
            this.$message.success(res.data.msg);
            this.$router.push("/stayhomeindex");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    let sid = this.$route.params.id;
    this.initStayhomeform(sid);
    this.initcategory();
    this.setProvince();
  },
};
</script>
<style >
.el-icon-plus.avatar-uploader-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
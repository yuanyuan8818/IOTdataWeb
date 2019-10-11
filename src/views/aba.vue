<template>
  <div class="aba">
    <h5 class="my-title">
      <i class="icon-iot-xingweifenxi"></i>
      <span>行为分析</span>
    </h5>
    <div class="nav">
      <i class="icon-iot-renlianshibie"></i>
      <i class="icon-iot-menjin"></i>
      <i class="icon-iot-tingchechang"></i>
    </div>
    <h4>人脸识别</h4>
    <el-carousel indicator-position="none" :autoplay="true">
      <el-carousel-item v-for="item in listData" :key="item.id">
        <div class="listWrap">
          <div class="listContent" v-for="children in item.data" :key="children.id">
            <div class="header-ico">
              <img :src="children.imgUrl" alt />
            </div>
            <div class="words">
              <h3>{{children.name}}</h3>
              <p>{{children.from}}</p>
              <p>{{children.des}}</p>
              <p>{{children.timer}}</p>
            </div>
            <div class="btn">
              <i>•</i> 出
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listData: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.post("/api/aba", {}).then(res => {
        if (res.status == 200) {
          this.listData = res.data.dataList;
        }
      });
    }
  }
};
</script>>
<style lang="scss" scoped>
.aba {
  width: 100%;
  height: 49vh;
  box-sizing: border-box;
  border: 1px #016ff3 solid;
  border-radius: 10px;
  padding: 10px 0;
  position: relative;
  .nav {
    width: 92%;
    height: 59px;
    margin: 15px auto 0;
    box-sizing: border-box;
    border: 1px #016ff3 solid;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    i {
      font-size: 38px;
    }
  }
  h4 {
    font-size: 14px;
    font-weight: 300;
    width: 92%;
    margin: 15px auto 0;
    color: #ffffff;
  }
  .el-carousel {
    width: 92%;
    margin: 15px auto 0;
    height: 70%;
    overflow: hidden;
    .listWrap {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: stretch;
      position: relative;
      height: 100%;
    }
    .listContent {
      box-sizing: border-box;
      height: 75px;
      display: flex;
      .header-ico {
        width: 75px;
        height: 75px;
        box-sizing: border-box;
        border-radius: 10px;
        border: 1px #016ff3 solid;
        img {
          width: 63px;
          height: 63px;
          border-radius: 10px;
          padding: 5px;
        }
      }
      .words {
        flex: 1;
        margin-left: 8px;
        h3 {
          font-size: 14px;
          font-weight: 300;
        }
        p {
          font-size: 13px;
          color: #ffffff;
        }
      }
      .btn {
        color: #19e519;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 15px;
        border: 1px #0170f5 solid;
        border-radius: 20px;
        height: 23px;
        i {
          font-size: 30px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
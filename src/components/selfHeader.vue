<template>
  <div class="home-header">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content header-time">{{ gettime }}</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content header-title">慧昇活智慧城市大数据</div>
      </el-col>
      <el-col :span="8" class="grid-content header-nav">
        <p>
          <span>总体态势</span><i class="icon-iot-xiala"></i>
        </p>
        <p><span>管理员</span><i class="icon-iot-guanliyuan"></i></p>
        <p><span>退出</span><i class="icon-iot-tuichu"></i></p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'selfHeader',
  data() {
    return {
      
      gettime: ''
    };
  },
  methods: {
    getTime: function() {
      var _this = this;
      let date = new Date();
      let week = '星期' + '日一二三四五六'.charAt(date.getDay());
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? '0' + new Date().getMinutes()
          : new Date().getMinutes();
      let ss =
        new Date().getSeconds() < 10
          ? '0' + new Date().getSeconds()
          : new Date().getSeconds();
      let gettime =
        hh + ':' + mf + ':' + ss + ' ' + yy + '/' + mm + '/' + dd + ' ' + week;
      return gettime;
    },
    currentTime() {
      setInterval(() => {
        this.gettime = this.getTime();
      }, 500);
    }
  },
  created() {
    this.currentTime();
  }
};
</script>
<style scoped lang="scss">
.el-col {
  padding: 0;
}
.home-header {
  width: 100%;
  height: 125px;
  box-sizing: border-box;
  background: url('../assets/images/bg_top.png') center center no-repeat;
  background-color: #09153d;
  .grid-content {
    line-height: 75px;
    font-size: 16px;
    border-radius: 4px;
    height: 72px;
  }
  .header-time{padding-left: 20px;}
  .header-title {
    font-size: 32px;
    text-align: center;
    line-height: 100px;
  }
  .header-nav{
    display: flex;justify-content: flex-end;
    p{
      margin-right: 30px;color: #0170f5;font-size: 16px;
      i{font-size: 16px;margin-left: 8px;}
    }
  }
}
</style>

<template>
  <el-container class="home">
    <el-header>
      <selfHeader></selfHeader>
    </el-header>
    <el-main>
      <el-col :gutter="20">
        <el-col :span="11">
          <div class="grid-content container-left">
            <div class="container-left-title">
              大数据统计分析
            </div>
            <div class="left-main">
              <!-- <analysis></analysis> -->
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content container-center">
            <aba></aba>
            <alarm></alarm>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content container-right">
            <safety></safety>
            <parking></parking>
            <state></state>
          </div>
        </el-col>
      </el-col>
    </el-main>
  </el-container>
</template>

<script>
import selfHeader from "@/components/selfHeader.vue";
import analysis from './analysis.vue';
import aba from './aba.vue';
import alarm from './alarm.vue';
import safety from './safety.vue';
import parking from './parking.vue';
import state from './state.vue';
export default {
  name: "home",
  components: {
    selfHeader,analysis,aba,alarm,safety,parking,state
  }
};
</script>

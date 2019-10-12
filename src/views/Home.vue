<template>
    <el-container class="home">
        <el-header>
            <selfHeader></selfHeader>
        </el-header>
        <el-main>
            <el-col :gutter="20">
                <el-col :span="11">
                    <div class="grid-content container-left">
                        <div class="container-left-title">大数据统计分析</div>
                        <div class="left-main">
                            <div class="main-item1">
                                <analysis ref="analysisObj"></analysis>
                                <mapObj />
                            </div>
                            <div class="main-item2"></div>
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
                        <state ref="stateObj"></state>
                    </div>
                </el-col>
            </el-col>
        </el-main>
    </el-container>
</template>

<script>
import selfHeader from '@/components/selfHeader.vue'
import analysis from './analysis.vue'
import aba from './aba.vue'
import alarm from './alarm.vue'
import safety from './safety.vue'
import parking from './parking.vue'
import state from './state.vue'
import mapObj from './mapObj.vue'
export default {
    data() {
        return {
            timer: null
        }
    },
    name: 'home',
    mounted() {
        this.timer = setInterval(() => {
            this.$refs.stateObj.getData()
            this.$refs.analysisObj.getData()
        }, 3000)
    },
    components: {
        selfHeader,
        analysis,
        aba,
        alarm,
        safety,
        parking,
        state,
        mapObj
    }
}
</script>

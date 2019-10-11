<template>
    <ul class="analysisList">
        <li>
            <div class="analysis-icon">
                <i class="icon-iot-shequ"></i>
            </div>
            <div class="analysis-words">
                <p>社区总数</p>
                <span>12600<i>个</i></span>
            </div>
        </li>
        <li>
            <div class="analysis-icon">
                <i class="icon-iot-fangwurenzheng"></i>
            </div>
            <div class="analysis-words">
                <p>认证房屋数</p>
                <span>68800<i>户</i></span>
            </div>
        </li>
        <li>
            <div class="analysis-icon">
                <i class="icon-iot-fuwuxiangmu"></i>
            </div>
            <div class="analysis-words">
                <p>服务项目数</p>
                <span>63800<i>个</i></span>
            </div>
        </li>
        <li v-for='item in allData' :key='item.name'>
            <div class="analysis-icon">
                <i :class="item.icon"></i>
            </div>
            <div class="analysis-words">
                <p>{{item.name}}</p>
                <span>{{item.val}}<i>个</i></span>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            allData:[]
        }
    },
    mounted(){
        this.getData();
    },
    methods:{
        getData(){
            this.$http.post('/api/analysis',{}).then(res => {
                if(res.status == 200){
                    this.allData = res.data.dataList;
                }
            });
        }
    }
}
</script>>
<style lang="scss" scoped>
.analysisList{
    display:flex;justify-content: space-between;flex-flow: wrap;width: 100%;box-sizing: border-box;
    li{
        width: 33.33%;height: 60px;background: url(../assets/images/bg_1.png) center center no-repeat;background-size: auto 100%;display: flex;justify-content: center;align-items: center;margin-bottom: 20px;
        .analysis-icon{
            width: 35px;height: 35px;box-sizing: border-box;background-color: #081e50;border:2px #016ef0 solid;border-radius: 100%;text-align: center;line-height: 30px;font-size: 20px;
        }
        .analysis-words{
            margin-left: 10px;
            p{
                font-size: 14px;
            }
            span{
                font-size: 15px;color: #ffffff;
                i{font-size: 14px;}
            }
        }
    }
}
</style>


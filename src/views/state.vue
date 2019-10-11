<template>
  <div class="state">
    <h5 class="my-title">
      <i class="icon-iot-shebei"></i>
      <span>设别运行实时状态</span>
    </h5>
    <ul class="nav">
      <li>
        <p>在线设备(个)</p>
        <h5>800</h5>
      </li>
      <li>
        <p>离线设备(个)</p>
        <h5>800</h5>
      </li>
      <li>
        <p>报警设备(个)</p>
        <h5>800</h5>
      </li>
      <li>
        <p>故障设备(个)</p>
        <h5>800</h5>
      </li>
    </ul>
    <div id="stateChart"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myChart: null
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.myChart.resize();
    });
    this.Drea();
  },
  methods: {
    Drea() {
      this.myChart = this.$echarts.init(
        document.getElementById("stateChart"),
        "dark"
      );

      var option = {
        backgroundColor: "#09153d",
        color: [
          "#dab54c",
          "#d78155",
          "#ed5450",
          "#563ad2",
        ],
        grid: {
          left: -100,
          top: 50,
          bottom: 10,
          right: 10,
          containLabel: true
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)"
        },
        polar: {},
        angleAxis: {
          interval: 1,
          type: "category",
          data: [],
          z: 10,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#0B4A6B",
              width: 1,
              type: "solid"
            }
          },
          axisLabel: {
            interval: 0,
            show: true,
            color: "#0B4A6B",
            margin: 8,
            fontSize: 16
          }
        },
        radiusAxis: {
          min: 40,
          max: 120,
          interval: 20,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#0B3E5E",
              width: 1,
              type: "solid"
            }
          },
          axisLabel: {
            formatter: "{value} %",
            show: false,
            padding: [0, 0, 20, 0],
            color: "#0B3E5E",
            fontSize: 16
          },
          splitLine: {
            lineStyle: {
              color: "#0B3E5E",
              width: 2,
              type: "solid"
            }
          }
        },
        calculable: true,
        series: [
          {
            type: "pie",
            radius: ["5%", "10%"],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false,
                length: 30,
                length2: 55
              },
              emphasis: {
                show: false
              }
            },
            data: [
              {
                name: "",
                value: 0,
                itemStyle: {
                  normal: {
                    color: "#0B4A6B"
                  }
                }
              }
            ]
          },
          {
            type: "pie",
            radius: ["90%", "95%"],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false,
                length: 30,
                length2: 55
              },
              emphasis: {
                show: false
              }
            },
            name: "",
            data: [
              {
                name: "",
                value: 0,
                itemStyle: {
                  normal: {
                    color: "#0B4A6B"
                  }
                }
              }
            ]
          },
          {
            stack: "a",
            type: "pie",
            radius: ["20%", "80%"],
            roseType: "area",
            zlevel: 10,
            labelLine: {
              normal: {
                show: true,
                length: 20,
                length2: 55
              },
              emphasis: {
                show: false
              }
            },
            data: [
              {
                value: 10,
                name: "在线设备"
              },
              {
                value: 5,
                name: "离线设备"
              },
              {
                value: 15,
                name: "报警设备"
              },
              {
                value: 25,
                name: "故障设备"
              }
            ]
          }
        ]
      };

      this.myChart.setOption(option);
    }
  }
};
</script>
<style lang="scss" scoped>
.state {
  width: 100%;
  height: 39.4vh;
  box-sizing: border-box;
  border: 1px #016ff3 solid;
  border-radius: 10px;
  padding: 10px 0;
  position: relative;
  margin: 20px auto 0;
  .nav {
    width: 92%;
    margin: 15px auto 0;
    height: 60px;
    display: flex;
    justify-content: space-between;
    li {
      width: 25%;
      height: 60px;
      background: url(../assets/images/bg_devicerunning.png) center center
        no-repeat;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        font-size: 12px;
        text-align: center;
      }
      h5 {
        font-size: 20px;
        color: #ffffff;
        text-align: center;
        font-weight: 500;
      }
    }
  }
  #stateChart {
    width: 92%;
    margin: 20px auto 0;
    height: calc(39.4vh - 150px);
  }
}
</style>
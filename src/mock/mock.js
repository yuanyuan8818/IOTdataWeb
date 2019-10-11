import Mock from "mockjs";

/*
 **社区数据
 */
Mock.mock("/api/analysis", /post|get/i, {
  "dataList|3":[
    {
      'name|+1':['智能设备数','APP用户总数','APP日活数'],
      'icon|+1':['icon-iot-zhinengshebei','icon-iot-appyonghux','icon-iot-weibiaoti102020202'],
      'val':'@integer(10000,99999)'
    }
  ]
})

/*
 **行为分析
 */
Mock.mock("/api/aba", /post|get/i, {
  "dataList|3": [
    {
      "id|+1": 0,
      "title|+1": ["人脸识别", "门磁监控", "停车监控"],
      "data|4":[
        {
          'id':'@increment',
          'name|1':['陌生人','可疑人物'],
          'from':'主机',
          'des':'门禁 摄像机人脸识别',
          'imgUrl':"@image('63x63', '#4A7BF7', 'Hello')",
          'timer':'@date("yyyy/MM/dd hh:mm:ss")',
        }
      ]
    }
  ]
});

/*
 **设备状态
 */
Mock.mock("/api/state", /post|get/i, {
  "dataList|4":[
    {
      'value':"@integer(800, 200)",
      'name|+1':['在线设备','离线设备','报警设备','故障设备']
    }
  ]
})

/*
 **设施维护 -> 事件列表
 */
Mock.mock("/maintain/event", /post|get/i, {
  "dataList|4": [
    {
      "id|+1": 0,
      "title|+1": ["待处理", "处理中", "带审核", "办结"],
      "val|1": ["@integer(500, 1500)"],
      "company|1": "件",
      "color|+1": [
        "#16efff #0000ff",
        "#bbf9a5 #00fff1",
        "#43ee74 #0000ff",
        "#16efff #8d9df9"
      ]
    }
  ]
});

/*
 **设施维护 -> 事件趋势
 */
Mock.mock("/maintain/trend", /post|get/i, {
  "dataList|6": [
    {
      "id|+1": [0, 1, 2, 3, 4, 5],
      "month|+1": ['1月', '2月', '3月', '4月', '5月', '6月'],
      "yData|31": ["@integer(60, 120)"]
    }
  ]
});

/*
 **设施维护 -> 设施状况
 */
Mock.mock("/maintain/facility", /post|get/i, {
  "dataList|4": [
    {
      "name|+1": ["故障", "正常", "瘫痪", "离线"],
      "type|1": "bar",
      "stack|1": "总量",
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      },
      "data|5": ["@integer(150, 400)"]
    }
  ]
});

/*
 **设施维护 -> 人员组织
 */
Mock.mock("/maintain/group", /post|get/i, {
  "dataList|1": [
    {
      type: "bar",
      "data|5": ["@integer(40, 60)"],
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      }
    }
  ]
});

/*
 **设施维护 -> 服务类型
 */
Mock.mock("/maintain/serviceChart", /post|get/i, {
  "dataList|1": [
    {
      name: "访问来源",
      type: "pie",
      radius: ["30%", "65%"],
      center: ["45%", "45%"],
      avoidLabelOverlap: false,
      "data|5": [
        {
          "value|1": "@integer(300, 1000)",
          "name|+1": ["市政", "基站", "治安", "通信", "IT类"]
        }
      ]
    }
  ]
});

/*
 **设施维护 -> 渠道来源
 */
Mock.mock("/maintain/channelChart", /post|get/i, {
  "dataList|5": ["@integer(12000, 50000)"]
});


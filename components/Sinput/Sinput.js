// components/Sinput/Sinput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title : {
      type : String,
      value: "default value"
    }
  },
  attached(){
    this.setData({
      num : 1,
      num2 : 2,
    })
  },
  /**
   * 组件的初始数据
   */
  data: {
    num : 0,
    num2 : 0,
    sum : 0
  },
  observers : {
    'num, num2' : function(num, num2){
      this.setData({
        sum : num + num2
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    fn(){
      let {num} = this.data
      num++
      this.setData({
        num
      })
      this.triggerEvent("my",11232132145)
    }
  }
})

// pages/gte-mine/gte-mine01.js
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:"",
    own:"",
    height:null,
    weight:null,
    cash:null,
    bmi: null,
  },
  mloney: function () {
    wx.navigateTo({
      url: '../gte-money/gte-money?cash='+this.data.cash,
    })
  },
  phone: function () {
    wx.navigateTo({
      url: '../gte-iphone/gte-iphone'
    })
  },
  //loadmore
  loadmore(){
    var that=this;
    db.collection("my_user").where({
      _openid:this.data.openid
    }).get().then(res=>{
      var obj = res.data[0]
      console.log(obj)
      that.setData({
        own:obj._id,
        height:obj.height,
        weight:obj.weight,
        cash:obj.cash.toFixed(2),
        bmi: (obj.weight / (obj.height * obj.height/10000)).toFixed(1)
      })
    })
  },

  //身高改变
  changeH(e){
    var that=this;
    this.setData({
      height: e.detail.value
    })
    wx.showLoading({
      title: '修改中..',
    })
    db.collection("my_user").doc(that.data.own).update({
      data:{
        height:that.data.height
      },
      success:res=> {
        wx.hideLoading();
        wx.showToast({
         title: '修改成功'
        })
      }
    })
  },
  changeW(e){
    var that = this;
    this.setData({
      weight: e.detail.value
    })
    wx.showLoading({
      title: '修改中..',
    })
    db.collection("my_user").doc(that.data.own).update({
      data: {
        weight: that.data.weight
      },
      success: res => {
        wx.hideLoading();
        wx.showToast({
          title: '修改成功'
        })
      }
    })
  },
  /**
   * 
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    //获取缓存区中的用户id
    wx.getStorage({
      key: 'openID',
      success: function(res) {
        that.setData({
          openid: res.data.openID
        })
      },
    })
    setTimeout(function(){
      that.loadmore()
    },500)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
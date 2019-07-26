// pages/gte-form-pwd/gte-form-pwd.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: null,
    list: [],
    openid:"",
  },
  code: function () {
    var nums= Math.floor(Math.random() * 99999);
    this.setData({
      num: nums
    })
  },
  loadMore: function (q) {
    var that=this;
    wx.getStorage({
      key: 'openID',
      success: function(res) {
        console.log(res)
        that.setData({
          openid:res.data.openID
        })
      },
    })
    db.collection("form-1").where({
        _openid:this.data.openid,
    }).get().then(res => {
      console.log(res)
      for(var i=0;i<res.data.length;i++){
        if(res.data[i].f_id==q){
          that.setData({
            list: res.data[i]
          })
        }
      }
      
    }).catch(err => {
      console.log(err);
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.f_id)
    this.code(options.f_id);
    this.loadMore(options.f_id)
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
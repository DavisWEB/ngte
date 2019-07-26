// pages/gte-index/gte-index01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {
        link: '/pages/gte-index/gte-index01',
        url: '/images/index_slices/index1.jpg'
      },
      {
        link: '/pages/gte-index/gte-index01',
        url: '/images/index_slices/index2.jpg'
      },
      {
        link: '/pages/gte-index/gte-index01',
        url: '/images/index_slices/index3.jpg'
      }
    ],
    tips: [
      { title: '立即点餐', font: 'Order immediately', images: '/images/index_slices/组 71@2x.png' },
      {
        title: '课程预约', font: 'Course booking',
        images: '/images/index_slices/组 72@2x.png'
      }
    ],
    indicatorDots: true,  //小点
    autoplay: true,  //是否自动轮播
    interval: 5000,  //间隔时间
    duration: 500,  //滑动时间
    indicatorCo: "#333",
    indicatoraAC: "#fff",
  },
  jump(){
    wx.switchTab({
      url: '/pages/gte-order/gte-order01',
    })},
  jumpv(){
    wx.switchTab({
      url: '/pages/gte-vip/gte-vip01',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
// pages/gte-form/gte-form01.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },
  deleteid(e) {
    console.log(e);
    var id = e.target.dataset.id;
    db.collection("form-1").doc(id).remove().then(res => {
      // console.log(res);
      this.loadMore();
    }).catch(err => {
      console.log(err);
      wx.showToast({
        title: '删除失败',
      })
    })
  },
 
  gopay(e){
    var s=e.target.dataset.status
    if (s === 0) {
      wx.navigateTo({
        url: '/pages/gte-form-s/gte-form-s',
      })}else{
        console.log(1)
      wx.showToast({
        title: '请稍后'
      })
      }
   
  },
  loadMore: function () {
    wx.showLoading({
      title: '加载中...',
    });
    db.collection("form-1").get().then(res => {
      console.log(res)
      wx.showToast({
        title: 'done',
      })
      for (var j = 0; j < res.data.length; j++) {
        var datas = res.data[j].datas;
        // for ( var i=0,sum=0;i<datas.length;i++) {
        //     var price=datas[i].price;
        //     var n=datas[i].qty;
        //       sum+=price*n
        //   }
        //   total[j]=sum;
      }
      // console.log(total);
      this.setData({
        list: res.data
      })
      console.log(this.data.list)
    }).catch(err => {
      console.log(err);
    })
  },

  /*添加数据
    addp:function(){
      db.collection("form-1").add({
        data:{
          name:"卡布奇诺",price:13,num:2,f_id:2,uid:2,status:2
        }
      }).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    },*/

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.loadMore();
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
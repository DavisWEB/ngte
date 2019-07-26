// pages/gte-form-s/gte-form-s.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:"",
    id:"",
    list: [],
    showPayPwdInput: false,  //是否展示密码输入层
    pwdVal: '',  //输入的密码
    payFocus: true,
    hiddenName: false,
    f_id:null,
  },
  deleteid(e) {
    // console.log(e);
    var id = e.target.dataset.id;
    db.collection("form-1").doc(id).remove().then(res => {
      // console.log(res);
      this.loadMore();
      wx.showToast({
        title: '取消成功',
      })
    }).catch(err => {
      console.log(err);
      wx.showToast({
        title: '取消失败',
      })
    })
  },

  loadMore: function (u_id) {
    var that=this
  

    db.collection("form-1").where({
      uid:u_id
    }).get().then(res => {
      console.log(res)
      var arr=[]
      for(var item of res.data){
        if(item.status===0){
          arr.push(item)
        }
      }
      this.setData({
        list: arr
      })
    }).catch(err => {
      console.log(err);
    })
  },

  showInputLayer: function (e) {
    if (e != null) {
       var f_id = e.target.dataset.fid}else{
         var f_id=""
       }
    this.setData({
       showPayPwdInput: true,
        payFocus: true, 
        hiddenName: !this.data.hiddenName,
        f_id:f_id
    });
  },
  /**
   * 隐藏支付密码输入层
   */
  hidePayLayer: function () {
    var that=this
    this.setData({ showPayPwdInput: false, payFocus: false, pwdVal: '' }, function () {
      wx.showToast({
        title: "输入正确",
      })
      wx.showLoading({
        title: '请稍后',
      })
      db.collection("form-1").where({
        _openid: this.data.openid,
      }).get().then(res=>{
        console.log("这是支付后修改状态码")
        for(var item of res.data){
          if (item.f_id == that.data.f_id){
            that.data.id=item._id
          }
        }
      })
      setTimeout(function(){
        db.collection("form-1").doc(that.data.id).update({
          data:{
            status:1
          }
        })
      },1000)
      wx.navigateTo({
        url: '/pages/gte-form-pwd/gte-form-pwd?f_id='+this.data.f_id

      })
    });

  },
  /**
   * 获取焦点
   */
  getFocus: function () {
    this.setData({ payFocus: true });
  },
  /**
   * 输入密码监听
   */
  inputPwd: function (e) {
    this.setData({ pwdVal: e.detail.value });

    if (e.detail.value.length >= 6) {
      this.hidePayLayer();
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.getStorage({
      key: 'openID',
      success: function(res) {
        that.setData({
          openid: res.data.openID
        })
      },
    })
    this.loadMore(options.uid);
    this.showInputLayer();
    
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